// ข้อมูลทั้งหมดของเว็บไซต์อยู่ในไฟล์นี้ไฟล์เดียว
// แก้ไขราคา บริการ ผลงาน คำรับรอง และช่องทางติดต่อได้ที่นี่

export const siteConfig = {
  name: "Made by KwanB",
  role: "Freelance Web Designer",
  tagline: "รับทำเว็บไซต์สวย ใช้งานง่าย ราคาเป็นกันเอง",
  contact: {
    line: "@openwork", // TODO: แก้ไขเป็น LINE ID จริงของคุณ
    phone: "08X-XXX-XXXX", // TODO: แก้ไขเป็นเบอร์โทรจริงของคุณ
    email: "hello@openwork.dev", // TODO: แก้ไขเป็นอีเมลจริงของคุณ
  },
};

export const lineAddFriendUrl = `https://line.me/ti/p/~${siteConfig.contact.line.replace(/^@/, "")}`;

export type Service = {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
};

// ราคาด้านล่างเป็นราคาเริ่มต้นโดยประมาณ ปรับตามอัตราจริงของคุณได้เลย
export const services: Service[] = [
  {
    id: "portfolio",
    title: "Portfolio ส่วนตัว",
    description: "เว็บไซต์แนะนำตัวสำหรับนักออกแบบ ครีเอเตอร์ หรือคนทำงานอิสระ",
    price: "2,900",
    duration: "3-5 วัน",
    features: [
      "ออกแบบ 1 หน้า (Single Page)",
      "ปรับให้ใช้งานได้ดีบนมือถือ/แท็บเล็ต",
      "แกลเลอรีผลงานพร้อมหมวดหมู่",
      "ฟอร์ม/ช่องทางติดต่อ",
    ],
  },
  {
    id: "landing",
    title: "Landing Page สินค้า",
    description: "หน้าขายสินค้าที่เน้นกระตุ้นการตัดสินใจซื้อ",
    price: "3,900",
    duration: "5-7 วัน",
    features: [
      "โครงสร้างหน้าเน้นการขาย",
      "ปุ่ม CTA และฟอร์มสั่งซื้อ/สอบถาม",
      "รองรับเชื่อมต่อ Facebook Pixel/แชท",
      "ปรับให้ใช้งานได้ดีบนมือถือ 100%",
    ],
  },
  {
    id: "clinic",
    title: "เว็บไซต์คลินิก/ธุรกิจสุขภาพ",
    description: "เว็บไซต์สร้างความน่าเชื่อถือสำหรับคลินิกและธุรกิจสุขภาพ",
    price: "7,900",
    duration: "7-10 วัน",
    features: [
      "หน้าบริการ/แพ็กเกจการรักษา",
      "ระบบจองคิว/ติดต่อผ่าน LINE",
      "แผนที่และเวลาทำการ",
      "ดีไซน์สะอาด ดูน่าเชื่อถือ",
    ],
  },
  {
    id: "event",
    title: "เว็บไซต์งานรับปริญญา/อีเวนต์",
    description: "เว็บไซต์เฉพาะกิจสำหรับงานรับปริญญาหรืออีเวนต์พิเศษ",
    price: "1,900",
    duration: "2-4 วัน",
    features: [
      "นับถอยหลังวันงาน (Countdown)",
      "แกลเลอรีรูปภาพ/กำหนดการ",
      "แผนที่และการเดินทาง",
      "ส่งมอบไว ทันวันงานสำคัญ",
    ],
  },
];

export const processSteps = [
  {
    step: 1,
    title: "คุยรายละเอียดงาน (Brief)",
    description: "พูดคุยเป้าหมาย ความต้องการ และงบประมาณ เพื่อวางแผนงานให้ตรงจุด",
  },
  {
    step: 2,
    title: "ออกแบบร่าง",
    description: "ออกแบบโครงสร้างและหน้าตาเว็บไซต์ให้เข้ากับแบรนด์ของคุณ",
  },
  {
    step: 3,
    title: "แก้ไขตามฟีดแบ็ก",
    description: "ปรับแก้ตามความคิดเห็น จนกว่าคุณจะพอใจในผลงาน",
  },
  {
    step: 4,
    title: "ส่งมอบไฟล์/เว็บไซต์",
    description: "ส่งมอบเว็บไซต์พร้อมใช้งาน พร้อมคำแนะนำการดูแลรักษา",
  },
];

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  // image?: string; // TODO: ใส่ path รูปผลงานจริงใน public/portfolio/ แล้วแก้ Portfolio.tsx ให้ใช้ next/image
};

export const portfolioCategories = [
  { id: "portfolio", label: "Portfolio" },
  { id: "landing", label: "Landing Page สินค้า" },
  { id: "clinic", label: "คลินิก/ธุรกิจสุขภาพ" },
  { id: "event", label: "งานรับปริญญา/อีเวนต์" },
];

// รายการผลงานด้านล่างเป็นข้อมูลตัวอย่าง (placeholder) ยังไม่มีรูปจริง
// แก้ไข/แทนที่ด้วยผลงานจริงของคุณได้เลย
export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "พอร์ตโฟลิโอช่างภาพ",
    category: "portfolio",
    description: "เว็บไซต์แสดงผลงานภาพถ่ายพร้อมแกลเลอรีแยกหมวดหมู่",
    tags: ["Photography", "Portfolio"],
  },
  {
    id: "p2",
    title: "พอร์ตโฟลิโอนักออกแบบกราฟิก",
    category: "portfolio",
    description: "หน้าเดียวจบ โชว์ผลงานออกแบบพร้อมข้อมูลติดต่องาน",
    tags: ["Graphic Design", "Portfolio"],
  },
  {
    id: "p3",
    title: "พอร์ตโฟลิโอนักเขียน/ครีเอเตอร์",
    category: "portfolio",
    description: "รวมผลงานเขียนและช่องทางโซเชียลไว้ในที่เดียว",
    tags: ["Content Creator", "Portfolio"],
  },
  {
    id: "l1",
    title: "แลนดิ้งเพจสกินแคร์",
    category: "landing",
    description: "หน้าขายสินค้าเน้นภาพสวย ข้อมูลครบ กระตุ้นการสั่งซื้อ",
    tags: ["Skincare", "E-commerce"],
  },
  {
    id: "l2",
    title: "แลนดิ้งเพจอาหารเสริม",
    category: "landing",
    description: "โครงสร้างหน้าเน้นความน่าเชื่อถือและรีวิวสินค้า",
    tags: ["Supplement", "E-commerce"],
  },
  {
    id: "l3",
    title: "แลนดิ้งเพจคอร์สออนไลน์",
    category: "landing",
    description: "หน้าเดียวเน้นอธิบายคอร์สและปุ่มลงทะเบียน",
    tags: ["Online Course", "Landing Page"],
  },
  {
    id: "c1",
    title: "เว็บไซต์คลินิกความงาม",
    category: "clinic",
    description: "แนะนำบริการ แพ็กเกจ และช่องทางจองคิว",
    tags: ["Clinic", "Beauty"],
  },
  {
    id: "c2",
    title: "เว็บไซต์คลินิกทันตกรรม",
    category: "clinic",
    description: "ข้อมูลทันตแพทย์ บริการ และแผนที่คลินิก",
    tags: ["Dental", "Healthcare"],
  },
  {
    id: "c3",
    title: "เว็บไซต์คลินิกกายภาพบำบัด",
    category: "clinic",
    description: "หน้าบริการรักษาพร้อมระบบติดต่อสอบถาม",
    tags: ["Physical Therapy", "Healthcare"],
  },
  {
    id: "e1",
    title: "เว็บไซต์งานรับปริญญา คณะวิศวะฯ",
    category: "event",
    description: "นับถอยหลังวันงานพร้อมแกลเลอรีรูปภาพ",
    tags: ["Graduation", "Event"],
  },
  {
    id: "e2",
    title: "เว็บไซต์งานแต่งงาน",
    category: "event",
    description: "บอกกำหนดการงานแต่งและแผนที่เดินทาง",
    tags: ["Wedding", "Event"],
  },
  {
    id: "e3",
    title: "เว็บไซต์งานสัมมนา/อีเวนต์บริษัท",
    category: "event",
    description: "กำหนดการงานและฟอร์มลงทะเบียนเข้าร่วม",
    tags: ["Seminar", "Corporate Event"],
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

// ยังไม่มีคำรับรองจากลูกค้า -- ปล่อยว่างไว้โดยตั้งใจ (ไม่ใส่รีวิวปลอม)
// เพิ่มคำรับรองจริงที่นี่ได้เลย ส่วนแสดงผลจะขึ้นอัตโนมัติเมื่อมีข้อมูล เช่น:
// { name: "คุณเอ", role: "เจ้าของร้านสกินแคร์", quote: "งานไว ดีไซน์สวย ใช้งานง่ายมากครับ" }
export const testimonials: Testimonial[] = [];
