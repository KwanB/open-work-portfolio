import { testimonials } from "@/lib/data";
import { QuoteIcon, StarIcon } from "./icons";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding scroll-mt-20 bg-white dark:bg-slate-900">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">
            คำรับรองจากลูกค้า
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            ลูกค้าพูดถึงเราอย่างไร
          </h2>
        </div>

        {testimonials.length > 0 ? (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100 dark:bg-slate-800 dark:ring-slate-700">
                <QuoteIcon className="h-6 w-6 text-gold-400" />
                <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-gold-500" />
                  ))}
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">{t.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-14 max-w-xl rounded-2xl border-2 border-dashed border-slate-200 p-10 text-center dark:border-slate-700">
            <p className="text-sm text-slate-500 dark:text-slate-400">ยังไม่มีคำรับรองจากลูกค้าแสดงในขณะนี้</p>
            <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
              เพิ่มคำรับรองของลูกค้าจริงได้ที่ไฟล์ lib/data.ts (ตัวแปร testimonials)
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
