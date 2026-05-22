import { adminDb } from "@/lib/firebaseAdmin";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations/contactSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { recaptchaToken } = body;

    // ==============================
    // VERIFY RECAPTCHA
    // ==============================


const formData =
  new URLSearchParams();

formData.append(
  "secret",
  process.env
    .RECAPTCHA_SECRET_KEY!
);

formData.append(
  "response",
  recaptchaToken.trim()
);

const captchaRes = await fetch(
  "https://www.google.com/recaptcha/api/siteverify",
  {
    method: "POST",
    body: formData,
  }
);

const captchaData =
  await captchaRes.json();


// Spam Protection
if (
  !captchaData.success ||
  captchaData.score < 0.5
) {
  return Response.json(
    {
      success: false,
      message:
        "Spam activity detected. Submission blocked.",
    },
    { status: 400 }
  );
}

if (!captchaData.success) {
  return Response.json(
    {
      success: false,
      message:
        "Captcha verification failed",
    },
    { status: 400 }
  );
}

    // ==============================
    // VALIDATE FORM
    // ==============================


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
        <div style="
    font-family: Arial, sans-serif;
    background:#f4f7fb;
    padding:40px 20px;
  ">

    <div style="
      max-width:650px;
      margin:auto;
      background:#ffffff;
      border-radius:14px;
      overflow:hidden;
      border:1px solid #e2e8f0;
    ">

      <!-- Header -->
      <!-- Header -->
<div style="
  background-image:
    linear-gradient(
      rgba(15, 23, 42, 0.82),
      rgba(15, 23, 42, 0.82)
    ),
    url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop');

  background-size:cover;
  background-position:center;
  padding:30px 10px;
  text-align:center;
">

  <!-- Logo -->
  <img
    src="https://sangawar.in/assets/sangawar-logo.png"
    width="100"
    style="
      margin-bottom:20px;
      max-width:100%;
    "
  />

  <h1 style="
    color:#ffffff;
    margin:0;
    font-size:26px;
    letter-spacing:1px;
    font-weight:bold;
  ">
    SANGAWAR PNEUMATICS
  </h1>

  <p style="
    color:#e2e8f0;
    margin-top:12px;
    font-size:16px;
    line-height:1.6;
  ">
    Industrial Automation & Pneumatic Solutions
  </p>

</div>

      <!-- Content -->
      <div style="padding:35px 20px;">

        <h2 style="
          margin-top:0;
          color:#0f172a;
        ">
          Inquiry Details
        </h2>

        <table style="
          width:100%;
          border-collapse:collapse;
          margin-top:25px;
        ">

          <tr>
            <td style="
              padding:14px;
              border:1px solid #e2e8f0;
              font-weight:bold;
              background:#f8fafc;
            ">
              Full Name
            </td>

            <td style="
              padding:14px;
              border:1px solid #e2e8f0;
            ">
              ${data.fullName}
            </td>
          </tr>

          <tr>
            <td style="
              padding:14px;
              border:1px solid #e2e8f0;
              font-weight:bold;
              background:#f8fafc;
            ">
              Company
            </td>

            <td style="
              padding:14px;
              border:1px solid #e2e8f0;
            ">
              ${data.companyName || "-"}
            </td>
          </tr>

          <tr>
            <td style="
              padding:14px;
              border:1px solid #e2e8f0;
              font-weight:bold;
              background:#f8fafc;
            ">
              Email
            </td>

            <td style="
              padding:14px;
              border:1px solid #e2e8f0;
            ">
              ${data.email}
            </td>
          </tr>

          <tr>
            <td style="
              padding:14px;
              border:1px solid #e2e8f0;
              font-weight:bold;
              background:#f8fafc;
            ">
              Phone
            </td>

            <td style="
              padding:14px;
              border:1px solid #e2e8f0;
            ">
              ${data.phone}
            </td>
          </tr>

          <tr>
            <td style="
              padding:14px;
              border:1px solid #e2e8f0;
              font-weight:bold;
              background:#f8fafc;
            ">
              Product
            </td>

            <td style="
              padding:14px;
              border:1px solid #e2e8f0;
            ">
              ${data.product}
            </td>
          </tr>

        </table>

        <!-- Message -->
        <div style="margin-top:30px;">
          <h3 style="
            color:#0f172a;
            margin-bottom:12px;
          ">
            Customer Message
          </h3>

          <div style="
            background:#f8fafc;
            padding:24px;
            border-radius:10px;
            line-height:1.8;
            color:#334155;
            border:1px solid #e2e8f0;
          ">
            ${data.message}
          </div>
        </div>

      </div>

      <!-- Footer -->
      <div style="
        background:#f8fafc;
        padding:20px;
        text-align:center;
        color:#64748b;
        font-size:14px;
      ">
        © ${new Date().getFullYear()} Sangawar Pneumatics
      </div>

    </div>

  </div>
      `,
    });

    // ✅ Auto reply
    const autoReply = await resend.emails.send({
  from: "Sangawar Pneumatics <info@sangawar.in>",
  to: data.email,
  subject: "We received your inquiry",
  html: `
<div style="
  font-family: Arial, sans-serif;
  background:#eef2f7;
  padding:40px 20px;
">

  <div style="
    max-width:700px;
    margin:auto;
    background:#ffffff;
    border-radius:16px;
    overflow:hidden;
    border:1px solid #dbe3ec;
    box-shadow:0 10px 30px rgba(0,0,0,0.08);
  ">

    <!-- HEADER -->
    <div style="
      background-image:
        linear-gradient(
          rgba(15, 23, 42, 0.82),
          rgba(15, 23, 42, 0.82)
        ),
        url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop');

      background-size:cover;
      background-position:center;
      padding:30px 10px;
      text-align:center;
    ">

      <!-- LOGO -->
      <img
        src="https://sangawar.in/assets/sangawar-logo.png"
        width="100"
        style="
          margin-bottom:20px;
          max-width:100%;
        "
      />

      <h1 style="
        color:#ffffff;
        margin:0;
        font-size:26px;
        letter-spacing:1px;
        font-weight:bold;
      ">
        THANK YOU
      </h1>

      <p style="
        color:#e2e8f0;
        margin-top:14px;
        font-size:16px;
        line-height:1.7;
      ">
        We Have Received Your Inquiry
      </p>

    </div>

    <!-- BODY -->
    <div style="
      padding:35px 20px;
    ">

      <h2 style="
        margin-top:0;
        color:#0f172a;
      ">
        Hi ${data.fullName},
      </h2>

      <p style="
        color:#475569;
        line-height:1.9;
        font-size:16px;
      ">
        Thank you for contacting
        <strong>Sangawar Pneumatics</strong>.
      </p>

      <p style="
        color:#475569;
        line-height:1.9;
        font-size:16px;
      ">
        We have successfully received your inquiry.
        Our team will review your requirements and
        get back to you shortly.
      </p>

      <!-- DETAILS CARD -->
      <div style="
        margin-top:30px;
        border:1px solid #e2e8f0;
        border-radius:12px;
        overflow:hidden;
      ">

        <table style="
          width:100%;
          border-collapse:collapse;
        ">

          <tr>
            <td style="
              padding:16px;
              background:#f8fafc;
              font-weight:bold;
              border-bottom:1px solid #e2e8f0;
              width:35%;
              color:#0f172a;
            ">
              Product Interested
            </td>

            <td style="
              padding:16px;
              border-bottom:1px solid #e2e8f0;
              color:#334155;
            ">
              ${data.product}
            </td>
          </tr>

          <tr>
            <td style="
              padding:16px;
              background:#f8fafc;
              font-weight:bold;
              color:#0f172a;
            ">
              Submitted On
            </td>

            <td style="
              padding:16px;
              color:#334155;
            ">
              ${new Date().toLocaleDateString()}
            </td>
          </tr>

        </table>

      </div>

      <!-- MESSAGE -->
      <div style="
        margin-top:35px;
      ">

        <div style="
          background:#f8fafc;
          border:1px solid #e2e8f0;
          border-radius:12px;
          padding:20px;
          color:#475569;
          line-height:1.8;
          font-size:15px;
        ">
          Our experts will connect with you shortly
          regarding your inquiry and provide the best
          possible solution for your requirements.
        </div>

      </div>

      <!-- CTA -->
      <div style="
        margin-top:35px;
        text-align:center;
      ">

        <a
          href="https://sangawar.in/contact"
          style="
            display:inline-block;
            background:#2563eb;
            color:#ffffff;
            text-decoration:none;
            padding:14px 28px;
            border-radius:10px;
            font-weight:bold;
            font-size:15px;
          "
        >
          Visit Website
        </a>

      </div>

    </div>

    <!-- FOOTER -->
    <div style="
      background:#f8fafc;
      padding:22px;
      text-align:center;
      color:#64748b;
      font-size:14px;
      border-top:1px solid #e2e8f0;
    ">
      © ${new Date().getFullYear()} Sangawar Pneumatics
    </div>

  </div>

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