const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  host: 'mail09.xinet.com.mx',
  port: 465,
  secure: true,
  auth: {
    user: 'comercio@solucione.mx',
    pass: 'Crm#140324$%',
  },
});

const emailDestinatario = 'comercio@solucione.mx';

// Conexión a MongoDBconst mongoose = require('mongoose');

// Reemplaza <username>, <password>, <cluster-address>, y <database> con tus valores
const uri = 'mongodb+srv://Arturo:1234@cluster0.eoflwrk.mongodb.net/Administrador';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Error connecting to MongoDB:', err));


// Definir esquema y modelo de Mongoose para usuarios
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Endpoint para registrar un nuevo usuario
app.post('/register', async (req, res) => {
  const { username, password, userType } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, userType });
    await newUser.save();
    res.status(201).send('Usuario registrado exitosamente');
  } catch (error) {
    res.status(400).send('Error al registrar usuario');
  }
});

// Endpoint para loguear un usuario
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send('Usuario no encontrado');
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Contraseña incorrecta');
    
    const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).send('Error al autenticar usuario');
  }
});

// Endpoint para enviar correo electrónico
app.post('/send-email', (req, res) => {
  const { name, email, phone, additionalText, serviceRecipe } = req.body;

  console.log(req.body); // Para verificar que se recibe correctamente el serviceRecipe

  const company = "Landing Page";

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
          <label>Company:</label><br>
          <div id="field_company">${company} ${serviceRecipe}</div>
          <label>Phone Number:</label><br>
          <div id="field_phonenumber">${phone}</div>
          <label>Message Body:</label><br>
          <div id="field_description">${additionalText}</div>
          </body>
          <p>${additionalText}</p>
      </html>
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

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
