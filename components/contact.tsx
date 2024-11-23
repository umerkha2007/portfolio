import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Contact() {
  return (
    <section className="px-6 py-12 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Email: umerkha2007@gmail.com<br />
              Phone: 778-682-4780
            </p>
            <p className="text-muted-foreground mb-8">
              Connect with me on <a href="https://linkedin.com/in/umerkhalid1" className="text-blue-500">LinkedIn</a> or check out my work on <a href="https://github.com/umerkha2007" className="text-blue-500">GitHub</a>.
            </p>
            <Button className="bg-accent hover:bg-accent-foreground text-white">
              Send Message
            </Button>
          </div>
          <div className="relative h-[500px]">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Contact image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

