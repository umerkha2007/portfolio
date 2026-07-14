import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "umerkha2007@gmail.com",
    href: "mailto:umerkha2007@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "778-682-4780",
    href: "tel:7786824780",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Vancouver, BC, Canada",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/umerkhalid1",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/umerkha2007",
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3">Get in Touch</h2>
        <p className="text-center text-muted-foreground mb-12 text-base">
          Open to new opportunities — let&apos;s build something great together
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Details</h3>
            <div className="space-y-4 mb-8">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium hover:underline">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-semibold text-lg mb-4">Connect Online</h3>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-secondary hover:bg-border text-secondary-foreground px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-secondary rounded-2xl p-8 flex flex-col items-start">
            <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center mb-4">
              <Mail size={20} className="text-foreground" />
            </div>
            <h3 className="font-bold text-xl mb-2">Let&apos;s Work Together</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Whether you have a project in mind, need a technical partner, or want to
              discuss engineering challenges — I&apos;d love to hear from you.
            </p>
            <a href="mailto:umerkha2007@gmail.com">
              <Button size="lg" className="px-8">
                Send an Email
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
