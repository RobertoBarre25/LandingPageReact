const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Configurar nodemailer con SMTP
const transporter = nodemailer.createTransport({
  host: 'mail09.xinet.com.mx',
  port: 465,
  secure: true,
  auth: {
    user: 'comercio@solucione.mx',  // Correo remitente
    pass: 'Crm#140324$%',          // Contraseña
  },
});

const emailDestinatario = 'comercio@solucione.mx';  // Correo destinatario predeterminado

app.post('/send-email', (req, res) => {
  const { nombre, apellido, direccion, email, lada, telefono, fecha, hora, additionalInfo } = req.body;

  const mailOptions = {
    from: email,  // El correo del remitente será el proporcionado en el formulario
    to: emailDestinatario, // El correo del destinatario está especificado aquí
    subject: 'Nueva solicitud de información del servicio',
    html: `
      <p>Nombre: ${nombre}</p>
      <p>Apellido: ${apellido}</p>
      <p>Dirección: ${direccion}</p>
      <p>Correo Electrónico: ${email}</p>
      <p>Lada: ${lada}</p>
      <p>Teléfono: ${telefono}</p>
      <p>Fecha: ${fecha}</p>
      <p>Hora: ${hora}</p>
      <p>Información adicional: ${additionalInfo}</p>
    `
  };

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
