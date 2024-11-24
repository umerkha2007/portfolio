import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-12 w-full" style={{ boxSizing: 'border-box' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary-foreground">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect With Me</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://linkedin.com/in/umerkhalid1" className="text-muted-foreground hover:text-primary-foreground">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://github.com/umerkha2007" className="text-muted-foreground hover:text-primary-foreground">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary-foreground">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary-foreground">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">umerkha2007@gmail.com</li>
              <li className="text-muted-foreground">778-682-4780</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}