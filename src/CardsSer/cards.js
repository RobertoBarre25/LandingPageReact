import React from 'react';
import './cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const cardsData = [
    {
        imgSrc: 'https://img.freepik.com/free-vector/gradient-technology-api-illustration_23-2149358045.jpg?t=st=1717604505~exp=1717608105~hmac=65fbe0080458f595e4c0501843fb905d1479781875ff763d3b6fec22faa88238&w=740',
        title: 'Antivirus en la nube',
        description: '¿Quieres proteger aplicaciones, infraestructura y datos en entornos de nube?',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://img.freepik.com/free-vector/personal-digital-security_74855-4560.jpg?t=st=1717604425~exp=1717608025~hmac=0534d75d4466a9d2f3e3f10fba426ef75655dee3177556650b9c623a61cd8259&w=1060',
        title: 'Gestion de vulnerabilidades',
        description: 'Protege tu negocio identificando y mitigando amenazas antes de que se conviertan en problemas',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://img.freepik.com/free-vector/data-management-collective-database-tower-people-share-commonplace-centralized-mainframe-widespread-info-stored-files-custom-regulation-isolated-concept-metaphor-illustration_335657-1194.jpg?t=st=1717604621~exp=1717608221~hmac=5d0085d2c15588bfb205ede65c7e40217a613aecf4e9cfe58392133f00ef3e81&w=740',
        title: ' Sandboxing en la nube',
        description: 'Aísla y analiza amenazas de forma segura para mantener tu entorno protegido',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://img.freepik.com/free-vector/phishing-account-concept_23-2148534567.jpg?t=st=1717604789~exp=1717608389~hmac=ddaa03ce140255316e113442a096ceac800b63741c8782dc552f28353e89940a&w=740',
        title: 'Proteccion de correo electronico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://img.freepik.com/free-vector/flat-illustration-safer-internet-day_23-2151121147.jpg?t=st=1717604997~exp=1717608597~hmac=304c0528e43a6991913898245b9c496ad0b9675a62f32217ceeb5cadd4b3dceb&w=740',
        title: 'WAF',
        description: 'Proteja sus aplicaciones web de exploits y ataques con nuestro servicio administrado de Web Application Firewall en la nube.',
        buttonText: 'Obtener Informacion'
    }
    ,
    {
        imgSrc: 'https://img.freepik.com/free-vector/flat-background-safer-internet-day_23-2151121180.jpg?t=st=1717604866~exp=1717608466~hmac=2ed8f16ff359c216c98b23c175802f268ae78f1d177b62251b643aa689e9b4f6&w=1060',
        title: 'AntiDDoS',
        description: 'Absorba ataques DDoS de gran escala con nuestro servicio en la nube de prevención y mitigación de denegación de servicio distribuido.',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://img.freepik.com/free-vector/businessman-cloud_23-2147513519.jpg?t=st=1717605234~exp=1717608834~hmac=797a24a135cffe36c2faf135cd3fb4b45e3c066f3892e2809c926289589e9117&w=740',
        title: 'IAMaaS',
        description: 'Gestione el ciclo de vida digital de usuarios con nuestro servicio administrado de gestión de identidades y accesos basado en la nube.',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://img.freepik.com/free-vector/steal-data-cyber-attack-concept_23-2148534942.jpg?t=st=1717607239~exp=1717610839~hmac=37d13593fe4a49b17c577a2a478720dabe75baa5b3645f75193c3ad7c5a24276&w=740',
        title: 'Ciberseguro',
        description: 'Transfiera el riesgo financiero de un ciberataque con nuestras pólizas asequibles de ciberseguros diseñadas para pymes.',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://img.freepik.com/free-vector/isometric-iso-certification-concept_23-2148688048.jpg?t=st=1717607400~exp=1717611000~hmac=5529fd0c4590cb392519ce95185d3141f791e22bd13c05f4b8535f66313e2649&w=1060',
        title: 'Cumplimiento Plus',
        description: 'Demuestre el cumplimiento de estándares como ISO 27001, HIPAA, PCI DSS y más a través de nuestra plataforma integral para evaluación y gestión remota de compliance.',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://img.freepik.com/free-vector/thief-stealing-information-from-de-devices_1172-32.jpg?t=st=1717607608~exp=1717611208~hmac=bcdf660600837143d810d80dd95d38a67e7363f3f37f2a002a14b93531ead1d6&w=740',
        title: 'BackupCloud',
        description: 'Proteja sus datos críticos automatizadamente con copias de seguridad en la nube administradas, incrementales y encriptadas. Recupere su información ante desastres.',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://img.freepik.com/free-vector/image-upload-concept-landing-page_23-2148309692.jpg?t=st=1717608334~exp=1717611934~hmac=2a97fb4373cbdb0a3b80047619b07c62c7d05d79021411324ff44cc74bd5a1ab&w=1060',
        title: 'EPPaaS',
        description: 'Asegure todos sus dispositivos de endpoints contra amenazas con nuestro servicio administrado de protección de endpoints en la nube.',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://img.freepik.com/free-vector/virtual-machines-operating-system-data-storage_335657-3133.jpg?t=st=1717608451~exp=1717612051~hmac=779e90c49cb4d4567be5841cfff67228c944f5c84fb3096eb0ebc6bc854f7bea&w=1060',
        title: 'FWaaS',
        description: 'Proteja su red y aplicaciones con firewalls empresariales completamente administrados a través de nuestro servicio en la nube.',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://img.freepik.com/free-vector/characters-people-with-data-storage-icons-illustration_53876-59846.jpg?t=st=1717608559~exp=1717612159~hmac=71a31a3c879a4d1f401b158f8591c18c809f6abcd2e634b23e8be5a38adc2ace&w=996',
        title: 'DaaS',
        description: 'Administre usuarios y grupos de forma centralizada en la nube mediante nuestro servicio de directorio activo administrado.',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://img.freepik.com/free-vector/progressive-web-app-abstract-concept-illustration_335657-2193.jpg?t=st=1717608684~exp=1717612284~hmac=8ae682880293bd385c45ffd33e1d72baf0ee1151e2cf69e4030235b18549214e&w=740',
        title: 'CASB',
        description: 'Visibilice, proteja y gobierne el uso de aplicaciones SaaS en su empresa mediante nuestro servicio administrado de CASB.',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://img.freepik.com/free-vector/people-face-scan-devices_24908-56393.jpg?t=st=1717609065~exp=1717612665~hmac=4a0ad9a6caf74f5c7c28ca8e0c6dffccda6ccd9c866d4e03bf451d19b6633a1a&w=826',
        title: 'MSPPlus',
        description: 'Deje la ciberseguridad de su organización en manos de expertos a través de nuestro servicio integral administrado de monitoreo, detección, respuesta y consultoría.',
        buttonText: 'Obtener Informacion'
    },
    
  

];
const Cards = () => {
    const navigate = useNavigate(); // Utiliza useNavigate para la navegación
  
    return (
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div key={index} className="card">
            <img src={card.imgSrc} alt={card.title} className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.description}</p>
              <button className="btn btn-primary" onClick={() => navigate('/info')}>{card.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Cards;