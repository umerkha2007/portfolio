const workExperience = [
  {
    id: 1,
    period: "Jan 2025 – Present",
    company: "BC Maritime Employers Association",
    position: "Senior Software Engineer",
    description:
      "Orchestrating a mission-critical software solution from scratch for terminal operations across British Columbia. Leading Micro Frontend Architecture using Blazor .NET 8, React, and .NET Web Assembly, with an API Gateway and identity provider integration.",
    skills: ["Blazor .NET 8", "React", "Micro Frontend", "API Gateway", ".NET Core"],
    initials: "BC",
    color: "bg-blue-600",
  },
  {
    id: 2,
    period: "Jan 2024 – Jan 2025",
    company: "BrainStation",
    position: "Senior Software Engineering Educator",
    description:
      "Designed and delivered curriculum in JavaScript, React, Node.js, and SQL. Mentored students, evaluated progress, and collaborated with industry partners to keep the program current with real-world standards.",
    skills: ["JavaScript", "React", "Node.js", "SQL", "Mentorship", "Curriculum Design"],
    initials: "BS",
    color: "bg-violet-500",
  },
  {
    id: 3,
    period: "Nov 2021 – Sep 2023",
    company: "MediaValet",
    position: "Senior Software Engineer",
    description:
      "Led migration from Angular to React, established CI/CD pipelines in Azure DevOps, implemented MobX state management, and brought QA in-house with Cypress and Selenium — practically eliminating manual testing.",
    skills: ["React", "Angular", "ASP.NET", "Azure", "Cypress", "Jest", "MobX", "CI/CD"],
    initials: "MV",
    color: "bg-emerald-500",
  },
  {
    id: 4,
    period: "Oct 2020 – Nov 2021",
    company: "MonetizeMore",
    position: "Web Developer",
    description:
      "Built TrafficCop (traffic monitoring system) and PubGuru (ad detail browser extension) in React. Implemented AWS S3, EC2, and ElasticSearch to optimize ad placements and significantly boost publisher revenue.",
    skills: ["React", "JavaScript", "AWS", "ElasticSearch", "Agile"],
    initials: "MM",
    color: "bg-amber-500",
  },
  {
    id: 5,
    period: "Jun 2019 – Oct 2020",
    company: "Doctors 365",
    position: "Software Engineer",
    description:
      "Built a web app from scratch in Angular 8, upgraded to Angular 12, and led redesign of 4 multimedia software packages distributed across 20,000 doctors and pharmacies. Architected a full e-commerce telemedicine platform.",
    skills: ["Angular", "React", "TypeScript", "RESTful APIs", "HTML/CSS"],
    initials: "D3",
    color: "bg-rose-500",
  },
  {
    id: 6,
    period: "Jul 2018 – Jun 2019",
    company: "Smart Coders DMCC Limited",
    position: "Software Engineer",
    description:
      "Led a team of iOS, Android, and web developers building full-stack apps for clients in e-commerce, fashion, food, and medical. Managed projects end-to-end across React, Angular, Node, and MSSQL.",
    skills: ["React", "Angular", "Node.js", "MSSQL", "iOS", "Android"],
    initials: "SC",
    color: "bg-teal-500",
  },
  {
    id: 7,
    period: "Sep 2016 – Jul 2018",
    company: "Shoclef Corporation Limited",
    position: "Software Developer",
    description:
      "Built backend in ASP.NET for an e-commerce platform (live shopping, streaming, marketplace, payments) and integrated APIs including Twilio, Stripe, PayPal, Facebook, Google Maps, and WeChat.",
    skills: ["ASP.NET", "HTML/CSS", "JavaScript", "API Integration", "Stripe", "Twilio"],
    initials: "SH",
    color: "bg-orange-500",
  },
];

export function WorkExperience() {
  return (
    <section id="experience" className="px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-8">
            {workExperience.map((item) => (
              <div key={item.id} className="relative pl-14">
                <div
                  className={`absolute left-5 top-6 -translate-x-1/2 w-3.5 h-3.5 rounded-full ${item.color} ring-2 ring-background z-10`}
                />
                <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`w-10 h-10 flex-shrink-0 ${item.color} rounded-lg flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {item.initials}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-base leading-snug">{item.position}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.company} &middot; {item.period}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
