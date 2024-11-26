import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-inverse text-wrap break-all">
    <div className="max-w-6xl mx-auto px-6 py-12 w-full" style={{ boxSizing: 'border-box' }}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-primary-inverse">Quick Links</h3>
            <ul className="space-y-2">
              <li className="text-primary-inverse">
                <Link href="#">
                  Home
                </Link>
              </li>
              <li className="text-primary-inverse">
                <Link href="#">
                  About
                </Link>
              </li>
              <li className="text-primary-inverse">
                <Link href="#">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary-inverse">Connect With Me</h3>
            <ul className="space-y-2">
              <li className="text-primary-inverse">
                <Link href="https://linkedin.com/in/umerkhalid1">
                  LinkedIn
                </Link>
              </li>
              <li className="text-primary-inverse">
                <Link href="https://github.com/umerkha2007">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary-inverse">Resources</h3>
            <ul className="space-y-2">
              <li className="text-primary-inverse">
                <Link href="#">
                  Blog
                </Link>
              </li>
              <li className="text-primary-inverse">
                <Link href="#">
                  Newsletter
                </Link>
              </li>
              <li className="text-primary-inverse">
                <Link href="#">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary-inverse">Contact</h3>
            <ul className="space-y-2">
              <li className="text-primary-inverse">umerkha2007@gmail.com</li>
              <li className="text-primary-inverse">778-682-4780</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p className="text-primary-inverse">© 2024 All rights reserved.</p>
      </div>
      </div>
    </footer>
    )
};