# Open work — Portfolio & บริการรับทำเว็บไซต์

เว็บไซต์ Single Page สำหรับแนะนำตัวและขายบริการรับทำเว็บไซต์
สร้างด้วย Next.js (App Router) + TypeScript + Tailwind CSS

## เริ่มต้นใช้งาน

```bash
npm install
npm run dev
```

เปิด http://localhost:3000

## โครงสร้างโปรเจกต์

- `app/` — layout, page หลัก และ global styles
- `components/` — แต่ละ Section ของหน้าเว็บ (Navbar, Hero, About, Services, Process, Portfolio, Testimonials, Contact, Footer)
- `lib/data.ts` — **ข้อมูลทั้งหมดของเว็บไซต์อยู่ที่นี่ไฟล์เดียว** (ราคา, บริการ, ผลงาน, คำรับรอง, ช่องทางติดต่อ)

## สิ่งที่ต้องแก้ไขก่อนเผยแพร่จริง (สำคัญ)

ทุกอย่างด้านล่างแก้ไขได้ในไฟล์เดียว: `lib/data.ts`

1. **ช่องทางติดต่อ** (`siteConfig.contact`) — ตอนนี้เป็นค่าตัวอย่าง ใส่ LINE ID, เบอร์โทร,
   อีเมลจริงของคุณ (ปุ่ม "จองคิวเลย" จะลิงก์ไป LINE ให้อัตโนมัติตาม LINE ID ที่ใส่)
2. **ราคาและระยะเวลา** (`services`) — ราคาที่ใส่ไว้เป็นราคาประมาณการเริ่มต้น ปรับตามอัตราจริงของคุณ
3. **ผลงาน** (`portfolioItems`) — ตอนนี้เป็นข้อมูลตัวอย่าง (placeholder) ยังไม่มีรูปจริง แนะนำให้:
   - ใส่รูปผลงานจริงไว้ใน `public/portfolio/`
   - แก้ไข `components/Portfolio.tsx` ให้ใช้ `next/image` แสดงรูปแทนกล่องไล่สี placeholder
4. **คำรับรองจากลูกค้า** (`testimonials`) — ปล่อยว่างไว้โดยตั้งใจ (ไม่ใส่รีวิวปลอม)
   เพิ่มคำรับรองจริงได้ในไฟล์นี้ ส่วนแสดงผลจะขึ้นอัตโนมัติเมื่อมีข้อมูล
5. **รูปโปรไฟล์ในหัวข้อ "เกี่ยวกับฉัน"** — ตอนนี้เป็นกล่องไล่สีแทนรูปจริง แก้ไขได้ที่ `components/About.tsx`

## Deploy ขึ้น Vercel

1. Push โค้ดขึ้น GitHub/GitLab/Bitbucket
2. เข้า https://vercel.com → New Project → เลือก repo นี้
3. Vercel จะตรวจจับว่าเป็น Next.js อัตโนมัติ กด Deploy ได้เลยโดยไม่ต้องตั้งค่าเพิ่มเติม

หรือ deploy ผ่าน CLI:

```bash
npm i -g vercel
vercel
```

## คำสั่งที่ใช้บ่อย

- `npm run dev` — รันเซิร์ฟเวอร์พัฒนา
- `npm run build` — build โปรเจกต์สำหรับ production
- `npm run start` — รันเซิร์ฟเวอร์ production (หลัง build)
- `npm run lint` — ตรวจสอบโค้ดด้วย ESLint
