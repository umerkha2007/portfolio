"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  motionValue,
  useInView,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { COL, type Box, type Shape } from "@/lib/iso";

const C = Math.cos(Math.PI / 6);
const S = Math.sin(Math.PI / 6);
const P = (x: number, y: number, z: number): [number, number] => [(x - y) * C, (x + y) * S - z];
const ZERO = motionValue(0);
const f = (v: number) => v.toFixed(1);
const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export type Caption = { at: number; text: string };

type IsoProps = {
  shapes: Shape[];
  className?: string;
  unit?: number;
  // 0..1 scroll progress; lifts each box in proportion to its height in the stack
  explode?: MotionValue<number>;
  explodeBy?: number;
  label?: string;
  // one line under the diagram that follows the build, saying what each stage means
  captions?: Caption[];
  // seconds the finished diagram stays before the whole thing clears and plays again
  hold?: number;
};

type Prepared = {
  box: Box;
  top: string;
  left: string;
  right: string;
  ribs: [number, number, number, number][];
};

function BoxG({ item, explode, explodeBy, amp, unit }: { item: Prepared; explode: MotionValue<number>; explodeBy: number; amp: number; unit: number }) {
  const { box } = item;
  const c = typeof box.c === "string" ? COL[box.c] : box.c;
  const lift = useTransform(explode, (v) => -box.z * v * explodeBy);
  const at = box.at ?? 0;
  const dur = box.dur ?? 0.5;
  const faces = (
    <>
      <polygon points={item.top} fill={c.t} stroke={c.s} />
      <polygon points={item.left} fill={c.l} stroke={c.s} />
      <polygon points={item.right} fill={c.r} stroke={c.s} />
      {item.ribs.map((r, i) => (
        <line key={i} x1={r[0]} y1={r[1]} x2={r[2]} y2={r[3]} stroke="rgba(255,255,255,.13)" />
      ))}
    </>
  );
  if (box.travel) {
    // a box riding the belt: appears at the start, slides the length of it, fades off the end, repeats
    const X = box.travel.dx * C * unit;
    const Y = box.travel.dx * S * unit;
    return (
      <motion.g
        variants={{
          hidden: { opacity: 0, x: 0, y: 0 },
          show: {
            opacity: [0, 1, 1, 0],
            x: [0, X * 0.06, X * 0.94, X],
            y: [0, Y * 0.06, Y * 0.94, Y],
            transition: { delay: at, duration: box.travel.dur, times: [0, 0.06, 0.94, 1], ease: "linear", repeat: Infinity },
          },
        }}
      >
        {faces}
      </motion.g>
    );
  }
  return (
    <motion.g
      variants={{
        hidden: { opacity: 0, y: box.dy ?? -28 },
        show: { opacity: 1, y: 0, transition: { delay: at, duration: dur, ease: EASE } },
      }}
    >
      <motion.g style={{ y: lift }}>
        {box.float ? (
          // only pieces that stand clear of their neighbours hover, and only once they have landed
          <g className="iso-bob" style={{ "--amp": `${amp}px`, animationDelay: `${(at + dur).toFixed(2)}s` } as React.CSSProperties}>
            {faces}
          </g>
        ) : (
          faces
        )}
      </motion.g>
    </motion.g>
  );
}

export function Iso({ shapes, className, unit = 40, explode, explodeBy = 16, label, captions, hold = 4.5 }: IsoProps) {
  const id = useId().replace(/:/g, "");
  const reduce = useReducedMotion();
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const [started, setStarted] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [clearing, setClearing] = useState(false);
  const [cap, setCap] = useState(-1);

  const scene = useMemo(() => {
    const pts: [number, number][] = [];
    for (const s of shapes) {
      if (s.k === "box") {
        for (const a of [0, s.w]) for (const b of [0, s.d]) for (const c of [0, s.h]) pts.push(P(s.x + a, s.y + b, s.z + c));
      } else if (s.k === "line") pts.push(P(...s.a), P(...s.b));
    }
    const xs = pts.map((p) => p[0]);
    const ys = pts.map((p) => p[1]);
    const mx = Math.min(...xs);
    const my = Math.min(...ys);
    const pad = 12;
    const W = (Math.max(...xs) - mx) * unit + pad * 2;
    const H = (Math.max(...ys) - my) * unit + pad * 2;
    const Q = (x: number, y: number, z: number): [number, number] => {
      const p = P(x, y, z);
      return [(p[0] - mx) * unit + pad, (p[1] - my) * unit + pad];
    };
    const poly = (arr: [number, number, number][]) => arr.map((a) => Q(...a).map(f).join(",")).join(" ");

    const boxes: Prepared[] = [];
    const lines: { a: [number, number]; b: [number, number]; at: number }[] = [];
    const pools: { c: [number, number]; rx: number; ry: number; at: number }[] = [];
    let end = 0;
    for (const s of shapes) {
      if (s.k === "pool") pools.push({ c: Q(s.x, s.y, s.z || 0), rx: s.r * unit * 1.22, ry: s.r * unit * 0.71, at: s.at ?? 0 });
      else if (s.k === "line") {
        lines.push({ a: Q(...s.a), b: Q(...s.b), at: s.at ?? 0 });
        end = Math.max(end, (s.at ?? 0) + 0.6);
      } else {
        const { x, y, z, w, d, h } = s;
        const ribs: Prepared["ribs"] = [];
        if (s.ribs)
          for (let r = 1; r < s.ribs; r++) {
            const xx = x + (w * r) / s.ribs;
            const a = Q(xx, y + d, z + h * 0.1);
            const b = Q(xx, y + d, z + h * 0.9);
            ribs.push([a[0], a[1], b[0], b[1]]);
          }
        boxes.push({
          box: s,
          top: poly([[x, y, z + h], [x + w, y, z + h], [x + w, y + d, z + h], [x, y + d, z + h]]),
          left: poly([[x, y + d, z + h], [x + w, y + d, z + h], [x + w, y + d, z], [x, y + d, z]]),
          right: poly([[x + w, y, z + h], [x + w, y + d, z + h], [x + w, y + d, z], [x + w, y, z]]),
          ribs,
        });
        end = Math.max(end, (s.at ?? 0) + (s.dur ?? 0.5));
      }
    }
    return { W, H, boxes, lines, pools, end };
  }, [shapes, unit]);

  useEffect(() => {
    if (inView) setStarted(true);
  }, [inView]);

  // One clock per diagram: build in order, hold, clear everything together, play again.
  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setCap(captions ? captions.length - 1 : -1);
      return;
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    captions?.forEach((c, i) => timers.push(setTimeout(() => setCap(i), c.at * 1000)));
    const total = scene.end + hold;
    timers.push(
      setTimeout(() => {
        setClearing(true);
        setCap(-1);
      }, total * 1000)
    );
    timers.push(
      setTimeout(() => {
        setClearing(false);
        setCycle((c) => c + 1);
      }, (total + 0.8) * 1000)
    );
    return () => timers.forEach(clearTimeout);
  }, [inView, cycle, reduce, captions, scene.end, hold]);

  const svg = (
    <svg
      ref={ref}
      viewBox={`0 0 ${f(scene.W)} ${f(scene.H)}`}
      className={`iso ${className ?? ""}`}
      style={{ overflow: "visible" }}
      width="100%"
      role="img"
      aria-label={label ?? "Isometric diagram"}
    >
      <defs>
        <radialGradient id={`${id}p`}>
          <stop offset="0" stopColor="#2b7fff" style={{ stopOpacity: "var(--iso-pool)" }} />
          <stop offset="1" stopColor="#2b7fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <motion.g animate={{ opacity: clearing ? 0 : 1 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
        <motion.g key={cycle} initial={reduce ? "show" : "hidden"} animate={started || reduce ? "show" : "hidden"}>
          {scene.pools.map((p, i) => (
            <motion.ellipse
              key={i}
              cx={p.c[0]}
              cy={p.c[1]}
              rx={p.rx}
              ry={p.ry}
              fill={`url(#${id}p)`}
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: p.at, duration: 0.9 } } }}
            />
          ))}
          {scene.lines.map((l, i) => (
            <g key={i}>
              <motion.line
                x1={l.a[0]}
                y1={l.a[1]}
                x2={l.b[0]}
                y2={l.b[1]}
                stroke="var(--iso-line)"
                strokeWidth={1.6}
                strokeLinecap="round"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  show: { pathLength: 1, opacity: 1, transition: { delay: l.at, duration: 0.6, ease: "easeOut" } },
                }}
              />
              {/* a packet travelling along the connection, once it exists */}
              <motion.circle
                r={unit * 0.09}
                fill="var(--bll)"
                variants={{
                  hidden: { opacity: 0, cx: l.a[0], cy: l.a[1] },
                  show: {
                    opacity: [0, 1, 1, 0],
                    cx: [l.a[0], l.a[0], l.b[0], l.b[0]],
                    cy: [l.a[1], l.a[1], l.b[1], l.b[1]],
                    transition: {
                      delay: l.at + 0.9 + i * 0.35,
                      duration: 1.4,
                      times: [0, 0.1, 0.9, 1],
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      ease: "easeInOut",
                    },
                  },
                }}
              />
            </g>
          ))}
          <g strokeWidth={0.8} strokeLinejoin="round">
            {scene.boxes.map((b, i) => (
              <BoxG key={i} item={b} explode={explode ?? ZERO} explodeBy={explodeBy} amp={unit * 0.2} unit={unit} />
            ))}
          </g>
        </motion.g>
      </motion.g>
    </svg>
  );

  if (!captions) return svg;

  return (
    <figure className="flex w-full flex-col items-center">
      {svg}
      <figcaption className="iso-cap">
        <AnimatePresence mode="wait">
          {cap >= 0 && (
            <motion.span
              key={`${cycle}-${cap}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <i>{String(cap + 1).padStart(2, "0")}</i>
              {captions[cap].text}
            </motion.span>
          )}
        </AnimatePresence>
      </figcaption>
    </figure>
  );
}
