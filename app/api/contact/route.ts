// import { NextRequest, NextResponse } from "next/server";
// import { Resend } from "resend";
// import { z } from "zod";

// const resend = new Resend(process.env.RESEND_API_KEY);

// // Rate limiting (simple in-memory, works on serverless per instance)
// const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

// const schema = z.object({
//   name: z.string().min(2).max(100),
//   company: z.string().max(100).optional(),
//   email: z.string().email(),
//   phone: z.string().regex(/^[0-9+\s\-()]{7,20}$/),
//   address: z.string().max(300).optional(),
//   product: z.string().max(100),
//   message: z.string().max(1000).optional(),
//   recaptchaToken: z.string(),
//   honeypot: z.string().max(0), // must be empty
// });

// async function verifyRecaptcha(token: string): Promise<boolean> {
//   const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
//   });
//   const data = await res.json();
//   return data.success && data.score >= 0.5;
// }

// async function sendWhatsApp(message: string) {
//   const encoded = encodeURIComponent(message);
//   const url = `https://api.callmebot.com/whatsapp.php?phone=${process.env.CLIENT_WHATSAPP_NUMBER}&text=${encoded}&apikey=${process.env.CALLMEBOT_API_KEY}`;
//   await fetch(url);
// }

// export async function POST(req: NextRequest) {
//   // Rate limit: max 5 requests per IP per 10 minutes
//   const ip = req.headers.get("x-forwarded-for") ?? "unknown";
//   const now = Date.now();
//   const entry = rateLimitMap.get(ip);
//   if (entry) {
//     if (now - entry.timestamp < 10 * 60 * 1000) {
//       if (entry.count >= 5) {
//         return NextResponse.json({ error: "Too many requests" }, { status: 429 });
//       }
//       entry.count++;
//     } else {
//       rateLimitMap.set(ip, { count: 1, timestamp: now });
//     }
//   } else {
//     rateLimitMap.set(ip, { count: 1, timestamp: now });
//   }

//   const body = await req.json();
//   const parsed = schema.safeParse(body);

//   if (!parsed.success) {
//     return NextResponse.json({ error: "Invalid data" }, { status: 400 });
//   }

//   const { name, company, email, phone, address, product, message, recaptchaToken } = parsed.data;

//   // reCAPTCHA check
//   const isHuman = await verifyRecaptcha(recaptchaToken);
//   if (!isHuman) {
//     return NextResponse.json({ error: "Bot detected" }, { status: 403 });
//   }

//   // Send email via Resend
//   await resend.emails.send({
//     from: "Contact Form <noreply@yourdomain.com>",
//     to: process.env.CLIENT_EMAIL!,
//     subject: `New Enquiry from ${name}`,
//     html: `
//       <h2>New Contact Form Submission</h2>
//       <p><b>Name:</b> ${name}</p>
//       <p><b>Company:</b> ${company || "—"}</p>
//       <p><b>Email:</b> ${email}</p>
//       <p><b>Phone:</b> ${phone}</p>
//       <p><b>Address:</b> ${address || "—"}</p>
//       <p><b>Product Interested In:</b> ${product}</p>
//       <p><b>Message:</b> ${message || "—"}</p>
//     `,
//   });

//   // Send WhatsApp notification
//   const waMessage = `New Enquiry!\nName: ${name}\nPhone: ${phone}\nProduct: ${product}\nEmail: ${email}`;
//   await sendWhatsApp(waMessage);

//   return NextResponse.json({ success: true });
// }