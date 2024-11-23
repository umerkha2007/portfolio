"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import ToggleSwitch from "./ui/ToggleSwitch";

export function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <nav className="flex justify-between">
      <div className="flex p-6 gap-20">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/image/logo.png"
            alt="umer logo"
            width={200}
            height={100}
          />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>
        </div>
      </div>
      <ToggleSwitch
        isOn={isDarkMode}
        handleToggle={() => setIsDarkMode(!isDarkMode)}
      />
    </nav>
  );
}
