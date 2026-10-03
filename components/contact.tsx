"use client";

import { useMemo } from "react";
import { Iso } from "@/components/ui/iso";
import { BookCall } from "@/components/ui/book-call";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHead } from "@/components/ui/section-head";
import { scenes } from "@/lib/iso";
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";

export function Contact() {
  const cube = useMemo(() => scenes.cube(), []);

  return (
    <section id="contact" className="scene alt hair border-t px-5 pb-12 pt-16 md:px-8 md:pb-14 md:pt-32">
      <div className="ls ls-top" />
      <div className="gridbg" style={{ "--gx": "50%", "--gy": "22%" } as React.CSSProperties} />
      <div className="beam" style={{ left: "50%" }} />

      <div className="mx-auto max-w-[1180px]">
        <SectionHead number="07" label="How I work" extra="Next step" step={6} total={7} />

        <div className="mx-auto mt-12 flex max-w-[900px] flex-col items-center text-center">
          <div className="w-[190px]">
            <Iso shapes={cube} label="A single blue cube" />
          </div>

          <FadeIn>
            <h2 className="h-sec mt-10 text-[clamp(3.5rem,10vw,8rem)]">Let&apos;s talk.</h2>
            <p className="c-t2 mx-auto mt-6 max-w-[520px] text-[19px] leading-[1.5]">
              Have an idea worth bringing to life, a business ready to scale, or a challenge worth solving? Reach out.
              Let&apos;s turn your vision into something built to grow.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-9">
            <BookCall />
          </FadeIn>

          <FadeIn delay={0.15}>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="fade-type mt-12 block break-all text-[clamp(1.7rem,6.4vw,4.6rem)] font-semibold leading-none tracking-[-0.045em] transition-opacity hover:opacity-80"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="c-t2 mt-6 flex flex-wrap justify-center gap-x-9 gap-y-2 text-[15.5px]">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--t)]">
                <span className="c-bl mr-2">LinkedIn</span>linkedin.com/in/umerkhalid1
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--t)]">
                <span className="c-bl mr-2">GitHub</span>github.com/umerkha2007
              </a>
            </div>
          </FadeIn>
        </div>

        <footer className="hair c-g mt-24 grid gap-6 border-t pt-6 text-[12.5px] leading-[1.6] md:grid-cols-[1.4fr_1fr]">
          <div className="max-w-[520px]">
            <b className="c-t font-medium">Sources</b>
            <br />
            BCMEA project reporting, 2026. MediaValet 2022 and 2023 annual results. MonetizeMore.com and founder
            interview, 2026. Company figures describe the businesses named.
          </div>
          <div className="flex items-end justify-between gap-6 md:justify-end md:gap-10">
            <span>Vancouver, British Columbia</span>
            <span>&copy; {new Date().getFullYear()} Umer Khalid</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
