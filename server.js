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
  buttonText2: { type: String, required: true },
  buttonAction2: { type: String, required: true },
  cards: [
    {
      imageUrl: { type: String, required: true },
      text: { type: String, required: true },
      buttonText: { type: String, required: true }
    }
  ]
}, { collection: 'm1' });

const M1 = mongoose.model('M1', m1Schema);



// Esquemas y modelos para la colección 'm2'
const m2Schema = new mongoose.Schema({
  section: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  buttonText1: { type: String, required: true },
  buttonAction1: { type: String, required: true },
  buttonText2: { type: String, required: true },
  buttonAction2: { type: String, required: true },
  cards: [
    {
      imageUrl: { type: String, required: true },
      text: { type: String, required: true },
      buttonText: { type: String, required: true }
    }
  ]
}, { collection: 'm2' });

const M2 = mongoose.model('M2', m2Schema);


// Esquemas y modelos para la colección 'm3'
const m3Schema = new mongoose.Schema({
  section: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  buttonText1: { type: String, required: true },
  buttonAction1: { type: String, required: true },
  buttonText2: { type: String, required: true },
  buttonAction2: { type: String, required: true },
  cards: [
    {
      imageUrl: { type: String, required: true },
      text: { type: String, required: true },
      buttonText: { type: String, required: true }
    }
  ]
}, { collection: 'm3' });

const M3 = mongoose.model('M3', m3Schema);

// Esquemas y modelos para la colección 'm4'
const m4Schema = new mongoose.Schema({
  section: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  buttonText1: { type: String, required: true },
  buttonAction1: { type: String, required: true },
  buttonText2: { type: String, required: true },
  buttonAction2: { type: String, required: true },
  cards: [
    {
      imageUrl: { type: String, required: true },
      text: { type: String, required: true },
      buttonText: { type: String, required: true }
    }
  ]
}, { collection: 'm4' });

const M4 = mongoose.model('M4', m4Schema);


// Esquemas y modelos para la colección 'm5'
const m5Schema = new mongoose.Schema({
  section: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  buttonText1: { type: String, required: true },
  buttonAction1: { type: String, required: true },
  buttonText2: { type: String, required: true },
  buttonAction2: { type: String, required: true },
  cards: [
    {
      imageUrl: { type: String, required: true },
      text: { type: String, required: true },
      buttonText: { type: String, required: true }
    }
  ]
}, { collection: 'm5' });

const M5 = mongoose.model('M5', m5Schema);

// Esquemas y modelos para la colección 'm6'
const m6Schema = new mongoose.Schema({
  section: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  buttonText1: { type: String, required: true },
  buttonAction1: { type: String, required: true },
  buttonText2: { type: String, required: true },
  buttonAction2: { type: String, required: true },
  cards: [
    {
      imageUrl: { type: String, required: true },
      text: { type: String, required: true },
      buttonText: { type: String, required: true }
    }
  ]
}, { collection: 'm6' });

const M6 = mongoose.model('M6', m6Schema);

// Esquemas y modelos para la colección 'm2'
const m7Schema = new mongoose.Schema({
  section: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  buttonText1: { type: String, required: true },
  buttonAction1: { type: String, required: true },
  buttonText2: { type: String, required: true },
  buttonAction2: { type: String, required: true },
  cards: [
    {
      imageUrl: { type: String, required: true },
      text: { type: String, required: true },
      buttonText: { type: String, required: true }
    }
  ]
}, { collection: 'm7' });

const M7 = mongoose.model('M7', m7Schema);



// Esquemas y modelos para la colección 'm2'
const m8Schema = new mongoose.Schema({
  section: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  buttonText1: { type: String, required: true },
  buttonAction1: { type: String, required: true },
  buttonText2: { type: String, required: true },
  buttonAction2: { type: String, required: true },
  cards: [
    {
      imageUrl: { type: String, required: true },
      text: { type: String, required: true },
      buttonText: { type: String, required: true }
    }
  ]
}, { collection: 'm8' });

const M8 = mongoose.model('M8', m8Schema);

// Esquemas y modelos para la colección 'm9'
const m9Schema = new mongoose.Schema({
  section: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  buttonText1: { type: String, required: true },
  buttonAction1: { type: String, required: true },
  buttonText2: { type: String, required: true },
  buttonAction2: { type: String, required: true },
  cards: [
    {
      imageUrl: { type: String, required: true },
      text: { type: String, required: true },
      buttonText: { type: String, required: true }
    }
  ]
}, { collection: 'm9' });

const M9 = mongoose.model('M9', m9Schema);

// Esquemas y modelos para la colección 'm10'
const m10Schema = new mongoose.Schema({
  section: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  buttonText1: { type: String, required: true },
  buttonAction1: { type: String, required: true },
  buttonText2: { type: String, required: true },
  buttonAction2: { type: String, required: true },
  cards: [
    {
      imageUrl: { type: String, required: true },
      text: { type: String, required: true },
      buttonText: { type: String, required: true }
    }
  ]
}, { collection: 'm10' });

const M10 = mongoose.model('M10', m10Schema);

// Esquemas y modelos para la colección 'm11'
const m11Schema = new mongoose.Schema({
  section: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  buttonText1: { type: String, required: true },
  buttonAction1: { type: String, required: true },
  buttonText2: { type: String, required: true },
  buttonAction2: { type: String, required: true },
  cards: [
    {
      imageUrl: { type: String, required: true },
      text: { type: String, required: true },
      buttonText: { type: String, required: true }
    }
  ]
}, { collection: 'm11' });

const M11 = mongoose.model('M11', m11Schema);

// Esquemas y modelos para la colección 'm12'
const m12Schema = new mongoose.Schema({
  section: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  buttonText1: { type: String, required: true },
  buttonAction1: { type: String, required: true },
  buttonText2: { type: String, required: true },
  buttonAction2: { type: String, required: true },
  cards: [
    {
      imageUrl: { type: String, required: true },
      text: { type: String, required: true },
      buttonText: { type: String, required: true }
    }
  ]
}, { collection: 'm12' });

const M12 = mongoose.model('M12', m12Schema);



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

// Endpoint para obtener datos de los CardM1
const CardM1Schema = new mongoose.Schema({
  CardM1Text: String,
  detailText: String,
  img: String,
}, { collection: 'services' });

const cardM1 = mongoose.model('cardM1', CardM1Schema);

app.get('/api/cardM1', async (req, res) => {
  try {
      const CardM1Data = await cardM1.find({});
      
      if (!CardM1Data || CardM1Data.length === 0) {
        return res.status(404).send('No se encontraron servicios');
      }
      res.json(CardM1Data);
  } catch (err) {
      console.error('Error:', err.message);
      res.status(500).json({ error: err.message });
  }
});

// Endpoint para obtener datos de los CardM2
const CardM2Schema = new mongoose.Schema({
  CardM2Text: String,
  imgCardM2: String,
}, { collection: 'services' });

const cardM2 = mongoose.model('cardM2', CardM2Schema);

app.get('/api/cardM2', async (req, res) => {
  try {
      const CardM2Data = await cardM2.find({});
      
      if (!CardM2Data || CardM2Data.length === 0) {
          return res.status(404).send('No se encontraron servicios');
      }
      res.json(CardM2Data);
  } catch (err) {
      console.error('Error:', err.message);
      res.status(500).json({ error: err.message });
  }
});

// Endpoint para obtener datos de los CardM3
const CardM3Schema = new mongoose.Schema({
  CardM3Text: String,
  imgCardM3: String,
}, { collection: 'services' });

const cardM3 = mongoose.model('cardM3', CardM3Schema);

app.get('/api/cardM3', async (req, res) => {
  try {
      const CardM3Data = await cardM3.find({});
      
      if (!CardM3Data || CardM3Data.length === 0) {
          return res.status(404).send('No se encontraron servicios');
      }
      res.json(CardM3Data);
  } catch (err) {
      console.error('Error:', err.message);
      res.status(500).json({ error: err.message });
  }
});

// Endpoint para obtener datos de los CardM4
const CardM4Schema = new mongoose.Schema({
  CardM4Text: String,
  imgCardM4: String,
}, { collection: 'services' });

const cardM4 = mongoose.model('cardM4', CardM4Schema);

app.get('/api/cardM4', async (req, res) => {
  try {
      const CardM4Data = await cardM4.find({});
      
      if (!CardM4Data || CardM4Data.length === 0) {
          return res.status(404).send('No se encontraron servicios');
      }
      res.json(CardM4Data);
  } catch (err) {
      console.error('Error:', err.message);
      res.status(500).json({ error: err.message });
  }
});

// Endpoint para obtener datos de los CardM5
const CardM5Schema = new mongoose.Schema({
  CardM5Text: String,
  imgCardM5: String,
}, { collection: 'services' });

const cardM5 = mongoose.model('cardM5', CardM5Schema);

app.get('/api/cardM5', async (req, res) => {
  try {
      const CardM5Data = await cardM5.find({});
      
      if (!CardM5Data || CardM5Data.length === 0) {
          return res.status(404).send('No se encontraron servicios');
      }
      res.json(CardM5Data);
  } catch (err) {
      console.error('Error:', err.message);
      res.status(500).json({ error: err.message });
  }
});

// Endpoint para obtener datos de los CardM6
const CardM6Schema = new mongoose.Schema({
  CardM6Text: String,
  imgCardM6: String,
}, { collection: 'services' });

const cardM6 = mongoose.model('cardM6', CardM6Schema);

app.get('/api/cardM6', async (req, res) => {
  try {
      const CardM6Data = await cardM6.find({});
      
      if (!CardM6Data || CardM6Data.length === 0) {
          return res.status(404).send('No se encontraron servicios');
      }
      res.json(CardM6Data);
  } catch (err) {
      console.error('Error:', err.message);
      res.status(500).json({ error: err.message });
  }
});


// Endpoint para obtener datos de los CardM7
const CardM7Schema = new mongoose.Schema({
  CardM7Text: String,
  imgCardM7: String,
}, { collection: 'services' });

const cardM7 = mongoose.model('cardM7', CardM7Schema);

app.get('/api/cardM7', async (req, res) => {
  try {
      const CardM7Data = await cardM7.find({});
      
      if (!CardM7Data || CardM7Data.length === 0) {
          return res.status(404).send('No se encontraron servicios');
      }
      res.json(CardM7Data);
  } catch (err) {
      console.error('Error:', err.message);
      res.status(500).json({ error: err.message });
  }
});

// Endpoint para obtener datos de los CardM8
const CardM8Schema = new mongoose.Schema({
  CardM8Text: String,
  imgCardM8: String,
}, { collection: 'services' });

const cardM8 = mongoose.model('cardM8', CardM8Schema);

app.get('/api/cardM8', async (req, res) => {
  try {
      const CardM8Data = await cardM8.find({});
      
      if (!CardM8Data || CardM8Data.length === 0) {
          return res.status(404).send('No se encontraron servicios');
      }
      res.json(CardM8Data);
  } catch (err) {
      console.error('Error:', err.message);
      res.status(500).json({ error: err.message });
  }
});

// Endpoint para obtener datos de los CardM9
const CardM9Schema = new mongoose.Schema({
  CardM9Text: String,
  imgCardM9: String,
}, { collection: 'services' });

const cardM9 = mongoose.model('cardM9', CardM9Schema);

app.get('/api/cardM9', async (req, res) => {
  try {
      const CardM9Data = await cardM9.find({});
      
      if (!CardM9Data || CardM9Data.length === 0) {
        return res.status(404).send('No se encontraron servicios');
      }
      res.json(CardM9Data);
  } catch (err) {
      console.error('Error:', err.message);
      res.status(500).json({ error: err.message });
  }
});

// Endpoint para obtener datos de los CardM10
const CardM10Schema = new mongoose.Schema({
  CardM10Text: String,
  imgCardM10: String,
}, { collection: 'services' });

const cardM10 = mongoose.model('cardM10', CardM10Schema);

app.get('/api/cardM10', async (req, res) => {
  try {
      const CardM10Data = await cardM10.find({});
      
      if (!CardM10Data || CardM10Data.length === 0) {
        return res.status(404).send('No se encontraron servicios');
      }
      res.json(CardM10Data);
  } catch (err) {
      console.error('Error:', err.message);
      res.status(500).json({ error: err.message });
  }
});

// Endpoint para obtener datos de los CardM11
const CardM11Schema = new mongoose.Schema({
  CardM11Text: String,
  imgCardM11: String,
}, { collection: 'services' });

const cardM11 = mongoose.model('cardM11', CardM11Schema);

app.get('/api/cardM11', async (req, res) => {
  try {
      const CardM11Data = await cardM11.find({});
      
      if (!CardM11Data || CardM11Data.length === 0) {
        return res.status(404).send('No se encontraron servicios');
      }
      res.json(CardM11Data);
  } catch (err) {
      console.error('Error:', err.message);
      res.status(500).json({ error: err.message });
  }
});

// Endpoint para obtener datos de los CardM12
const CardM12Schema = new mongoose.Schema({
  CardM12Text: String,
  imgCardM12: String,
}, { collection: 'services' });

const cardM12 = mongoose.model('cardM12', CardM12Schema);

app.get('/api/cardM12', async (req, res) => {
  try {
      const CardM12Data = await cardM12.find({});
      
      if (!CardM12Data || CardM12Data.length === 0) {
        return res.status(404).send('No se encontraron servicios');
      }
      res.json(CardM12Data);
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
  try {
    const data = await M1.findOne(); // Asegúrate de que `findOne` obtenga los datos correctos
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al obtener datos');
  }
});

app.get('/api/m2', async (req, res) => {
  try {
    const data = await M2.findOne(); // Asegúrate de que `findOne` obtenga los datos correctos
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al obtener datos');
  }
});

app.get('/api/m3', async (req, res) => {
  try {
    const data = await M3.findOne(); // Asegúrate de que `findOne` obtenga los datos correctos
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al obtener datos');
  }
});

app.get('/api/m4', async (req, res) => {
  try {
    const data = await M4.findOne(); // Asegúrate de que `findOne` obtenga los datos correctos
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al obtener datos');
  }
});

app.get('/api/m5', async (req, res) => {
  try {
    const data = await M5.findOne(); // Asegúrate de que `findOne` obtenga los datos correctos
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al obtener datos');
  }
});

app.get('/api/m6', async (req, res) => {
  try {
    const data = await M6.findOne(); // Asegúrate de que `findOne` obtenga los datos correctos
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al obtener datos');
  }
});

app.get('/api/m7', async (req, res) => {
  try {
    const data = await M7.findOne(); // Asegúrate de que `findOne` obtenga los datos correctos
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al obtener datos');
  }
});

app.get('/api/m8', async (req, res) => {
  try {
    const data = await M8.findOne(); // Asegúrate de que `findOne` obtenga los datos correctos
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al obtener datos');
  }
});

app.get('/api/m9', async (req, res) => {
  try {
    const data = await M9.findOne(); // Asegúrate de que `findOne` obtenga los datos correctos
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al obtener datos');
  }
});

app.get('/api/m10', async (req, res) => {
  try {
    const data = await M10.findOne(); // Asegúrate de que `findOne` obtenga los datos correctos
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al obtener datos');
  }
});

app.get('/api/m11', async (req, res) => {
  try {
    const data = await M11.findOne(); // Asegúrate de que `findOne` obtenga los datos correctos
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al obtener datos');
  }
});

app.get('/api/m12', async (req, res) => {
  try {
    const data = await M12.findOne(); // Asegúrate de que `findOne` obtenga los datos correctos
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al obtener datos');
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
