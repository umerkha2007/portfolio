import { Contact } from "@/components/contact"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Nav } from "@/components/nav"
import { Offers } from "@/components/offers"
import { Projects } from "@/components/projects";
import { WorkExperience } from "@/components/workexperience";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <WorkExperience />
        <Projects />
        <Contact />
        <Offers />
      </main>
      <Footer />
    </div>
  )
}