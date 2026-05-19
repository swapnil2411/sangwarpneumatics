import { adminDb } from "@/lib/firebaseAdmin";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations/contactSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Validate
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        {
          success: false,
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // ✅ Save to Firestore (ADMIN SDK)
    await adminDb.collection("contacts").add({
      ...data,
      createdAt: new Date(),
    });

    // ✅ Send email to admin
    await resend.emails.send({
      from: "Sangawar Pneumatics <info@sangawar.in>",
      to: process.env.CLIENT_EMAIL || "",
      subject: "New Contact Form Lead",
      html: `
        <h2>New Inquiry</h2>
        <p><b>Name:</b> ${data.fullName}</p>
        <p><b>Company:</b> ${data.companyName || "-"}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Product:</b> ${data.product}</p>
        <p><b>Message:</b> ${data.message}</p>
      `,
    });

    // ✅ Auto reply
    const autoReply = await resend.emails.send({
  from: "Sangawar Pneumatics <info@sangawar.in>",
  to: data.email,
  subject: "We received your inquiry",
  html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h2>Thank You for Contacting Sangawar Pneumatics</h2>

    <p>Hi ${data.fullName},</p>

    <p>
      We have received your inquiry successfully.
      Our team will get back to you shortly.
    </p>

    <p>
      Regards,<br/>
      Sangawar Pneumatics Team
    </p>
  </div>
`,
});

console.log("AUTO REPLY RESULT:", autoReply);

    return Response.json({
      success: true,
      message: "Form submitted successfully!",
    });

  } catch (error) {
    console.error("API ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}