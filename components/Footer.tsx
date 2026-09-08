import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-10">
      <div className="container-custom flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-base font-bold text-white">{siteConfig.name}</p>
          <p className="text-sm text-slate-400">{siteConfig.role}</p>
        </div>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {siteConfig.name}. สงวนลิขสิทธิ์ทุกประการ
        </p>
      </div>
    </footer>
  );
}
