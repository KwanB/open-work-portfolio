import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="section-padding scroll-mt-20 bg-white dark:bg-slate-900">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">
            ขั้นตอนการทำงาน
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            ทำงานร่วมกันอย่างไร
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            กระบวนการทำงานที่ชัดเจน โปร่งใส ติดตามได้ทุกขั้นตอน
          </p>
        </div>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute top-6 hidden h-px w-full bg-slate-200 dark:bg-slate-700 lg:block"
            aria-hidden="true"
          />
          {processSteps.map((item) => (
            <div key={item.step} className="relative flex flex-col items-start">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-lg font-bold text-white dark:bg-white dark:text-slate-900">
                {item.step}
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
