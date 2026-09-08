import type { Metadata, Viewport } from "next";
import { Prompt } from "next/font/google";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | รับทำเว็บไซต์ - Freelance Web Designer`,
  description: `รับทำเว็บไซต์สวย ใช้งานง่าย ราคาเป็นกันเอง — ${siteConfig.name} ฟรีแลนซ์ออกแบบเว็บไซต์ พอร์ตโฟลิโอ, Landing Page, เว็บไซต์คลินิก, เว็บงานรับปริญญา/อีเวนต์`,
  keywords: [
    "รับทำเว็บไซต์",
    "Freelance Web Designer",
    "ทำเว็บไซต์ราคาถูก",
    "Landing Page",
    "Portfolio",
  ],
  openGraph: {
    title: `${siteConfig.name} | รับทำเว็บไซต์`,
    description: "รับทำเว็บไซต์สวย ใช้งานง่าย ราคาเป็นกันเอง",
    locale: "th_TH",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={prompt.variable} suppressHydrationWarning>
      <body className="bg-white font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50">
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var s=localStorage.getItem("theme");var d=window.matchMedia("(prefers-color-scheme: dark)").matches;if(s==="dark"||(!s&&d)){document.documentElement.classList.add("dark")}}catch(e){}})();',
          }}
        />
        {children}
      </body>
    </html>
  );
}
