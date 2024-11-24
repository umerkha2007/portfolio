import { Button } from "@/components/ui/button";
import Image from "next/image";
import "../app/styles/hero.css";
import "../app/styles/buttons.css"

export function Hero() {
  return (
    <section className="hero px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto relative">
        <div className="grid sm:grid-cols-1">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Umer Khalid
          </h1>
          <h2 className="grid grid-cols-3 gap-6 text-xl mb-4 flex flex-wrap items-center">
            <div className="grid md:grid-cols-2">
              <span className="icon-[twemoji--robot] h-12 w-12 mr-2 align-middle"></span>
              <span>Artificial Intelligence</span>
            </div>
            <div className="grid md:grid-cols-2">
              <span className="icon-[skill-icons--javascript] h-12 w-12 mr-2 align-middle"></span>
              JavaScript
            </div>
            <div className="grid md:grid-cols-2">
              <span className="icon-[skill-icons--typescript] h-12 w-12 mr-2 align-middle"></span>
              TypeScript
            </div>
            <div className="grid md:grid-cols-2">
              <span className="icon-[catppuccin--javascript-react] h-12 w-12 mr-2 align-middle"></span>
              React
            </div>
            <div className="grid md:grid-cols-2">
              <span className="icon-[vscode-icons--file-type-angular] h-12 w-12 mr-2 align-middle"></span>
              Angular
            </div>
            <div className="grid md:grid-cols-2">
              <span className="icon-[skill-icons--dotnet] h-12 w-12 mr-2 align-middle"></span>
              .NET
            </div>
            <div className="grid md:grid-cols-2">
              <span className="icon-[devicon--nodejs] h-12 w-12 mr-2 align-middle"></span>
              Node
            </div>
            <div className="grid md:grid-cols-2">
              <span className="icon-[vscode-icons--file-type-sql] h-12 w-12 mr-2 align-middle"></span>
              SQL
            </div>
          </h2>
          <p className="text-primary leading-relaxed mb-8">
            I am a Full Stack Software Engineer with over 8 years of experience
            in developing robust applications using a variety of technologies. I
            specialize in both front-end and back-end development, cloud
            services, and QA automation. I am passionate about Agile
            methodologies and Test-Driven Development.
          </p>
          <Button variant="default" className="button-hero text-muted h-6">
            Learn More
          </Button>
        </div>
        <div className="image-container-headshot relative h-[94vw] md:relative md:h-[45vh] lg:absolute lg:h-[780px] max-w-[780px] right-0 lg:w-1/2 order-first md:order-last">
          <Image
            src="/image/1.jpg"
            alt="Professional headshot"
            fill
            className="object-cover object-[27%]"
          />
        </div>
      </div>
    </section>
  );
}
