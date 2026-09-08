import { lineAddFriendUrl, siteConfig } from "@/lib/data";
import { ArrowRightIcon, MailIcon, MessageIcon, PhoneIcon } from "./icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding scroll-mt-20 relative overflow-hidden bg-slate-800"
    >
      <div
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-custom relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold-400">
            ติดต่อ / สั่งซื้อ
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            พร้อมเริ่มโปรเจกต์เว็บไซต์ของคุณแล้วหรือยัง?
          </h2>
          <p className="mt-4 text-base text-slate-300">
            ทักมาคุยรายละเอียดงานได้เลย ตอบไว ให้คำปรึกษาฟรีก่อนเริ่มงาน
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={lineAddFriendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              จองคิวเลย
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="btn-outline">
              ขอใบเสนอราคาทางอีเมล
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-4 sm:grid-cols-3">
          <ContactCard
            icon={<MessageIcon className="h-5 w-5" />}
            label="LINE"
            value={siteConfig.contact.line}
            href={lineAddFriendUrl}
            external
          />
          <ContactCard
            icon={<PhoneIcon className="h-5 w-5" />}
            label="โทรศัพท์"
            value={siteConfig.contact.phone}
            href={`tel:${siteConfig.contact.phone.replace(/-/g, "")}`}
          />
          <ContactCard
            icon={<MailIcon className="h-5 w-5" />}
            label="อีเมล"
            value={siteConfig.contact.email}
            href={`mailto:${siteConfig.contact.email}`}
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex flex-col items-center gap-2 rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 transition hover:bg-white/10"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/20 text-gold-300">
        {icon}
      </span>
      <span className="text-xs uppercase tracking-wide text-slate-400">{label}</span>
      <span className="text-sm font-medium text-white">{value}</span>
    </a>
  );
}
