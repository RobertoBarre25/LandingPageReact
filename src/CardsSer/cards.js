import React from 'react';
import './cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const cardsData = [
    {
        imgSrc: 'https://i.pinimg.com/564x/52/01/a3/5201a341a82883d4880ceab7723516d1.jpg',
        title: 'Antivirus en la nube',
        description: '¿Quieres proteger aplicaciones, infraestructura y datos en entornos de nube?',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/52/01/a3/5201a341a82883d4880ceab7723516d1.jpg',
        title: 'Gestion de vulnerabilidades',
        description: 'Protege tu negocio identificando y mitigando amenazas antes de que se conviertan en problemas',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/18/92/77/189277a82bbaae87d3c69182dc905248.jpg',
        title: ' Sandboxing en la nube',
        description: 'Aísla y analiza amenazas de forma segura para mantener tu entorno protegido',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'Proteccion de correo electronico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'WAF',
        description: 'Proteja sus aplicaciones web de exploits y ataques con nuestro servicio administrado de Web Application Firewall en la nube.',
        buttonText: 'Obtener Informacion'
    }
    ,
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'AntiDDoS',
        description: 'Absorba ataques DDoS de gran escala con nuestro servicio en la nube de prevención y mitigación de denegación de servicio distribuido.',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'IAMaaS',
        description: 'Gestione el ciclo de vida digital de usuarios con nuestro servicio administrado de gestión de identidades y accesos basado en la nube.',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'Ciberseguro',
        description: 'Transfiera el riesgo financiero de un ciberataque con nuestras pólizas asequibles de ciberseguros diseñadas para pymes.',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'Cumplimiento Plus',
        description: 'Demuestre el cumplimiento de estándares como ISO 27001, HIPAA, PCI DSS y más a través de nuestra plataforma integral para evaluación y gestión remota de compliance.',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'BackupCloud',
        description: 'Proteja sus datos críticos automatizadamente con copias de seguridad en la nube administradas, incrementales y encriptadas. Recupere su información ante desastres.',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'EPPaaS',
        description: 'Asegure todos sus dispositivos de endpoints contra amenazas con nuestro servicio administrado de protección de endpoints en la nube.',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'FWaaS',
        description: 'Proteja su red y aplicaciones con firewalls empresariales completamente administrados a través de nuestro servicio en la nube.',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'DaaS',
        description: 'Administre usuarios y grupos de forma centralizada en la nube mediante nuestro servicio de directorio activo administrado.',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'CASB',
        description: 'Visibilice, proteja y gobierne el uso de aplicaciones SaaS en su empresa mediante nuestro servicio administrado de CASB.',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'MSPPlus',
        description: 'Deje la ciberseguridad de su organización en manos de expertos a través de nuestro servicio integral administrado de monitoreo, detección, respuesta y consultoría.',
        buttonText: 'Obtener Informacion'
    },
    
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'Proteccion de correo electronico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Informacion'
    }

];const Cards = () => {
    return (
        <div className="container my-4">
            <div className="row">
                {cardsData.map((card, index) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                        <div className="custom-card card h-100"> {/* Se añade la clase 'custom-card' */}
                            <img src={card.imgSrc} alt={card.title} className="card-img-top" />
                            <div className="card-body text-center">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.description}</p>
                                <button className="btn btn-primary">{card.buttonText}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;