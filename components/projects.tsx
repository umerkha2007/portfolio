import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Jarvis AI",
    subtitle: "Personal AI Assistant",
    description:
      "A personal AI assistant using open-source and commercial LLMs, accessible via WhatsApp. Capable of writing code, searching the web, managing memory context, spawning sub-agents, reading emails, and scheduling — all from a chat interface.",
    tech: ["LLMs", "OpenClaw", "AI Agents", "WhatsApp API", "Node.js"],
    type: "AI / Personal Assistant",
    color: "bg-violet-500",
    url: null,
  },
  {
    title: "FirstYearsChat",
    subtitle: "AI Conversational Assistant",
    description:
      "An AI-powered chat platform to assist first-year students with onboarding, academic guidance, and FAQs. Integrates OpenAI/Azure OpenAI with engineered prompts and context handling for relevant, accurate responses.",
    tech: ["React", "OpenAI", "Azure OpenAI", "LLMs", "Prompt Engineering"],
    type: "AI / EdTech",
    color: "bg-blue-500",
    url: "https://firstyearschat.com",
  },
  {
    title: "WhatTheTokens",
    subtitle: "LLM Tokenization & Cost Tool",
    description:
      "A developer tool for analyzing token usage and estimating LLM API costs in real-time. Helps engineers debug and refine prompts for efficiency, with token parsing and optimization strategies to reduce API consumption.",
    tech: ["React", "LLM APIs", "Token Parsing", "TypeScript"],
    type: "AI / Developer Tool",
    color: "bg-emerald-500",
    url: "https://whatthetokens.com",
  },
  {
    title: "Image-Train",
    subtitle: "AI Image Processing Platform",
    description:
      "A platform for training and managing image-based ML workflows. Implements dataset handling, preprocessing, and model interaction pipelines with integration of pre-trained vision models for classification and analysis.",
    tech: ["React", "ML Pipelines", "Computer Vision", "Python"],
    type: "AI / Machine Learning",
    color: "bg-rose-500",
    url: "https://image-train.com",
  },
  {
    title: "LoanItNow",
    subtitle: "Intelligent Financial Platform",
    description:
      "A full-stack fintech platform with decision-making workflows for loan processing. Architected for scalable evaluation logic and user data processing, with future AI integration for risk scoring and automated decisioning.",
    tech: ["React", "Node.js", "Cloud Infrastructure", "SQL"],
    type: "Full-Stack / FinTech",
    color: "bg-amber-500",
    url: "https://loanitnow.ca",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-16 md:py-24 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3">Side Projects</h2>
        <p className="text-center text-muted-foreground mb-12 text-base">
          Personal projects exploring AI, LLMs, and full-stack engineering
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
            >
              <div className={`h-1.5 ${project.color}`} />
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-medium bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full mb-3 inline-block w-fit">
                  {project.type}
                </span>
                <h3 className="font-bold text-base mb-0.5">{project.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <ExternalLink size={14} />
                      Visit Site
                    </Button>
                  </a>
                ) : (
                  <Button variant="outline" size="sm" className="w-full" disabled>
                    Personal Project
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
