import Image from "next/image"

export function Experience() {
  return (
    <section className="px-6 py-12 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px]">
            <Image
              src="/image/2.jpg"
              alt="Developer portrait"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Umer Khalid - Full Stack Software Engineer
            </h2>
            <p className="text-primary mb-6">
              I have over 8 years of Full Stack Development Experience, specializing in both front-end and back-end technologies, cloud services, and QA automation. I hold a Bachelors degree in Software Engineering and am a Microsoft certified C# Foundational Developer.
            </p>
            <p className="text-primary mb-6">
              I am an advocate for Agile methodologies and Test-Driven Development, with a proven track record of leading teams, implementing solutions from scratch, and deploying them to the cloud.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}