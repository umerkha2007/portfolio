import Image from "next/image";
import { Button } from "@/components/ui/button";

const techStack = [
  { icon: "icon-[twemoji--robot]", label: "AI / LLMs" },
  { icon: "icon-[skill-icons--javascript]", label: "JavaScript" },
  { icon: "icon-[skill-icons--typescript]", label: "TypeScript" },
  { icon: "icon-[catppuccin--javascript-react]", label: "React" },
  { icon: "icon-[vscode-icons--file-type-angular]", label: "Angular" },
  { icon: "icon-[skill-icons--dotnet]", label: ".NET / C#" },
  { icon: "icon-[devicon--nodejs]", label: "Node.js" },
  { icon: "icon-[vscode-icons--file-type-sql]", label: "SQL" },
];

export function Hero() {
  return (
    <section id="hero" className="px-6 py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-3 leading-tight">
            Umer Khalid
          </h1>
          <p className="text-lg text-muted-foreground mb-6 font-medium">
            Senior Full Stack Software Engineer &amp; AI Specialist
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {techStack.map(({ icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-sm font-medium"
              >
                <span className={`${icon} h-5 w-5 flex-shrink-0`} />
                {label}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg text-base">
            9+ years building scalable applications across full-stack, cloud, and AI.
            Specializing in LLM integration, conversational AI, and micro-frontend
            architecture. Microsoft certified, agile advocate, and tech community speaker.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#about">
              <Button size="lg" className="px-8">
                About Me
              </Button>
            </a>
            <a href="#projects">
              <Button size="lg" variant="outline" className="px-8">
                View Projects
              </Button>
            </a>
          </div>
        </div>

        <div className="relative h-[460px] md:h-[520px] order-first md:order-last rounded-2xl overflow-hidden">
          <Image
            src="/image/1.jpg"
            alt="Umer Khalid"
            fill
            className="object-cover object-[27%]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
