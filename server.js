const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: 'mail09.xinet.com.mx',
  port: 465,
  secure: true,
  auth: {
    user: 'comercio@solucione.mx',
    pass: 'Crm#140324$%'
  }
});

const emailDestinatario = 'comercio@solucione.mx';

app.post('/send-email', (req, res) => {
  const { name, email, Phonenumber, additionalInfo, address, country, fecha, hora, additionalText, service } = req.body;

  const mailOptions = {
    from: `${name} <${emailDestinatario}>`,
    to: emailDestinatario,
    subject: `Nueva solicitud de información del servicio ${service}`,
    text: `Nombre: ${name}\nDirección: ${address}\nCorreo Electrónico: ${email}\nTeléfono: ${Phonenumber}\nFecha: ${fecha}\nHora: ${hora}\n${additionalText}\nInformación adicional: ${additionalInfo}`,
    html: `
      <p>Nombre: ${name}</p>
      <p>Dirección: ${address}</p>
      <p>Correo Electrónico: ${email}</p>
      <p>Teléfono: ${Phonenumber}</p>
      <p>Fecha: ${fecha}</p>
      <p>Hora: ${hora}</p>
      <p>${additionalText}</p>
      <p>Información adicional: ${additionalInfo}</p>
    `,
    name: name,
    email: email,
    phoneNumber: Phonenumber,
    messageBody: additionalInfo
  };
  
  // Enviar mailOptions al CRM
  

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      return res.status(500).send(error.toString());
    }
    console.log('Correo enviado exitosamente:', info.response);
    res.status(200).send('Correo enviado exitosamente');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
