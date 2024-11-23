import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A modern web application",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Project 2",
      description: "Full-stack social app",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Project 3",
      description: "E-commerce platform",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Client Testimonials",
      description: "What our clients say",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <Button variant="ghost" size="sm" className="text-pink-500">
                Read More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

