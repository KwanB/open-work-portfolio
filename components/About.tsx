import { CheckIcon } from "./icons";

const points = [
  "รับฟังโจทย์และเป้าหมายธุรกิจก่อนเริ่มออกแบบทุกครั้ง",
  "ออกแบบเว็บไซต์ที่ใช้งานง่ายทั้งบนมือถือและคอมพิวเตอร์",
  "สื่อสารชัดเจน ตรงเวลา ตลอดกระบวนการทำงาน",
  "ราคาที่จับต้องได้ เหมาะกับธุรกิจเริ่มต้นและฟรีแลนซ์",
];

export default function About() {
  return (
    <section id="about" className="section-padding scroll-mt-20 bg-white dark:bg-slate-900">
      <div className="container-custom grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">
            เกี่ยวกับฉัน
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            ออกแบบเว็บไซต์ที่ช่วยให้ธุรกิจของคุณดูน่าเชื่อถือมากขึ้น
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            <p>
              Open work คือแบรนด์ฟรีแลนซ์ที่รับออกแบบและพัฒนาเว็บไซต์สำหรับบุคคลและธุรกิจขนาดเล็ก
              ตั้งแต่พอร์ตโฟลิโอส่วนตัว แลนดิ้งเพจสินค้า ไปจนถึงเว็บไซต์คลินิกและงานอีเวนต์
            </p>
            <p>
              เว็บไซต์ที่ดีไม่จำเป็นต้องซับซ้อนหรือราคาแพง แต่ต้องสื่อสารตัวตนของแบรนด์ได้ชัดเจน
              ใช้งานง่าย และสร้างความน่าเชื่อถือให้กับลูกค้าที่เข้ามาเยี่ยมชม
              ทุกโปรเจกต์ได้รับการดูแลอย่างใกล้ชิดตั้งแต่ต้นจนจบ
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500 dark:text-gold-400" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] w-full rounded-2xl bg-gradient-to-br from-slate-800 to-slate-600 shadow-xl">
            <div className="flex h-full items-center justify-center">
              <span className="text-6xl font-bold text-white/10">OW</span>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-white p-5 shadow-lg ring-1 ring-slate-100 dark:bg-slate-800 dark:ring-slate-700 sm:block">
            <p className="text-3xl font-bold text-slate-900 dark:text-white">100%</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">ตั้งใจทำทุกโปรเจกต์</p>
          </div>
        </div>
      </div>
    </section>
  );
}
