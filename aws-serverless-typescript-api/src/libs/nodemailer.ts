import nodemailer from 'nodemailer';

const sendEmail = async(user:string) => { 
    try {
       
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.PASSWORD_EMAIL_FROM
          }
        });
    
      
        const mailOptions = {
          from: process.env.EMAIL_FROM,
          to: process.env.EMAIL_SEND,
          subject: 'Registro de un usuario',
          text: `El usuario ${user} ha sido registrado`
        };
    
        await transporter.sendMail(mailOptions);
        
        return { statusCode: 200, body: 'Correo enviado correctamente' };
      } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        return { statusCode: 500, body: 'Error al enviar el correo electrónico' };
      }
};

export default sendEmail;