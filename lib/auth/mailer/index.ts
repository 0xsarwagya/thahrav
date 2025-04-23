import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.in', // Use 'smtp.zoho.com' if you're not in India
    port: 465,
    secure: true,
    auth: {
        user: 'noreply@thahrav.shop', // Your Zoho custom domain email
        pass: process.env.MAIL_PASSWORD         // Use App Password (not your login password)
    }
});

/**
 * Sends an email using the configured nodemailer transporter
 * @param to - Recipient email address
 * @param subject - Email subject line
 * @param html - HTML content of the email
 * @param text - Plain text content of the email
 * @returns Promise that resolves with the sent mail info
 */
export const sendEmail = async (to: string, subject: string, html: string, text: string) => {
    const mailOptions = {
        from: {
            name: 'Thahrav',
            address: "noreply@thahrav.shop"
        },
        to,
        subject,
        html,
        text
    }

    return transporter.sendMail(mailOptions)
}