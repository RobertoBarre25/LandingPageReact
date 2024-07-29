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


// Conexión a MongoDB
const uri = 'mongodb+srv://Arturo:1234@cluster0.eoflwrk.mongodb.net/Administrador?retryWrites=true&w=majority';

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

const imageSectionSchema = new mongoose.Schema({
  tag: { type: String, required: true },
  section: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  buttonText: { type: String, required: true },
  buttonValue: { type: String, required: true }
}, { collection: 'body' });

const ImageSec = mongoose.model('ImageSec', imageSectionSchema);


const imageSectionSchemaTitle =new mongoose.Schema({
    title: {type: String, required: true}
  },{collection: 'body'});

const ImageSecTitle = mongoose.model('ImageSecTitle', imageSectionSchemaTitle);

// Definir esquema y modelo de Mongoose para la colección 'body'
const bodySchema = new mongoose.Schema({
  tag: { type: String, required: true },
  principalText: { type: String, required: true }
}, { collection: 'body' });

const Body = mongoose.model('Body', bodySchema);

// Definir esquema y modelo de Mongoose para la colección ''
const carouselSchema = new mongoose.Schema({
  section: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  buttonText1: { type: String, required: true },
  buttonAction1: { type: String, required: true },
  buttonText2: { type: String, required: true },
  buttonAction2: { type: String, required: true },
  subSection: { type: String, required: true }
}, { collection: 'body' });

const Carousel = mongoose.model('Carousel', carouselSchema);


// Definir esquema y modelo de Mongoose para la colección 'm1'
const m1Schema = new mongoose.Schema({
  section: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  buttonText1: { type: String, required: true },
  buttonAction1: { type: String, required: true },
  buttonText2: { type: String },
  buttonAction2: { type: String }
}, { collection: 'm1' });

const M1 = mongoose.model('M1', m1Schema);

const serviceSchema = new mongoose.Schema({
  imgText: String,
  buttonServText: String
}, { collection: 'services' });

const Service = mongoose.model('Service', serviceSchema);

// Endpoint para obtener datos de servicios
app.get('/api/service', async (req, res) => {
  console.log('Received request for /api/service');
  try {
      const servicesData = await Service.find({});
      
      if (!servicesData || servicesData.length === 0) {
          console.log('No se encontraron servicios');
          return res.status(404).send('No se encontraron servicios');
      }

      console.log('Servicios encontrados:', servicesData);
      res.json(servicesData);
  } catch (err) {
      console.error('Error:', err.message);
      res.status(500).json({ error: err.message });
  }
});


// Conexión a MongoDB
const uri = 'mongodb+srv://Arturo:1234@cluster0.eoflwrk.mongodb.net/Administrador?retryWrites=true&w=majority';


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

// Endpoint para obtener el texto principal
app.get('/api/body', async (req, res) => {
  console.log('Received request for /api/body');
  try {
    const bodyData = await Body.findOne({ tag: 'principalText' });
    console.log('Body data:', bodyData);
    if (!bodyData) return res.status(404).send('No se encontró el texto principal');
    res.json(bodyData);
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ error: err.message });
  }
});


// Endpoint para obtener los datos del carrusel en la colección 'm1'
app.get('/api/m1', async (req, res) => {
  console.log('Received request for /api/m1');
  try {
    const m1Data = await M1.find({ section: 'carousel' }).sort({ subSection: 1 });
    if (!m1Data || m1Data.length === 0) return res.status(404).send('No se encontró información en m1');
    res.json(m1Data);
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ error: err.message });
  }
});



app.get('/api/carousel', async (req, res) => {
  console.log('Received request for /api/carousel');
  try {
    // Obtener todos los documentos de la sección 'carousel' y ordenarlos por 'subSection'
    const carouselData = await Carousel.find({ section: 'carousel' }).sort({ subSection: 1 });

    // Verificar si se encontró datos
    if (!carouselData || carouselData.length === 0) {
      return res.status(404).send('No se encontró la sección del carrusel');
    }

    res.json(carouselData);
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/ImageSection', async(req, res) => {
  console.log('Recibed request for api/body');
    try{
      const  ImageSectionData = await ImageSecTitle.findOne({tag: 'ImageSection'});
      console.log('ImageSection Data: ', ImageSectionData);
      if(!ImageSectionData) return res.status(404).send('Ups ha ocurrido un error al encontrar los datos');
          res.json(ImageSectionData)
      }catch(err){
        console.error('Error:', err.message);
        res.status(500).json({error: err.message});
      }
});

app.get('/api/ImageSectionCards', async (req, res) => {
  console.log('Received request for /api/ImageSectionCards');
  try {
    const section = req.query.section;

    if (!section) {
      return res.status(400).send('Se requiere el parámetro de sección');
    }

    const imageSectionData = await ImageSecTitle.find({ tag: 'ImagenSectionCards' })
      .sort({ section: 1 });

    console.log('ImageSection Data:', imageSectionData);
    if (imageSectionData.length === 0) return res.status(404).send('No se encontraron datos para la sección especificada');

    res.json(imageSectionData);
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ error: err.message });
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
