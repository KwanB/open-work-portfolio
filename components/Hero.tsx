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
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-gold-400/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl"
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
