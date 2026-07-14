import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground bg-secondary">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#hero" },
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Projects", href: "#projects" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://linkedin.com/in/umerkhalid1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/umerkha2007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:umerkha2007@gmail.com"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity break-all"
                >
                  umerkha2007@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:7786824780"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  778-682-4780
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">
              Location
            </h3>
            <p className="text-sm opacity-80">Vancouver, BC</p>
            <p className="text-sm opacity-80">Canada</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm opacity-60">
            &copy; {new Date().getFullYear()} Umer Khalid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
