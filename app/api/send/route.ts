import { NextRequest, NextResponse } from "next/server";
import EmailTemplate from "../../components/EmailTemplate";
import { Resend } from "resend";

interface RequestBody {
  email: string;
  subject: string;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: NextRequest) {
  const body: RequestBody = await req.json();
  const { email, subject, message } = body;
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail!,
      to: ["zukka75@gmail.com", email],
      subject: subject,
      react: EmailTemplate({
        message: message,
        subject: subject,
      }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
