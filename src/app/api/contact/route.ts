import {NextResponse} from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try{
        const {name, email, subject, message} = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({error: "Missing required fields"}, {status: 400});
        }

        // configuration du transporteur
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) ,
            secure: process.env.SMTP_PORT === "465", // true pour 465, false pour les autres ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        })

        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`, // Adresse d'envoi authentifiée
            replyTo: email, // Permet de répondre directement au client en faisant "Répondre"
            to: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER,
            subject: `[Contact ISOLELE] ${subject || "Nouveau Message"}`,
            text: `Nom: ${name}\nEmail: ${email}\nSujet: ${subject || "Sans sujet"}\n\nMessage:\n${message}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #F6B800;">Nouveau message de contact - ISOLELE</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Sujet :</strong> ${subject || "Non spécifié"}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 8px;">${message}</p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({message: "Message envoyé avec succès"});
    }catch (error) {
        console.error("Erreur lors de l'envoi du message :", error);
        return NextResponse.json({error: "Erreur lors de l'envoi du message"}, {status: 500});
    }
}