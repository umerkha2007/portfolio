import { About } from "@/components/about";
import { Cases } from "@/components/cases";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { More } from "@/components/more";
import { Nav } from "@/components/nav";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Cases />
        <About />
        <More />
        <Contact />
      </main>
    </>
  );
}
