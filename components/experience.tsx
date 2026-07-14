import Image from "next/image";

const stats = [
  { value: "9+", label: "Years Experience" },
  { value: "20+", label: "Technologies" },
  { value: "50+", label: "Projects Delivered" },
  { value: "10+", label: "Certifications" },
];

export function Experience() {
  return (
    <section id="about" className="px-6 py-16 md:py-24 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[460px] rounded-2xl overflow-hidden">
            <Image
              src="/image/2.jpg"
              alt="Umer Khalid with tech community"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-4 text-base leading-relaxed">
              Senior Full Stack Software Engineer with 9+ years of experience, now
              specializing in building AI-powered applications using LLMs, conversational
              interfaces, and intelligent tooling. Experienced in designing scalable
              systems integrating OpenAI/Azure OpenAI, prompt engineering, and
              AI-driven workflows.
            </p>
            <p className="text-muted-foreground mb-4 text-base leading-relaxed">
              Strong background in microservices, micro-frontend architecture, cloud
              (Azure & AWS), and modern frontend frameworks. Microsoft certified in
              Azure AI and Azure Fundamentals, with a Bachelor&apos;s degree in Software
              Engineering.
            </p>
            <p className="text-muted-foreground mb-8 text-base leading-relaxed">
              Active in the Vancouver tech community — delivering talks on AI and
              mentoring the next generation of developers.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-background rounded-xl p-4 border border-border">
                  <p className="text-2xl font-bold">{value}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
