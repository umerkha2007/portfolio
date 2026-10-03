"use client";

import { useMemo } from "react";
import { Iso } from "@/components/ui/iso";
import { FadeIn, FadeInItem, FadeInStagger } from "@/components/ui/fade-in";
import { SectionHead } from "@/components/ui/section-head";
import { scenes } from "@/lib/iso";

const names = ["BCMEA", "MediaValet", "MonetizeMore", "Doctors-365", "BrainStation", "Smart Coders DMCC", "Shoclef"];

export function Services() {
  const cards = useMemo(
    () => [
      {
        shapes: scenes.growth(),
        captions: [{ at: 0.3, text: "One terminal" }, { at: 1.6, text: "The same platform, ten terminals and counting" }],
        title: "Platform architecture",
        body: "Designing the platform, building the key parts myself, and taking a system from one site to many without slowing anyone down.",
        n: "1 to 10+",
        proof: "terminals on one platform at BCMEA",
      },
      {
        shapes: scenes.merge(),
        captions: [{ at: 0.4, text: "The product customers use every day" }, { at: 1.8, text: "A modern foundation built around it" }],
        title: "Product modernization",
        body: "Moving the part of a product customers touch every day off an older foundation and onto a modern one.",
        n: "Angular to React",
        proof: "customer facing product at MediaValet",
      },
      {
        shapes: scenes.belt(),
        hold: 9,
        captions: [
          { at: 0.5, text: "A release rolls off the line" },
          { at: 2.5, text: "Then the next, at the same pace" },
          { at: 5.5, text: "Delivered consistently, release after release" },
        ],
        title: "Quality and release",
        body: "Bringing testing in house, automating the build and release pipeline, and leading the process that gets a platform into production.",
        n: "2 months early",
        proof: "BCMEA went live ahead of schedule",
      },
      {
        shapes: scenes.team(),
        captions: [
          { at: 0.3, text: "The lead lands first" },
          { at: 1.9, text: "iOS, Android and web developers settle around it" },
          { at: 4.3, text: "One team, held together" },
        ],
        title: "Team leadership",
        body: "Leading iOS, Android and web developers on client projects, and mentoring engineers from curriculum design to one on one code review.",
        n: "Lead and mentor",
        proof: "Smart Coders DMCC and BrainStation",
      },
    ],
    []
  );

  return (
    <section id="services" className="scene alt hair border-t px-5 py-16 md:px-8 md:py-32">
      <div className="ls ls-tl" />
      <div className="gridbg" style={{ "--gx": "12%", "--gy": "14%" } as React.CSSProperties} />

      <div className="mx-auto max-w-[1180px]">
        <SectionHead number="01" label="What I do" step={0} total={7} />
        <FadeIn className="mt-10 max-w-[760px]">
          <h2 className="h-sec text-[clamp(2.6rem,6vw,4.75rem)]">Real Value. Real Results.</h2>
          <p className="c-t2 mt-5 text-[19px] leading-[1.5]">
            I have designed, delivered and maintained systems that run for millions of requests daily.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-12 grid gap-4 md:grid-cols-2">
          {cards.map((c) => (
            <FadeInItem key={c.title} className="glass glass-hover flex flex-col p-6 md:p-8">
              <div className="flex h-[190px] items-center justify-center sm:h-[215px]">
                <Iso shapes={c.shapes} captions={c.captions} hold={c.hold} className="max-h-[170px] max-w-[340px]" />
              </div>
              <h3 className="mt-5 text-[24px] font-semibold leading-[1.15] tracking-[-0.025em] sm:mt-6 sm:text-[26px]">{c.title}</h3>
              <p className="c-t2 mb-6 mt-2 max-w-[460px] text-[16px] leading-[1.55]">{c.body}</p>
              <div className="hair mt-auto flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t pt-4">
                <span className="n c-bl text-[24px]">{c.n}</span>
                <span className="c-g text-[13.5px]">{c.proof}</span>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <div className="mt-12 sm:mt-16">
          <div className="c-g text-[13px] font-medium">Companies I have worked with</div>
          <div className="hair mt-4 overflow-hidden border-y py-5 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
            <div className="marquee">
              {[...names, ...names].map((n, i) => (
                <span key={i} className="c-g px-8 text-[22px] font-semibold tracking-[-0.02em]">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
