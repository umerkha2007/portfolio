"use client";

import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Iso } from "@/components/ui/iso";
import { BookCall } from "@/components/ui/book-call";
import { FadeIn } from "@/components/ui/fade-in";
import { scenes } from "@/lib/iso";
import { CONTACT_EMAIL } from "@/lib/constants";

const toc = [
  { n: "01", label: "What I do", href: "#services" },
  { n: "02", label: "BCMEA, port operations platform", href: "#bcmea" },
  { n: "03", label: "MediaValet, product modernization", href: "#mediavalet" },
  { n: "04", label: "MonetizeMore, ad technology tools", href: "#monetizemore" },
  { n: "05", label: "Talks and teaching", href: "#about" },
  { n: "06", label: "More companies I worked with", href: "#experience" },
  { n: "07", label: "How to reach me", href: "#contact" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const explode = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const artY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const cargo = useMemo(() => scenes.cargo(4), []);
  const proof = useMemo(
    () => [
      { shapes: scenes.stairs(6, 0.34), n: "10+ years", blue: true, p: "building full stack software, from startups to enterprise platforms" },
      { shapes: scenes.people(6), n: "500,000+", blue: false, p: "people using platforms I've designed and built" },
      { shapes: scenes.tower(10), n: "1M+ a day", blue: false, p: "requests handled by tools I built and shipped myself" },
    ],
    []
  );

  return (
    <section id="top" ref={ref} className="scene px-5 pb-14 pt-28 md:px-8 md:pb-16 md:pt-40">
      <div className="ls ls-cover" />
      <div className="gridbg" style={{ "--gx": "74%", "--gy": "34%" } as React.CSSProperties} />
      <div className="beam" style={{ left: "74%" }} />

      <div className="mx-auto max-w-[1180px]">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
          <FadeIn>
            <h1 className="display fade-type mt-8 text-[clamp(5rem,13.5vw,11.5rem)]">
              Umer
              <br />
              Khalid
            </h1>
            <p className="c-t2 mt-7 max-w-[470px] text-[clamp(1.25rem,2vw,1.6rem)] font-light leading-[1.3]">
              10+ Years Engineer building platforms for businesses that scale without breaking.
            </p>
            <div className="mt-8 flex items-center gap-2.5 sm:mt-9 sm:gap-3">
              <BookCall />
              <a href="#work" className="btn btn-ghost">
                See the work
                <ArrowDown size={16} />
              </a>
            </div>
          </FadeIn>

          <motion.div style={{ y: artY }} className="relative mx-auto w-full max-w-[640px] lg:-mr-6">
            <Iso shapes={cargo} hold={7} explode={explode} explodeBy={22} label="A stack of shipping containers, the top one blue" />
            <FadeIn delay={0.9} className="glass tag bottom-0 right-0 hidden sm:block">
              <b>Built to scale</b>
              one platform on top of the next
            </FadeIn>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-8 sm:mt-14 sm:gap-10 lg:grid-cols-[360px_1fr] lg:items-end">
          <FadeIn delay={0.1}>
            <div className="hair border-t">
              {toc.map((t) => (
                <a
                  key={t.n}
                  href={t.href}
                  className="hair c-t2 group grid grid-cols-[34px_1fr_auto] border-b py-[10px] text-[15px] transition-colors hover:text-[color:var(--t)]"
                >
                  <em className="c-bl font-semibold not-italic">{t.n}</em>
                  {t.label}
                  <span className="c-g2 transition-transform group-hover:translate-x-1">→</span>
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="glass grid gap-6 p-6 sm:grid-cols-3 sm:gap-0 sm:p-7">
            {proof.map((s, i) => (
              <div
                key={s.n}
                className={`flex items-center gap-5 sm:block ${i ? "hair border-t pt-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0" : "sm:pr-6"}`}
              >
                <div className="flex h-[76px] w-[96px] flex-none items-center sm:h-[84px] sm:w-auto">
                  <Iso shapes={s.shapes} className="max-h-[76px] !w-[96px] sm:max-h-[84px] sm:!w-[120px]" />
                </div>
                <div>
                  <div className={`n text-[30px] sm:mt-3 sm:text-[34px] ${s.blue ? "c-bl" : ""}`}>{s.n}</div>
                  <p className="c-g mt-2 text-[13.5px] leading-[1.4]">{s.p}</p>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>

        <div className="c-g2 mt-10 flex flex-wrap justify-between gap-2 text-[13px]">
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[color:var(--t)]">
            {CONTACT_EMAIL}
          </a>
          <span>Vancouver, British Columbia</span>
        </div>
      </div>
    </section>
  );
}
