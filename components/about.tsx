"use client";

import Image from "next/image";
import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Iso } from "@/components/ui/iso";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHead } from "@/components/ui/section-head";
import { people } from "@/lib/iso";

const facts = [
  { b: "Microsoft certified", t: "Azure AI and Azure Fundamentals" },
  { b: "Software Engineering", t: "Bachelor's degree" },
  { b: "BrainStation", t: "Senior Software Engineering Educator, 2024 to 2025" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const talk = useMemo(() => people.talk(), []);
  return (
    <section id="about" className="scene alt hair border-t px-5 py-16 md:px-8 md:py-32">
      <div className="ls ls-tl" />
      <div className="gridbg" style={{ "--gx": "30%", "--gy": "40%" } as React.CSSProperties} />

      <div className="mx-auto max-w-[1180px]">
        <SectionHead number="05" label="Talks and teaching" step={4} total={7} />

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
          <FadeIn className="relative">
            <div ref={ref} className="glass relative aspect-[16/10] overflow-hidden !rounded-[28px] p-0">
              <motion.div style={{ y }} className="absolute inset-[-8%]">
                <Image
                  src="/image/1.jpg"
                  alt="Umer Khalid giving a talk on AI, holding a microphone beside a laptop"
                  fill
                  sizes="(min-width: 1024px) 660px, 100vw"
                  className="object-cover object-[42%_30%]"
                />
              </motion.div>
              <div className="absolute inset-0 rounded-[28px] shadow-[inset_0_0_0_1px_rgba(255,255,255,.18)]" />
            </div>
            <div className="glass tag -bottom-5 left-5 sm:left-8" style={{ background: "var(--nav-bg)" }}>
              <b>On stage</b>
              talking about AI and the future of jobs
            </div>
            <div className="absolute -right-8 -top-24 hidden w-[280px] sm:block">
              <Iso shapes={talk} label="A speaker at a lectern in front of a screen, talking to nine seated listeners" />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="h-sec text-[clamp(2.4rem,5vw,4rem)]">Beyond the build.</h2>
            <p className="c-t2 mt-5 text-[19px] leading-[1.5]">
              Active in the Vancouver tech community, delivering talks on AI and mentoring the next generation of
              developers.
            </p>
            <div className="hair mt-8 border-t">
              {facts.map((f) => (
                <div key={f.b} className="hair grid grid-cols-[1fr_1.2fr] gap-4 border-b py-4">
                  <b className="text-[16px] font-semibold tracking-[-0.02em]">{f.b}</b>
                  <span className="c-g text-[14.5px] leading-[1.4]">{f.t}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
