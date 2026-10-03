"use client";

import { useMemo } from "react";
import { Iso } from "@/components/ui/iso";
import { FadeIn, FadeInItem, FadeInStagger } from "@/components/ui/fade-in";
import { SectionHead } from "@/components/ui/section-head";
import { people, scenes } from "@/lib/iso";

export function More() {
  const items = useMemo(
    () => [
      {
        shapes: people.consult(),
        label: "A doctor and a patient exchanging messages",
        name: "Doctors-365",
        role: "Software Engineer, Jun 2019 to Oct 2020, Germany, remote",
        body: "Led the planning and build of four digital health products on Angular, distributed across a network of over 20,000 doctors and pharmacies.",
        badge: "20,000+ doctors and pharmacies",
      },
      {
        shapes: people.classroom(),
        label: "A mentor at a board in front of six students at their desks",
        name: "BrainStation",
        role: "Senior Software Engineering Educator, Jan 2024 to Jan 2025, Vancouver",
        body: "Taught and mentored students building full stack web applications, from curriculum design to one on one code review.",
        badge: "Hands on mentorship",
      },
      {
        shapes: scenes.lanes(),
        label: "Two lanes of deliveries",
        name: "Smart Coders DMCC",
        role: "Software Engineer, Jul 2018 to Jun 2019, Dubai",
        body: "Led a team of iOS, Android and web developers, delivering full stack projects for clients across e-commerce, fashion and food.",
        badge: "Cross-functional team lead",
      },
      {
        shapes: scenes.cargo(3),
        label: "A small stack of containers",
        name: "Shoclef Corporation",
        role: "Software Developer, Sep 2016 to Jul 2018, San Francisco",
        body: "Built backend services and a custom frontend for a live shopping and marketplace startup, with teams spread across five countries.",
        badge: "Early stage startup",
      },
    ],
    []
  );

  return (
    <section id="experience" className="scene hair border-t px-5 py-24 md:px-8 md:py-32">
      <div className="ls ls-tr" />
      <div className="gridbg" style={{ "--gx": "50%", "--gy": "12%" } as React.CSSProperties} />

      <div className="mx-auto max-w-[1180px]">
        <SectionHead number="06" label="Experience" step={5} total={7} />
        <FadeIn className="mt-10 max-w-[760px]">
          <h2 className="h-sec text-[clamp(2.6rem,6vw,4.75rem)]">Also worked with.</h2>
          <p className="c-t2 mt-5 text-[19px] leading-[1.5]">
            Four more stops along the way, from a healthcare network in Germany to startups in Dubai and San
            Francisco.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-12 grid gap-4 md:grid-cols-2">
          {items.map((it) => (
            <FadeInItem key={it.name} className="glass glass-hover flex flex-col justify-between gap-6 p-7 md:p-8">
              <div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-[28px] font-semibold tracking-[-0.02em]">{it.name}</h3>
                    <div className="c-g mt-2 text-[14px] leading-[1.4]">{it.role}</div>
                  </div>
                  <div className="flex h-[170px] w-[190px] flex-none items-center justify-end sm:w-[240px]">
                    <Iso shapes={it.shapes} label={it.label} className="max-h-[170px]" />
                  </div>
                </div>
                <p className="c-t2 mt-5 text-[16.5px] leading-[1.6]">{it.body}</p>
              </div>
              <span className="hair c-bl block border-t pt-4 text-[14px] font-medium">{it.badge}</span>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
