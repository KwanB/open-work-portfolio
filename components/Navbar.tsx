"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";
import { CloseIcon, MenuIcon } from "./icons";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "เกี่ยวกับฉัน" },
  { href: "#services", label: "บริการ" },
  { href: "#process", label: "ขั้นตอนการทำงาน" },
  { href: "#portfolio", label: "ผลงาน" },
  { href: "#contact", label: "ติดต่อ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-white/95 shadow-sm backdrop-blur dark:bg-slate-900/95" : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex h-16 items-center justify-between sm:h-20">
        <a
          href="#home"
          className={`text-lg font-bold tracking-tight transition-colors sm:text-xl ${
            solid ? "text-slate-900 dark:text-white" : "text-white"
          }`}
        >
          {siteConfig.name}
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                scrolled ? "text-slate-700 dark:text-slate-200" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle className={solid ? "text-slate-900 dark:text-white" : "text-white"} />
          <a href="#contact" className="btn-primary">
            จองคิวเลย
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle className={solid ? "text-slate-900 dark:text-white" : "text-white"} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
            aria-expanded={open}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-md ${
              solid ? "text-slate-900 dark:text-white" : "text-white"
            }`}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-900 lg:hidden">
          <div className="container-custom flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              จองคิวเลย
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
