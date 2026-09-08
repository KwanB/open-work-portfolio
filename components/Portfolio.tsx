"use client";

import { useMemo, useState } from "react";
import { portfolioCategories, portfolioItems } from "@/lib/data";
import { ImageIcon } from "./icons";

const ALL = "all";

export default function Portfolio() {
  const [active, setActive] = useState<string>(ALL);

  const filtered = useMemo(() => {
    if (active === ALL) return portfolioItems;
    return portfolioItems.filter((item) => item.category === active);
  }, [active]);

  return (
    <section id="portfolio" className="section-padding scroll-mt-20 bg-slate-50 dark:bg-slate-950">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">
            ผลงาน
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            ผลงานที่ผ่านมา
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">ตัวอย่างผลงานแบ่งตามหมวดหมู่บริการ</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          <FilterButton label="ทั้งหมด" active={active === ALL} onClick={() => setActive(ALL)} />
          {portfolioCategories.map((cat) => (
            <FilterButton
              key={cat.id}
              label={cat.label}
              active={active === cat.id}
              onClick={() => setActive(cat.id)}
            />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:shadow-lg dark:bg-slate-900 dark:ring-slate-800"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900">
                <ImageIcon className="h-10 w-10 text-white/20" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          * ตัวอย่างผลงานด้านบนเป็นข้อมูลตัวอย่าง สามารถแก้ไขและใส่รูปผลงานจริงได้ที่ไฟล์ lib/data.ts
        </p>
      </div>
    </section>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
        active
          ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
          : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-800"
      }`}
    >
      {label}
    </button>
  );
}
