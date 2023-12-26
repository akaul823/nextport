// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req, res) {
//   const {body} = await req.json();
//   const { email, subject, message } = await req.json();
//   console.log(email, subject, message);
//   try {
//       const emailContent = `
//         <h1>${subject}</h1>
//         <p>Thank you for contacting me!</p>
//         <p>New message submitted:</p>
//         <p>${message}</p>
//       `;
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: [email],
//       subject: subject,
//       html: emailContent,
//     });
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const { email, subject, message } = await req.json();
//       console.log(email, subject, message);

//       // Prepare your email content. Adjust this according to what the Resend API expects.
//       const emailContent = `
//         <h1>${subject}</h1>
//         <p>Thank you for contacting me!</p>
//         <p>New message submitted:</p>
//         <p>${message}</p>
//       `;

//       const response = await resend.emails.send({
//         from: fromEmail,
//         to: [fromEmail, email],
//         subject: subject,
//         html: emailContent, // Assuming the API expects HTML content
//       });

//       res.status(200).json(response);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting me!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
