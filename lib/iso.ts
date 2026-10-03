// Isometric scene presets, ported from the PDF portfolio's js/iso.js.

export type Col = { t: string; l: string; r: string; s: string };
export type Tone = "gr" | "gr2" | "gl" | "bl" | "bld";

export type Box = {
  k: "box";
  x: number;
  y: number;
  z: number;
  w: number;
  d: number;
  h: number;
  c: Tone | Col;
  ribs?: number;
  float?: boolean;
  // seconds into the build at which this box arrives
  at?: number;
  // how far above its place it starts (px in scene units) and how long the arrival takes
  dy?: number;
  dur?: number;
  // once it arrives, slide this far along the x axis, over this many seconds, on a loop
  travel?: { dx: number; dur: number };
};
export type Line = { k: "line"; a: [number, number, number]; b: [number, number, number]; at?: number };
export type Pool = { k: "pool"; x: number; y: number; z?: number; r: number; at?: number };
export type Shape = Box | Line | Pool;

export const COL: Record<Tone, Col> = {
  gr: { t: "#3f3f46", l: "#27272a", r: "#18181b", s: "rgba(255,255,255,.12)" },
  gr2: { t: "#52525c", l: "#3f3f46", r: "#27272a", s: "rgba(255,255,255,.14)" },
  gl: {
    t: "var(--iso-glass-t)",
    l: "var(--iso-glass-l)",
    r: "var(--iso-glass-r)",
    s: "var(--iso-glass-s)",
  },
  bl: { t: "#8ec5ff", l: "#2b7fff", r: "#155dfc", s: "rgba(255,255,255,.32)" },
  bld: { t: "#51a2ff", l: "#155dfc", r: "#1447e6", s: "rgba(255,255,255,.28)" },
};

const B = (x: number, y: number, z: number, w: number, d: number, h: number, c: Tone | Col, at = 0, extra: Partial<Box> = {}): Box => ({
  k: "box",
  x,
  y,
  z,
  w,
  d,
  h,
  c,
  at,
  ...extra,
});

const sortB = (a: Box[]) => a.sort((p, q) => p.z - q.z || p.x + p.y - (q.x + q.y));
const plate = (x: number, y: number, w: number, d: number) => B(x, y, -0.14, w, d, 0.14, "gl", 0);
const pool = (x: number, y: number, r: number, at = 0): Pool => ({ k: "pool", x, y, r, at });
const alt = (i: number): Tone => (i % 2 ? "gr2" : "gr");

// Every scene is a short story: `at` is when each piece arrives, so the build order says what the diagram means.
export const scenes = {
  // platforms stacked level by level, then the blue container is lowered onto the top
  cargo(levels = 4): Shape[] {
    const it: Box[] = [];
    const cols: Tone[] = ["gr", "gr2", "gl"];
    const topAt = (levels - 1) * 0.6 + 0.3;
    for (let L = 0; L < levels; L++) {
      const n = levels - L;
      const top = L === levels - 1;
      for (let k = 0; k < n; k++)
        it.push(
          top
            ? B(0, k * 1.06 + L * 0.53, L, 2.5, 1, 1, "bl", topAt, { ribs: 10, float: true, dy: -150, dur: 1.5 })
            : B(0, k * 1.06 + L * 0.53, L, 2.5, 1, 1, cols[L % 3], L * 0.6 + k * 0.12, { ribs: 10 })
        );
    }
    return [pool(1.25, levels * 0.53, 2.4, topAt + 1), ...sortB(it)];
  },
  // steps rise one after another, the last and tallest is blue
  stairs(n = 8, step = 0.32, gap = 0.4): Shape[] {
    const it: Box[] = [];
    for (let i = 0; i < n; i++)
      it.push(B(i * 1.25, 0, 0, 1.05, 1.05, 0.4 + i * step, i === n - 1 ? "bl" : alt(i), i * gap));
    return [pool((n - 1) * 1.25 + 0.5, 0.5, 1.8, (n - 1) * gap + 0.3), ...sortB(it)];
  },
  // a crowd spreads out from the centre, then some of it lights up
  people(n = 7): Shape[] {
    const it: Box[] = [];
    const mid = (n - 1) / 2;
    const greyEnd = 0.2 + 2 * mid * 0.14;
    let lit = 0;
    for (let r = 0; r < n; r++)
      for (let q = 0; q < n; q++) {
        const h = 0.35 + ((r * 3 + q * 5) % 4) * 0.12;
        const blue = (r + q) % 6 === 0;
        const at = blue ? greyEnd + 0.6 + lit++ * 0.22 : 0.2 + (Math.abs(r - mid) + Math.abs(q - mid)) * 0.14;
        it.push(B(q * 0.75, r * 0.75, 0, 0.55, 0.55, h, blue ? "bl" : alt(r + q), at));
      }
    return [plate(-0.25, -0.25, n * 0.75 + 0.25, n * 0.75 + 0.25), ...sortB(it)];
  },
  // requests pile up layer by layer, the newest layers blue
  tower(layers = 14): Shape[] {
    const it: Box[] = [plate(-0.4, -0.4, 2.4, 2.4)];
    for (let i = 0; i < layers; i++)
      it.push(B(0, 0, i * 0.2, 1.6, 1.6, 0.14, i >= layers - 3 ? "bl" : alt(i), 0.2 + i * 0.16));
    const side: Box[] = [];
    for (let i = 0; i < 6; i++) side.push(B(2.3, 0.2, i * 0.2, 1, 1, 0.14, alt(i), 0.4 + i * 0.16));
    return [pool(0.8, 0.8, 1.6, 0.2 + (layers - 3) * 0.16), ...it, ...side];
  },
  // the first terminal's users in blue, then one more row for every terminal that joined
  yard(rows = 10, cols = 10): Shape[] {
    const shades = ["#27272a", "#2c2c30", "#323237", "#38383e", "#3f3f46", "#46464e", "#4c4c55", "#52525c", "#5b5b65"];
    const it: Box[] = [];
    const beat = yardBeats(rows);
    for (let r = 0; r < rows; r++)
      for (let q = 0; q < cols; q++) {
        const front = r === rows - 1;
        const c: Tone | Col = front
          ? "bl"
          : { t: shades[Math.min(r, shades.length - 1)], l: "#1f1f23", r: "#141417", s: "rgba(255,255,255,.09)" };
        // rows are added from the blue row backwards
        const at = front ? 0.2 + q * 0.08 : beat.more + (rows - 2 - r) * beat.step + q * 0.02;
        it.push(B(q * 2.6, r * 1.35, 0, 2.2, 1, 1, c, at, { ribs: 6 }));
      }
    return [pool(cols * 1.3, rows * 1.26, 8, 0.2), ...sortB(it)];
  },
  // four sources, connected one by one to a hub that rises last
  hub(): Shape[] {
    const L = (b: [number, number, number], at: number): Line => ({ k: "line", a: b, b: [2, 2, 0], at });
    return [
      L([0.45, 0.45, 0], 1.3),
      L([3.55, 0.45, 0], 1.5),
      L([0.45, 3.55, 0], 1.7),
      L([3.55, 3.55, 0], 1.9),
      pool(2, 2, 1.5, 2.6),
      ...sortB([
        B(0, 0, 0, 0.9, 0.9, 0.7, "gr2", 0),
        B(3.1, 0, 0, 0.9, 0.9, 0.7, "gr2", 0.25),
        B(0, 3.1, 0, 0.9, 0.9, 0.7, "gr2", 0.5),
        B(3.1, 3.1, 0, 0.9, 0.9, 0.7, "gr2", 0.75),
        B(1.5, 1.5, 0, 1, 1, 1.3, "bl", 2.6, { float: true, dy: -60, dur: 0.8 }),
      ]),
    ];
  },
  cube(): Shape[] {
    return [pool(0.6, 0.6, 1.9, 0.6), B(0, 0, 0, 1.2, 1.2, 1.2, "bl", 0, { float: true, dy: -90, dur: 1.1 })];
  },
  // one block, then ten
  growth(): Shape[] {
    const it: Box[] = [B(0, 1.2, 0, 0.9, 0.9, 0.9, "gr2", 0.3)];
    for (let q = 0; q < 5; q++)
      for (let r = 0; r < 2; r++) it.push(B(2 + q * 1.05, r * 1.05 + 0.6, 0, 0.9, 0.9, 0.9, "bl", 1.6 + (q * 2 + r) * 0.2));
    return [plate(-0.3, 0.3, 8, 2.8), pool(4.5, 1.6, 2.6, 1.6), ...sortB(it)];
  },
  // the product first, then a new shell forms around it
  merge(): Shape[] {
    return [
      plate(-0.3, -0.3, 3.6, 3.6),
      pool(1.5, 1.5, 1.8, 0.4),
      B(0.75, 0.75, 0, 1.5, 1.5, 1.5, "bl", 0.4),
      B(0, 0, 0, 3, 3, 3, "gl", 1.8, { dy: -70, dur: 1.1 }),
    ];
  },
  // a track, then four stages in order; the third is the gate
  path(): Shape[] {
    const it: Box[] = [B(0, 0, 0, 9, 1.4, 0.12, "gl", 0)];
    (["gr2", "gr2", "bl", "gr2"] as Tone[]).forEach((c, i) =>
      it.push(B(0.4 + i * 2.25, 0.25, 0.12, 0.9, 0.9, c === "bl" ? 1.2 : 0.8, c, 0.5 + i * 0.7))
    );
    return [pool(5.4, 0.7, 1.5, 0.5 + 2 * 0.7), ...sortB(it)];
  },
  // a conveyor: identical blue boxes roll off one after another at an even pace
  belt(count = 6, dur = 6): Shape[] {
    // drawn back to front: far rail, belt, boxes, near rail
    const it: Box[] = [B(0, -0.12, 0, 9, 0.12, 0.42, "gl", 0.1), B(0, 0, 0, 9, 1.4, 0.3, "gr2", 0, { ribs: 22 })];
    // the box furthest along the belt is nearest the viewer, so it is drawn last
    for (let i = count - 1; i >= 0; i--)
      it.push(B(0.15, 0.25, 0.3, 0.9, 0.9, 0.7, "bl", 0.5 + (i * dur) / count, { travel: { dx: 7.8, dur } }));
    it.push(B(0, 1.4, 0, 9, 0.12, 0.42, "gl", 0.1));
    return [pool(4.5, 0.7, 3.4, 0.5), ...it];
  },

  // the lead lands in the centre first, then the team settles around it one by one
  team(): Shape[] {
    const lead = B(1.025, 1.025, 0, 1.5, 1.5, 1.5, "bl", 0.3, { dy: -110, dur: 1 });
    // the outer ring of a 5 x 5 grid, walked clockwise from the back corner
    const ring: [number, number][] = [];
    for (let q = 0; q < 5; q++) ring.push([q, 0]);
    for (let r = 1; r < 5; r++) ring.push([4, r]);
    for (let q = 3; q >= 0; q--) ring.push([q, 4]);
    for (let r = 3; r >= 1; r--) ring.push([0, r]);
    const it: Box[] = ring.map(([q, r], i) =>
      B(q * 0.75, r * 0.75, 0, 0.55, 0.55, 0.4 + ((q * 3 + r * 5) % 3) * 0.14, i % 2 ? "gr2" : "gr", 1.9 + i * 0.16)
    );
    const mid = (b: Box) => b.x + b.w / 2 + b.y + b.d / 2;
    return [plate(-0.25, -0.25, 4.05, 4.05), pool(1.775, 1.775, 1.7, 0.3), ...[lead, ...it].sort((p, q) => mid(p) - mid(q))];
  },
  // slabs stack up, the top one blue
  step(n = 4): Shape[] {
    const it: Shape[] = [plate(-0.3, -0.3, 2.6, 2.6), pool(1, 1, 1.6, 0.3 + (n - 1) * 0.45)];
    for (let i = 0; i < n; i++) it.push(B(0, 0, i * 0.42, 2, 2, 0.36, i === n - 1 ? "bl" : alt(i), 0.3 + i * 0.45));
    return it;
  },
  // two lanes: a few big deliveries, then a run of small ones
  lanes(): Shape[] {
    const it: Box[] = [B(0, 0, 0, 11, 1.6, 0.15, "gl", 0), B(0, 2.4, 0, 11, 1.6, 0.15, "gl", 0.15)];
    it.push(
      B(0.4, 0.2, 0.15, 2.6, 1.2, 1.2, "gr2", 0.5, { ribs: 8 }),
      B(3.6, 0.2, 0.15, 2.6, 1.2, 1.2, "gr2", 0.85, { ribs: 8 }),
      B(6.8, 0.2, 0.15, 2.6, 1.2, 1.2, "gr", 1.2, { ribs: 8 })
    );
    for (let i = 0; i < 6; i++) it.push(B(0.5 + i * 1.75, 2.75, 0.15, 0.9, 0.9, 0.6, "bl", 1.9 + i * 0.2));
    return [pool(6, 3.2, 4, 1.9), ...sortB(it)];
  },
};

// a figure made of two blocks: body and head
function person(x: number, y: number, c: Tone, at: number, seated = false): Box[] {
  const h = seated ? 0.75 : 1.2;
  return [B(x, y, 0, 0.8, 0.8, h, c, at), B(x + 0.12, y + 0.12, h + 0.07, 0.56, 0.56, 0.56, c, at + 0.18)];
}

export const people = {
  // a doctor and a patient, then a message each way
  consult(): Shape[] {
    const say = (x: number, c: Tone, at: number) => B(x, 0.94, 2.15, 0.9, 0.12, 0.5, c, at, { float: true, dy: -20 });
    const link = (y: number, from: number, to: number, at: number): Line => ({ k: "line", a: [from, y, 0.7], b: [to, y, 0.7], at });
    return [
      link(0.8, 1.05, 2.95, 1.7),
      link(1.2, 2.95, 1.05, 2.6),
      pool(0.6, 1, 1.3, 0.4),
      plate(-0.4, -0.2, 4.6, 2.2),
      ...sortB([...person(0.2, 0.6, "bl", 0.4), ...person(3.0, 0.6, "gr2", 1.0), say(0.15, "bl", 1.7), say(2.95, "gl", 2.6)]),
    ];
  },
  // a board, a mentor in front of it, students at their desks, then the work appearing on each desk
  classroom(): Shape[] {
    const it: Box[] = [B(-0.7, 0.2, 0, 0.12, 3.4, 2.2, "gl", 0.2), ...person(0.2, 1.5, "bl", 0.6)];
    let n = 0;
    for (const x of [2.4, 3.8])
      for (const y of [0.2, 1.5, 2.8]) {
        const at = 1.3 + n * 0.22;
        it.push(B(x - 0.6, y, 0, 0.36, 0.8, 0.5, "gr", at), ...person(x, y, "gr2", at, true));
        it.push(B(x - 0.55, y + 0.22, 0.5, 0.26, 0.36, 0.22, "bl", 3.1 + n * 0.25));
        n++;
      }
    return [pool(0.6, 1.9, 1.5, 0.6), plate(-1, -0.2, 6, 4.2), ...sortB(it)];
  },
  // a screen, a speaker at a lectern, an audience taking its seats, then the talk reaching them
  talk(): Shape[] {
    const it: Box[] = [
      B(-0.7, 0.2, 0, 0.12, 3.4, 2.2, "gl", 0.2),
      ...person(0.2, 1.5, "bl", 0.6),
      B(1.25, 1.6, 0, 0.4, 0.6, 0.75, "gr", 0.8),
      B(0.15, 1.84, 2.15, 0.9, 0.12, 0.5, "bl", 3.3, { float: true, dy: -20 }),
    ];
    let n = 0;
    for (const x of [3.0, 4.3, 5.6])
      for (const y of [0.2, 1.5, 2.8]) it.push(...person(x, y, "gr2", 1.5 + n++ * 0.18, true));
    const reach = (y: number, at: number): Line => ({ k: "line", a: [1.8, 1.9, 0.9], b: [2.95, y + 0.4, 0.9], at });
    return [reach(0.2, 3.5), reach(1.5, 3.7), reach(2.8, 3.9), pool(0.6, 1.9, 1.5, 0.6), plate(-1, -0.2, 7.7, 4.2), ...sortB(it)];
  },
};

// moments in the yard build, so captions can follow it
export function yardBeats(rows: number) {
  const more = 2;
  const step = 0.45;
  return { more, step, all: more + (rows - 2) * step };
}

export type SceneName = keyof typeof scenes;
