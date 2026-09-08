"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "สลับเป็นโหมดกลางวัน" : "สลับเป็นโหมดกลางคืน"}
      className={`inline-flex h-9 w-9 items-center justify-center transition-colors ${className}`}
    >
      {mounted ? (
        isDark ? (
          <SunIcon className="h-5 w-5" />
        ) : (
          <MoonIcon className="h-5 w-5" />
        )
      ) : (
        <span className="block h-5 w-5" />
      )}
    </button>
  );
}
