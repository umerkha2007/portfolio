"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { BookCall } from "@/components/ui/book-call";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") setDark(false);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <nav
        className="glass mx-auto flex max-w-[1180px] items-center justify-between gap-4 !rounded-full py-2 pl-3 pr-2"
        style={{ background: "var(--nav-bg)" }}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden>
            <polygon points="15,3 26,9 15,15 4,9" fill="#8ec5ff" />
            <polygon points="4,9 15,15 15,27 4,21" fill="#2b7fff" />
            <polygon points="26,9 15,15 15,27 26,21" fill="#155dfc" />
          </svg>
          <span className="text-[15px] font-semibold tracking-tight">Umer Khalid</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="c-g text-sm transition-colors hover:text-[color:var(--t)]">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="btn btn-ghost btn-sm !w-10 !px-0"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <BookCall small />
        </div>
      </nav>
    </header>
  );
}
