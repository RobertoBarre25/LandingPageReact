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
  const { name, email, phone, additionalText, serviceRecipe } = req.body;
  const company = "Landin Page";

  const mailOptions = {
    from: `${name} <${email}>`,
    to: emailDestinatario,
    subject: `Nueva solicitud de información del servicio ${serviceRecipe}`,
    html: `
      <html>
        <body>
          <label>From: ${name} &lt;${email}&gt;</label><br>
          <label>Subject: "Nueva solicitud de información del servicio ${serviceRecipe}"</label><br>
          <label>Name:</label><br>
          <p>${name}</p>
          <label>Email:</label><br>
          <p>${email}</p>
          <label>Comapany:</label><br>
          <div id="field_company">${company}</div>
          <label>Phone Number:</label><br>
          <div id="field_phonenumber">${phone}</div>
          <label>Message Body:</label><br>
          <div id="field_description>${additionalText}</div>
        </body>
      </html>
    `
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
