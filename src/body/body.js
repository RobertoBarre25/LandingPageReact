import React from 'react';
import './body.css';
import HorizontalCard from '../CardShadow/HorizontalCard';
import Carousel from '../Carousel/carousel';
import Cards from '../CardsSer/cards'; // Ensure the import is correct
import { animateScroll as scroll } from 'react-scroll';
import ImageSection from '../ImageSection/ImgSection';
import { Link } from 'react-router-dom';

const images = [
    {
        src: 'https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: (
            <div className="carouselText">
                <h1 className="primerTitulo">
                    Antivirus<span className="cloudText">Cloud</span>
                </h1>
                <h2 className="textoSecundario">
                 ! <span className="cloudTextTwo">Proteccion </span> Empresarial de <span className="cloudTextTwo">Ultima </span> Generacion¡
                    </h2>

                <h3 className="textoTerceario">¡Protege tu empresa como nunca antes! Nuestro AntivirusCloud 
                    ofrece defensa en tiempo real contra malware, impulsada por la tecnología más avanzada en la nube.
                     No permitas que las amenazas cibernéticas pongan en riesgo tu negocio. 
                    ¡Con AntivirusCloud, mantén tus datos seguros y enfócate en lo que mejor sabes hacer!</h3>

                    <Link to="/contact">
                    <button className="bg-blue-500 border-2 border-white text-white border-none text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-red-500">
                        Contrata ya!
                    </button>
                    </Link>
                    <button className="border-2 border-white text-white text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-white hover:bg-opacity-10" onClick={scroll.scrollToBottom}>
                        Conoce más!
                    </button>
            </div>
        )
    },
    {
        src: 'https://news-assets.onvista.com/9/21/ecc00f57c050caa04fb8e379c175894b2b979748ff531742c1213625c05bc610.jpg',
        text: (
            <div className="carouselText">
                <h1 className="primerTitulo">
                    Cyber<span className="cloudText">Secure</span>
                </h1>
                <h2 className="textoSecundario">¡La <span className="cloudTextTwo">Mejor Defensa </span> Contra Amenazas Cibernéticas!</h2>
                <h3 className="textoTerceario">¡Protege tu empresa al máximo! Con CyberSecure, obtén protección integral
                     contra todas las amenazas cibernéticas. Nuestra solución ofrece una defensa proactiva que garantiza la seguridad
                      de tu red empresarial. No dejes que los ciberataques amenacen tu éxito.
                     ¡Confía en CyberSecure y mantén tu negocio a salvo!.
                </h3>
                <Link to="/contact">
                    <button className="bg-blue-500  border-2 border-white text-white border-none text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-red-500">
                        Contrata ya!
                    </button>
                </Link>
                <button className="border-2 border-white text-white text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-white hover:bg-opacity-10" onClick={scroll.scrollToBottom}>
                    Conoce más!
                </button>
            </div>
        )
    },
    {
        src: 'https://img.jakpost.net/c/2022/04/01/2022_04_01_124204_1648793484._large.jpg',
        text: (
            <div className="carouselText">
                <h1 className="primerTitulo">
                    Cloud<span className="cloudText">Guard</span>
                </h1>
                <h2 className="textoSecundario">¡Seguridad y <span className="cloudTextTwo">Eficiencia </span> en la nube!</h2>
                <h3 className="textoTerceario">¡Protege y optimiza tus datos como nunca antes! Con CloudGuard,
                     disfruta de monitoreo continuo y protección avanzada para todos tus datos en la nube. 
                     No dejes que las amenazas cibernéticas te tomen por sorpresa. 
                    ¡Confía en CloudGuard y mantén tu información segura y eficiente en todo momento!

                </h3>
                <Link to="/contact">
                    <button className="bg-blue-500  border-2 border-white text-white border-none text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-red-500">
                        Contrata ya!
                    </button>
                </Link>
                <button className="border-2 border-white text-white text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-white hover:bg-opacity-10" onClick={scroll.scrollToBottom}>
                    Conoce más!
                </button>
            </div>
        )
    },
];

const Body = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="relative w-full">
                <Carousel images={images} />
            </div>
            <HorizontalCard
                imageSrc="https://fundacioncarlosslim.org/wp-content/uploads/2016/11/redes-de-datos.jpg"
                title="Mantente Seguro en todo momento"
                description="Diseñado para proteger tu comunicación con soluciones avanzadas de seguridad de correo electrónico, filtrado inteligente de amenazas y defensa de primer nivel. Somos tecnología de vanguardia para un futuro seguro."
            />
            <Cards />
            <ImageSection />
        </div>
    );
};

export default Body;
