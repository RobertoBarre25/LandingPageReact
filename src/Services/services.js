import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

const scrollToMiddle = () => {
    const targetPosition = window.innerHeight * 0.95;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
};

const Services = () => {
    const [imgText, setImgText] = useState('');
    const [buttonServText, setButtonServText] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/service')
            .then(response => {
                if (response.data.length > 0) {
                    const { imgTextServ, buttonTextServ } = response.data[0];
                    setImgText(imgTextServ);
                    setButtonServText(buttonTextServ);
                }
            })
            .catch(error => {
                console.error('Error al obtener los datos de servicios:', error);
                setError('Ocurrió un error al obtener los datos de servicios');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const [CardM1Text, setCardM1Text] = useState('');
    const [detailText, setdetailText] = useState('');
    const [img, setimg] = useState('');
    useEffect(() => {
        axios.get('http://localhost:5000/api/cardM1')
            .then(response => {
                console.log('Respuesta de /api/cardM1:', response.data);  // Verifica la estructura
                if (response.data && response.data.length > 0) {
                    const { CardM1Text, detailText, img } = response.data[1];
                    setCardM1Text(CardM1Text);
                    setdetailText(detailText);
                    setimg(img);
                }
            })
            .catch(error => {
                console.error('Error al obtener los datos de servicios CardM1:', error);
                setError('Ocurrió un error al obtener los datos de servicios');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    
    const [CardM2Text, setCardM2Text] = useState('');
    const [imgCardM2, setimgCardM2] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/cardM2')
            .then(response => {
                console.log('Respuesta de /api/cardM2:', response.data);  // Verifica la estructura
                if (response.data && response.data.length > 0) {
                    const { CardM2Text, imgCardM2 } = response.data[2];
                    setCardM2Text(CardM2Text);
                    setimgCardM2(imgCardM2);
                }
            })
            .catch(error => {
                console.error('Error al obtener los datos de servicios CardM1:', error);
                setError('Ocurrió un error al obtener los datos de servicios');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    
    const [CardM3Text, setCardM3Text] = useState('');
    const [imgCardM3, setimgCardM3] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/cardM3')
            .then(response => {
                console.log('Respuesta de /api/cardM3:', response.data);  // Verifica la estructura
                if (response.data && response.data.length > 0) {
                    const { CardM3Text, imgCardM3 } = response.data[3];
                    setCardM3Text(CardM3Text);
                    setimgCardM3(imgCardM3);
                }
            })
            .catch(error => {
                console.error('Error al obtener los datos de servicios CardM3:', error);
                setError('Ocurrió un error al obtener los datos de servicios');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const [CardM4Text, setCardM4Text] = useState('');
    const [imgCardM4, setimgCardM4] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/cardM4')
            .then(response => {
                console.log('Respuesta de /api/cardM4:', response.data);  // Verifica la estructura
                if (response.data && response.data.length > 0) {
                    const { CardM4Text, imgCardM4 } = response.data[4];
                    setCardM4Text(CardM4Text);
                    setimgCardM4(imgCardM4);
                }
            })
            .catch(error => {
                console.error('Error al obtener los datos de servicios CardM3:', error);
                setError('Ocurrió un error al obtener los datos de servicios');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const [CardM5Text, setCardM5Text] = useState('');
    const [imgCardM5, setimgCardM5] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/cardM5')
            .then(response => {
                if (response.data && response.data.length > 0) {
                    const { CardM5Text, imgCardM5 } = response.data[5];
                    setCardM5Text(CardM5Text);
                    setimgCardM5(imgCardM5);
                }
            })
            .catch(error => {
                console.error('Error al obtener los datos de servicios CardM3:', error);
                setError('Ocurrió un error al obtener los datos de servicios');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const [CardM6Text, setCardM6Text] = useState('');
    const [imgCardM6, setimgCardM6] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/cardM6')
            .then(response => {
                if (response.data && response.data.length > 0) {
                    const { CardM6Text, imgCardM6 } = response.data[6];
                    setCardM6Text(CardM6Text);
                    setimgCardM6(imgCardM6);
                }
            })
            .catch(error => {
                console.error('Error al obtener los datos de servicios CardM6:', error);
                setError('Ocurrió un error al obtener los datos de servicios');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const [CardM7Text, setCardM7Text] = useState('');
    const [imgCardM7, setimgCardM7] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/cardM7')
            .then(response => {
                if (response.data && response.data.length > 0) {
                    const { CardM7Text, imgCardM7 } = response.data[7];
                    setCardM7Text(CardM7Text);
                    setimgCardM7(imgCardM7);
                }
            })
            .catch(error => {
                console.error('Error al obtener los datos de servicios CardM7:', error);
                setError('Ocurrió un error al obtener los datos de servicios');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="flex flex-col min-h-screen">
            <div className="relative h-screen">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://www.udima.es/sites/udima.es/files/GettyImages-1407650545.jpg')" }}></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <header className="fixed top-0 left-0 w-full z-5 transition-all duration-800 ease-in-out h-16 bg-transparent">
                    {/* Contenido del header */}
                </header>
                <div className="relative flex items-center justify-center h-full z-3">
                    <div className="text-center text-white p-4">
                        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold">{imgText}</h1>
                        <button className="mt-8 md:mt-16 px-6 py-4 md:px-10 md:py-6 border border-white text-white text-sm sm:text-xl md:text-2xl lg:text-3xl" onClick={scrollToMiddle}>
                            {buttonServText}
                        </button>
                        <div className="mt-4 flex items-center justify-center">
                            <FontAwesomeIcon icon={faAngleDoubleDown} className="text-white text-2xl sm:text-3xl md:text-4xl animate-bounce mt-4 md:mt-20" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative z-5 p-8 flex-grow">
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-center text-gray-700 mb-8 md:mb-16">Servicios</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[

                        { place: CardM1Text, img: img, link: '/M1' },
                        { place: CardM2Text, img: imgCardM2, link: '/M2' },
                        { place: CardM3Text, img: imgCardM3, link: '/M3' },
                        { place: CardM4Text, img: imgCardM4, link: '/M4' },
                        { place: CardM5Text, img: imgCardM5, link: '/M5' },
                        { place: CardM6Text, img: imgCardM6, link: '/M6' },
                        { place: CardM7Text, img: imgCardM7, link: '/M7' },
                        { place: 'Namdu Islands', img: 'https://i.pinimg.com/564x/b1/e0/15/b1e0155a8cc3db972b7cb9cb6ffc79f4.jpg', link: '/M8' },
                        { place: 'Santorini, Greece', img: 'https://i.pinimg.com/564x/cb/df/89/cbdf8978a85635559958afcd832918cf.jpg', link: '/M9' },
                        { place: 'Santorini, Greece',   img: 'https://i.pinimg.com/564x/cb/df/89/cbdf8978a85635559958afcd832918cf.jpg', link: '/M10' },
                        { place: 'Santorini, Greece', img: 'https://i.pinimg.com/564x/cb/df/89/cbdf8978a85635559958afcd832918cf.jpg', link: '/M11' },
                        { place: 'Santorini, Greece', img: 'https://i.pinimg.com/564x/cb/df/89/cbdf8978a85635559958afcd832918cf.jpg', link: '/M12' },
                    ].map((deal, index) => (
                        <div key={index} className="relative border-none group m-4">
                            <div className="relative overflow-hidden h-80 w-full border-none">
                                <div className="absolute inset-0 bg-black opacity-25"></div>
                                <img src={deal.img} alt={deal.place} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 flex justify-center items-center">
                                    <h3 className="text-white text-xl md:text-2xl">{deal.place}</h3>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-5 transition-transform duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0 flex justify-center items-end">
                                    <div className="text-center mb-8">
                                        <a href={deal.link} className="text-white underline hover:no-underline">{detailText}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;

