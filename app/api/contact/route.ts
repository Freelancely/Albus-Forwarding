import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { name, email, phone, company, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, subject, and message are required." },
        { status: 400 },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address format." }, { status: 400 })
    }

    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company || "Not provided"}
Subject: ${subject}

Message:
${message}

---
This message was sent from the Albus Forwarding website contact form.
    `.trim()

    console.log("Contact form submission received:", {
      name,
      email,
      phone,
      company,
      subject,
      timestamp: new Date().toISOString(),
    })

    // Examples:
    // - SendGrid: await sgMail.send(...)
    // - Mailgun: await mailgun.messages().send(...)
    // - Resend: await resend.emails.send(...)
    // - AWS SES: await ses.sendEmail(...)

    // For now, we'll simulate a successful submission
    // Replace this with actual email sending logic

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! We will get back to you soon.",
        submissionId: `ALB-${Date.now()}`,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)

    return NextResponse.json(
      { error: "An error occurred while processing your request. Please try again later." },
      { status: 500 },
    )
  }
}
