import { services } from "@/lib/data";
import { ArrowRightIcon, CheckIcon } from "./icons";

export default function Services() {
  return (
    <section id="services" className="section-padding scroll-mt-20 bg-slate-50 dark:bg-slate-950">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">
            บริการ
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            บริการรับทำเว็บไซต์
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            เลือกแพ็กเกจที่เหมาะกับความต้องการของคุณ ราคาด้านล่างเป็นราคาเริ่มต้น
            สามารถปรับตามขอบเขตงานจริง
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg dark:bg-slate-900 dark:ring-slate-800"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{service.description}</p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-sm text-slate-500 dark:text-slate-400">เริ่มต้น</span>
                <span className="text-2xl font-bold text-slate-900 dark:text-white">{service.price}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">บาท</span>
              </div>
              <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">ระยะเวลา {service.duration}</p>

              <ul className="mt-5 flex-1 space-y-2.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500 dark:text-gold-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-slate-900"
              >
                ขอใบเสนอราคา
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          * ราคาที่แสดงเป็นราคาเริ่มต้นโดยประมาณ ขึ้นอยู่กับขอบเขตงานและความซับซ้อนของแต่ละโปรเจกต์
        </p>
      </div>
    </section>
  );
}
