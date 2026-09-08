import { siteConfig } from "@/lib/data";
import { ArrowRightIcon, CheckIcon } from "./icons";

const highlights = [
  "ออกแบบตามแบรนด์ของคุณ",
  "ใช้งานได้ดีบนมือถือ 100%",
  "ราคาชัดเจน ไม่มีค่าใช้จ่ายแอบแฝง",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-slate-800 via-slate-800 to-slate-900 pt-24"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rotate-12 bg-gradient-to-br from-gold-400/25 via-gold-500/10 to-transparent blur-3xl [clip-path:polygon(50%_0%,100%_100%,0%_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-96 w-96 -rotate-[15deg] bg-gradient-to-tr from-slate-400/15 via-slate-300/5 to-transparent blur-3xl [clip-path:polygon(0%_0%,100%_50%,0%_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rotate-45 bg-gradient-to-b from-gold-300/10 to-transparent blur-3xl [clip-path:polygon(50%_0%,100%_100%,0%_100%)]"
        aria-hidden="true"
      />
      <svg
        className="pointer-events-none absolute right-16 top-1/4 h-20 w-20 text-gold-300/50"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <polygon points="50,6 94,88 6,88" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg
        className="pointer-events-none absolute left-16 top-20 h-12 w-12 text-white/20"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <polygon points="50,6 94,88 6,88" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900 to-transparent"
        aria-hidden="true"
      />

      <div className="container-custom relative py-16 sm:py-24">
        <p className="mb-4 inline-flex items-center rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-medium tracking-wide text-gold-300 sm:text-sm">
          {siteConfig.role}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-slate-300 sm:text-xl">
          {siteConfig.tagline}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="#contact" className="btn-primary">
            จองคิวเลย
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a href="#portfolio" className="btn-outline">
            ดูผลงาน
          </a>
        </div>

        <ul className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
              <CheckIcon className="h-4 w-4 shrink-0 text-gold-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
