"use client";

import { useMemo } from "react";
import { Iso, type Caption } from "@/components/ui/iso";
import { FadeIn, FadeInItem, FadeInStagger } from "@/components/ui/fade-in";
import { SectionHead } from "@/components/ui/section-head";
import { scenes, yardBeats, type Shape } from "@/lib/iso";

type Case = {
  slug: string;
  number: string;
  step: number;
  light: string;
  grid: { gx: string; gy: string };
  client: string;
  name: string;
  sub: string;
  challenge: string;
  did: string;
  result: string;
  stats: { n: string; p: string }[];
  note: string;
  shapes: Shape[];
  artLabel: string;
  artClass: string;
  captions: Caption[];
  nameClass: string;
};

function useCases(): Case[] {
  return useMemo(
    () => [
      {
        slug: "bcmea",
        number: "02",
        step: 1,
        light: "ls-tr",
        grid: { gx: "78%", gy: "22%" },
        client: "Port operations, British Columbia",
        name: "BCMEA",
        sub: "BCMEA runs the order entry system that port terminals across British Columbia rely on.",
        challenge:
          "The system served one terminal and about 500 people. The business needed it to serve more than ten terminals and over 5,000 people, without slowing anyone down.",
        did: "I was the architect on this project. I designed the platform, built key parts of it myself, and led the quality and release process that got it into production.",
        result:
          "The platform went live in March 2026, two months ahead of schedule. It now runs across more than ten terminals and supports over 5,000 users on one consistent system.",
        stats: [
          { n: "10+", p: "port terminals on one platform, up from one" },
          { n: "5,000+", p: "people using the platform, up from about 500" },
          { n: "$800M+", p: "moved daily through the port environment it serves" },
        ],
        note: "The $800 million figure describes the port environment this platform operates in. It is not revenue I generated. Figures are from BCMEA's own project reporting, 2026.",
        shapes: scenes.yard(10, 10),
        captions: [
          { at: 0.2, text: "One terminal, about 500 people" },
          { at: yardBeats(10).more, text: "Each terminal that joins brings more people" },
          { at: yardBeats(10).all, text: "Ten terminals, over 5,000 people, one platform" },
        ],
        artLabel: "A blue row of blocks for the first terminal's users, with nine more rows added behind it",
        artClass: "max-w-[680px]",
        nameClass: "text-[clamp(3.4rem,9vw,7.5rem)]",
      },
      {
        slug: "mediavalet",
        number: "03",
        step: 2,
        light: "ls-tl",
        grid: { gx: "22%", gy: "24%" },
        client: "Digital asset management, Vancouver",
        name: "MediaValet",
        sub: "MediaValet sells software that lets marketing and creative teams store, find and share their photos, videos and brand files from one secure place, built on Microsoft Azure.",
        challenge:
          "The part of the product customers touched every day was built on an older foundation, and the company depended on an outside team for manual testing before every release.",
        did: "I led the move of the customer facing product from Angular to React. I brought quality testing in house with Cypress and Selenium, helped connect cloud storage and databases for enterprise customers, and automated the build and release pipeline.",
        result:
          "The modernization was a success and customers responded immediately. MediaValet's annual revenue grew 66% in 2 years, from C$10.84 million in 2021 to C$18 million in the 2023 fiscal year.",
        stats: [
          { n: "70,000+", p: "active platform users" },
          { n: "C$18.1M", p: "annual recurring revenue at the end of 2023" },
          { n: "2024", p: "acquired by an affiliate of STG Partners" },
        ],
        note: "These figures describe MediaValet's business, reported in its 2021, 2022 and 2023 annual results.",
        shapes: scenes.stairs(7, 0.34),
        captions: [
          { at: 0, text: "C$10.84 million revenue in 2021" },
          { at: 2.4, text: "C$18 million in fiscal 2023, up 66%" },
        ],
        artLabel: "Seven rising steps, the tallest lit blue",
        artClass: "max-w-[560px]",
        nameClass: "text-[clamp(3rem,7.4vw,6.4rem)]",
      },
      {
        slug: "monetizemore",
        number: "04",
        step: 3,
        light: "ls-b",
        grid: { gx: "76%", gy: "30%" },
        client: "Ad technology, White Rock BC",
        name: "MonetizeMore",
        sub: "MonetizeMore helps website owners earn more from the ad space they already have, for hundreds of publishers in more than 40 countries, through a platform called PubGuru.",
        challenge:
          "Publishers needed better visibility into their traffic and ad performance, and the team needed a fast way to prove a change worked before rolling it out to everyone.",
        did: "I built TrafficCop, a real time traffic monitor, and an ad analytics tool for PubGuru. I tuned how ads loaded on publisher pages to cut down on disruptive page jumping, and built small scale tests so changes could be proven before they reached every publisher.",
        result: "MonetizeMore's revenue grew from US$17 million to over US$20 million within a year.",
        stats: [
          { n: "1M+ a day", p: "requests handled by the tools I built" },
          { n: "40+", p: "countries where MonetizeMore's publishers operate" },
          { n: "US$20M+", p: "company revenue" },
        ],
        note: "The revenue figure is the founder's own number from a published interview.",
        shapes: scenes.hub(),
        captions: [
          { at: 0, text: "Publisher sites" },
          { at: 1.3, text: "Traffic and ad data flow in" },
          { at: 2.6, text: "TrafficCop monitors it in real time" },
        ],
        artLabel: "One blue block connected to four grey blocks",
        artClass: "max-w-[520px]",
        nameClass: "text-[clamp(2.7rem,6.2vw,5.4rem)]",
      },
    ],
    []
  );
}

function CaseSection({ c, flip }: { c: Case; flip: boolean }) {
  return (
    <section id={c.slug} className="scene hair border-t px-5 py-16 md:px-8 md:py-32">
      <div className={`ls ${c.light}`} />
      <div className="gridbg" style={{ "--gx": c.grid.gx, "--gy": c.grid.gy } as React.CSSProperties} />

      <div className="mx-auto max-w-[1180px]">
        <SectionHead number={c.number} label="Case study" step={c.step} total={7} />

        <div className="mt-8 grid items-center gap-6 sm:mt-10 lg:grid-cols-2 lg:gap-12">
          <FadeIn className={flip ? "lg:order-2" : ""}>
            <div className="c-g text-[14px]">{c.client}</div>
            <h2 className={`h-case mt-3 ${c.nameClass}`}>{c.name}</h2>
            <p className="c-t2 mt-5 max-w-[560px] text-[19px] leading-[1.5]">{c.sub}</p>
          </FadeIn>

          <div className={`relative flex items-center justify-center py-4 lg:min-h-[300px] lg:py-10 ${flip ? "lg:order-1" : ""}`}>
            <Iso shapes={c.shapes} captions={c.captions} className={c.artClass} label={c.artLabel} />
          </div>
        </div>

        <FadeInStagger className="mt-8 grid gap-4 sm:mt-12 lg:grid-cols-3">
          <FadeInItem className="glass p-6 sm:p-7">
            <div className="lab">The challenge</div>
            <p className="c-t2 mt-3 text-[16.5px] leading-[1.55]">{c.challenge}</p>
          </FadeInItem>
          <FadeInItem className="glass p-6 sm:p-7">
            <div className="lab">What I did</div>
            <p className="c-t2 mt-3 text-[16.5px] leading-[1.55]">{c.did}</p>
          </FadeInItem>
          <FadeInItem className="result p-6 sm:p-7">
            <div className="lab">The result</div>
            <p className="c-t mt-3 text-[16.5px] leading-[1.55]">{c.result}</p>
          </FadeInItem>
        </FadeInStagger>

        <FadeInStagger className="mt-4 grid gap-4 sm:grid-cols-3">
          {c.stats.map((s, i) => (
            <FadeInItem key={s.n} className="glass glass-hover px-6 py-5 sm:px-7 sm:py-6">
              <div className={`n text-[clamp(2.2rem,4vw,3.25rem)] ${i === 0 ? "c-bl" : ""}`}>{s.n}</div>
              <p className="c-g mt-2 text-[14px] leading-[1.4]">{s.p}</p>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <p className="c-g2 mt-5 max-w-[760px] text-[12.5px] leading-[1.5]">{c.note}</p>
      </div>
    </section>
  );
}

export function Cases() {
  const cases = useCases();
  return (
    <div id="work">
      {cases.map((c, i) => (
        <CaseSection key={c.slug} c={c} flip={i % 2 === 1} />
      ))}
    </div>
  );
}
