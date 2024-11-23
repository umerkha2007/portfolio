import { Button } from "@/components/ui/button"
import Image from "next/image"
import "../app/styles/hero.css";

export function Hero() {
  return (
    <section className="hero px-6 py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto relative">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Umer Khalid - Full Stack Software Engineer
          </h1>
          <p className="text-muted-foreground mb-8">
            I am a Full Stack Software Engineer with over 8 years of experience in developing robust applications using a variety of technologies. I specialize in both front-end and back-end development, cloud services, and QA automation. I am passionate about Agile methodologies and Test-Driven Development.
          </p>
          <Button className="bg-accent hover:bg-accent-foreground text-white">
            Learn More
          </Button>
        </div>
        <div className="image-container-headshot md:relative md:h-[45vh] lg:absolute lg:h-[560px] max-w-[660px] right-0 lg:w-1/2">
          <Image
            src="/image/1.jpg"
            alt="Professional headshot"
            fill
            className="object-cover lg:pr-20 object-[27%]"
          />
        </div>
      </div>
    </section>
  )
}