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
  sectionCards: [
    {
      section: { type: String, required: true },
      img: { type: String, required: true },
      description: { type: String, required: true },
      buttonText: { type: String, required: true },
      buttonValue: { type: String, required: true }
    }
  ]}, { collection: 'body' });

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

const carouselSchema = new mongoose.Schema({
  sectionCarousel: [
    {
      title: { type: String, required: true },
      subtitle: { type: String, required: true },
      description: { type: String, required: true },
      imageUrl: { type: String, required: true },
      buttonText1: { type: String, required: true },
      buttonAction1: { type: String },
      buttonText2: { type: String },
      buttonAction2: { type: String },
      subSection: { type: String, required: true }
    }
  ]
}, { collection: 'body' });

const Carousel = mongoose.model('Carousel', carouselSchema);


// Definir esquema y modelo de Mongoose para la colección 'm1'
const m1Schema = new mongoose.Schema({
   sections: [
    {
        sectionTag: String,
        title: String,
        subtitle: String,
        description: String,
        carouselImageUrl: String,
        buttonText1: String,
        buttonAction1: String,
        buttonText2: String,
        subSection: String
    }
],
  cards: [
    {
      imageUrl: { type: String, required: true },
      text: { type: String, required: true },
      buttonText: { type: String, required: true },
      sectionTag: String
    }
  ],
  tag: String,
}, { collection: 'm1' });

const M1 = mongoose.model('M1', m1Schema);

const m2Schema = new mongoose.Schema({
  sections: [
    {
      sectionTag: String,
      title: String,
      subtitle: String,
      description: String,
      carouselImageUrl: String,
      buttonText1: String,
      buttonAction1: String,
      buttonText2: String,
      subSection: String
    }
  ],
  cards: [
    {
      imageUrl: { type: String, required: true },
      text: { type: String, required: true },
      buttonText: { type: String, required: true },
      sectionTag: String
    }
  ],
  tag: String,
}, { collection: 'm2' });

const M2 = mongoose.model('M2', m2Schema);


const m3Schema = new mongoose.Schema({
  sections: [
   {
       sectionTag: String,
       title: String,
       subtitle: String,
       description: String,
       carouselImageUrl: String,
       buttonText1: String,
       buttonAction1: String,
       buttonText2: String,
       subSection: String
   }
],
 cards: [
   {
     imageUrl: { type: String, required: true },
     text: { type: String, required: true },
     buttonText: { type: String, required: true },
     sectionTag: String
   }
 ],
 tag: String,
}, { collection: 'm3' });

const M3 = mongoose.model('M3', m3Schema);

const m4Schema = new mongoose.Schema({
  sections: [
   {
       sectionTag: String,
       title: String,
       subtitle: String,
       description: String,
       carouselImageUrl: String,
       buttonText1: String,
       buttonAction1: String,
       buttonText2: String,
       subSection: String
   }
],
 cards: [
   {
     imageUrl: { type: String, required: true },
     text: { type: String, required: true },
     buttonText: { type: String, required: true },
     sectionTag: String
   }
 ],
 tag: String,
}, { collection: 'm4' });

const M4 = mongoose.model('M4', m4Schema);

const m5Schema = new mongoose.Schema({
  sections: [
   {
       sectionTag: String,
       title: String,
       subtitle: String,
       description: String,
       carouselImageUrl: String,
       buttonText1: String,
       buttonAction1: String,
       buttonText2: String,
       subSection: String
   }
],
 cards: [
   {
     imageUrl: { type: String, required: true },
     text: { type: String, required: true },
     buttonText: { type: String, required: true },
     sectionTag: String
   }
 ],
 tag: String,
}, { collection: 'm5' });

const M5 = mongoose.model('M5', m5Schema);

const m6Schema = new mongoose.Schema({
  sections: [
   {
       sectionTag: String,
       title: String,
       subtitle: String,
       description: String,
       carouselImageUrl: String,
       buttonText1: String,
       buttonAction1: String,
       buttonText2: String,
       subSection: String
   }
],
 cards: [
   {
     imageUrl: { type: String, required: true },
     text: { type: String, required: true },
     buttonText: { type: String, required: true },
     sectionTag: String
   }
 ],
 tag: String,
}, { collection: 'm6' });

const M6 = mongoose.model('M6', m6Schema);

const m7Schema = new mongoose.Schema({
  sections: [
   {
       sectionTag: String,
       title: String,
       subtitle: String,
       description: String,
       carouselImageUrl: String,
       buttonText1: String,
       buttonAction1: String,
       buttonText2: String,
       subSection: String
   }
],
 cards: [
   {
     imageUrl: { type: String, required: true },
     text: { type: String, required: true },
     buttonText: { type: String, required: true },
     sectionTag: String
   }
 ],
 tag: String,
}, { collection: 'm7' });

const M7 = mongoose.model('M7', m7Schema);

const m8Schema = new mongoose.Schema({
  sections: [
   {
       sectionTag: String,
       title: String,
       subtitle: String,
       description: String,
       carouselImageUrl: String,
       buttonText1: String,
       buttonAction1: String,
       buttonText2: String,
       subSection: String
   }
],
 cards: [
   {
     imageUrl: { type: String, required: true },
     text: { type: String, required: true },
     buttonText: { type: String, required: true },
     sectionTag: String
   }
 ],
 tag: String,
}, { collection: 'm8' });

const M8 = mongoose.model('M8', m8Schema);

const m9Schema = new mongoose.Schema({
  sections: [
   {
       sectionTag: String,
       title: String,
       subtitle: String,
       description: String,
       carouselImageUrl: String,
       buttonText1: String,
       buttonAction1: String,
       buttonText2: String,
       subSection: String
   }
],
 cards: [
   {
     imageUrl: { type: String, required: true },
     text: { type: String, required: true },
     buttonText: { type: String, required: true },
     sectionTag: String
   }
 ],
 tag: String,
}, { collection: 'm9' });

const M9 = mongoose.model('M9', m9Schema);

const m10Schema = new mongoose.Schema({
  sections: [
   {
       sectionTag: String,
       title: String,
       subtitle: String,
       description: String,
       carouselImageUrl: String,
       buttonText1: String,
       buttonAction1: String,
       buttonText2: String,
       subSection: String
   }
],
 cards: [
   {
     imageUrl: { type: String, required: true },
     text: { type: String, required: true },
     buttonText: { type: String, required: true },
     sectionTag: String
   }
 ],
 tag: String,
}, { collection: 'm10' });

const M10 = mongoose.model('M10', m10Schema);

const m11Schema = new mongoose.Schema({
  sections: [
   {
       sectionTag: String,
       title: String,
       subtitle: String,
       description: String,
       carouselImageUrl: String,
       buttonText1: String,
       buttonAction1: String,
       buttonText2: String,
       subSection: String
   }
],
 cards: [
   {
     imageUrl: { type: String, required: true },
     text: { type: String, required: true },
     buttonText: { type: String, required: true },
     sectionTag: String
   }
 ],
 tag: String,
}, { collection: 'm11' });

const M11 = mongoose.model('M11', m11Schema);

const m12Schema = new mongoose.Schema({
  sections: [
   {
       sectionTag: String,
       title: String,
       subtitle: String,
       description: String,
       carouselImageUrl: String,
       buttonText1: String,
       buttonAction1: String,
       buttonText2: String,
       subSection: String
   }
],
 cards: [
   {
     imageUrl: { type: String, required: true },
     text: { type: String, required: true },
     buttonText: { type: String, required: true },
     sectionTag: String
   }
 ],
 tag: String,
}, { collection: 'm12' });

const M12 = mongoose.model('M12', m12Schema);


// Endpoint para obtener datos de los CardM1
const serviceSchema = new mongoose.Schema({
  sections: [
      {
        imgText: String,
        buttonServText: String
      }
  ]
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
  tag: String,
  services: [
    {
      tag: String,
      cardM1Text: String,
      imgCardM1: String
    }
  ],
  principalText: [
    {
      tag: String,
      section: String,
      imgText: String,
      buttonServText: String
    }
  ]
}, { collection: 'services' });

const cardM1 = mongoose.model('cardM1', CardM1Schema);

app.get('/api/cardM1', async (req, res) => {
  try {
      const data = await cardM1.findOne(); 
      console.log('Datos obtenidos:', data); // Log de datos obtenidos
      res.json(data);
  } catch (error) {
      console.error('Error al obtener datos:', error); // Log de errores
      res.status(500).send('Error al obtener datos');
  }
});

app.put('/api/cardM1/update-card', async (req, res) => {
  const { tag, text, imageUrl } = req.body;

  if (!tag || !text || !imageUrl) {
    return res.status(400).json({ message: 'Faltan datos para actualizar la tarjeta' });
  }

  try {
    // Encuentra el documento
    const document = await cardM1.findOne();

    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Encuentra el índice del servicio que debe actualizarse
    const index = document.services.findIndex(service => service.tag === tag);

    if (index === -1) {
      return res.status(404).json({ message: 'Tarjeta no encontrada' });
    }

    // Construye el nombre del campo basado en el tag
    const textField = `cardM${index + 1}Text`;
    const imageField = `imgCardM${index + 1}`;

    // Actualiza los datos
    document.services[index][textField] = text;
    document.services[index][imageField] = imageUrl;

    // Guarda el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar la tarjeta:', error);
    res.status(500).json({ message: 'Error al actualizar la tarjeta', error: error.message });
  }
});


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

app.get('/api/m1', async (req, res) => {
  try {
    const data = await M1.findOne(); // Asegúrate de que `findOne` obtenga los datos correctos
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al obtener datos');
  }
});


app.put('/api/m1/update-by-tag', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M1.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.sections.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Secciones del documento:', document.sections);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.sections[sectionIndex] = { ...document.sections[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
  }
});

app.put('/api/m1/update-by-tag-cards', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M1.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.cards.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Secciones del documento:', document.sections);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.cards[sectionIndex] = { ...document.cards[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
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


app.put('/api/m2/update-by-tag', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M2.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.sections.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Secciones del documento:', document.sections);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.sections[sectionIndex] = { ...document.sections[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
  }
});

app.put('/api/m2/update-by-tag-cards', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M2.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.cards.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Tarjetas del documento:', document.cards);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.cards[sectionIndex] = { ...document.cards[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
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

app.put('/api/m3/update-by-tag', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M3.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.sections.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Secciones del documento:', document.sections);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.sections[sectionIndex] = { ...document.sections[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
  }
});

app.put('/api/m3/update-by-tag-cards', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M3.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.cards.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Tarjetas del documento:', document.cards);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.cards[sectionIndex] = { ...document.cards[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
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

app.put('/api/m4/update-by-tag', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M4.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.sections.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Secciones del documento:', document.sections);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.sections[sectionIndex] = { ...document.sections[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
  }
});

app.put('/api/m4/update-by-tag-cards', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M4.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.cards.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Tarjetas del documento:', document.cards);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.cards[sectionIndex] = { ...document.cards[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
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

app.put('/api/m5/update-by-tag', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M5.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.sections.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Secciones del documento:', document.sections);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.sections[sectionIndex] = { ...document.sections[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
  }
});

app.put('/api/m5/update-by-tag-cards', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M5.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.cards.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Tarjetas del documento:', document.cards);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.cards[sectionIndex] = { ...document.cards[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
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

app.put('/api/m6/update-by-tag', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M6.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.sections.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Secciones del documento:', document.sections);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.sections[sectionIndex] = { ...document.sections[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
  }
});

app.put('/api/m6/update-by-tag-cards', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M6.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.cards.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Tarjetas del documento:', document.cards);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.cards[sectionIndex] = { ...document.cards[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
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

app.put('/api/m7/update-by-tag', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M7.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.sections.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Secciones del documento:', document.sections);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.sections[sectionIndex] = { ...document.sections[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
  }
});

app.put('/api/m7/update-by-tag-cards', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M7.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.cards.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Tarjetas del documento:', document.cards);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.cards[sectionIndex] = { ...document.cards[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
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

app.put('/api/m8/update-by-tag', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M8.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.sections.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Secciones del documento:', document.sections);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.sections[sectionIndex] = { ...document.sections[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
  }
});

app.put('/api/m8/update-by-tag-cards', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M8.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.cards.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Tarjetas del documento:', document.cards);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.cards[sectionIndex] = { ...document.cards[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
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

app.put('/api/m9/update-by-tag', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M9.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.sections.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Secciones del documento:', document.sections);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.sections[sectionIndex] = { ...document.sections[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
  }
});

app.put('/api/m9/update-by-tag-cards', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M9.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.cards.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Tarjetas del documento:', document.cards);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.cards[sectionIndex] = { ...document.cards[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
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

app.put('/api/m10/update-by-tag', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M10.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.sections.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Secciones del documento:', document.sections);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.sections[sectionIndex] = { ...document.sections[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
  }
});

app.put('/api/m10/update-by-tag-cards', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M10.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.cards.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Tarjetas del documento:', document.cards);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.cards[sectionIndex] = { ...document.cards[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
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


app.put('/api/m11/update-by-tag', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M11.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.sections.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Secciones del documento:', document.sections);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.sections[sectionIndex] = { ...document.sections[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
  }
});

app.put('/api/m11/update-by-tag-cards', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M11.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.cards.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Tarjetas del documento:', document.cards);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.cards[sectionIndex] = { ...document.cards[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
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

app.put('/api/m12/update-by-tag', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M12.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.sections.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Secciones del documento:', document.sections);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.sections[sectionIndex] = { ...document.sections[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
  }
});

app.put('/api/m12/update-by-tag-cards', async (req, res) => {
  const { tag, sectionTag, ...updateData } = req.body;

  console.log('Valores recibidos:', { tag, sectionTag, updateData });

  // Validar la presencia de tag y sectionTag
  if (!tag || !sectionTag) {
    return res.status(400).json({ message: 'Tag principal y tag de la sección son requeridos' });
  }

  try {
    // Buscar el documento con el tag principal
    const document = await M12.findOne({ tag: tag });

    console.log('Documento encontrado:', document);

    // Verificar si el documento existe
    if (!document) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    // Buscar el índice de la sección a actualizar
    const sectionIndex = document.cards.findIndex(sec => sec.sectionTag === sectionTag);

    console.log('Índice de sección encontrado:', sectionIndex);
    console.log('Tarjetas del documento:', document.cards);

    // Verificar si la sección existe
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    // Actualizar la sección
    document.cards[sectionIndex] = { ...document.cards[sectionIndex], ...updateData, sectionTag };
    
    // Guardar el documento
    await document.save();

    res.status(200).json({ message: 'Actualización exitosa', document });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ message: 'Error al actualizar', error });
  }
});







app.get('/api/carousel', async (req, res) => {
  console.log('Received request for /api/carousel');
  try {
    // Encuentra documentos donde el campo `sectionCarousel` existe
    const carouselData = await Carousel.find({ sectionCarousel: { $exists: true } });

    // Verificar si se encontró algún documento
    if (!carouselData || carouselData.length === 0) {
      return res.status(404).send('No se encontraron datos del carrusel');
    }

    // Devolver los datos de `sectionCarousel` del primer documento encontrado
    res.json(carouselData[0].sectionCarousel);
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ error: err.message });
  }
});


app.get('/api/ImageSection', async(req, res) => {
  console.log('Recibed request for api/body');
    try{
      const  ImageSectionData = await ImageSecTitle.findOne({tag: 'ImageSection'});
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

    const imageSectionData = await ImageSec.find({ sectionCards: { $exists: true} });
    
    if (imageSectionData.length === 0) {
      return res.status(404).send('No se encontraron datos para la sección especificada');
    }

    res.json(imageSectionData[0].sectionCards);
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
