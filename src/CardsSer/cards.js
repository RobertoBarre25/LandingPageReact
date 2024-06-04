import React from 'react';
import './cards.css';

const cardsData = [
    {
        imgSrc: 'https://i.pinimg.com/564x/52/01/a3/5201a341a82883d4880ceab7723516d1.jpg',
        title: 'Card 1',
        description: 'This is the description for card 1',
        buttonText: 'Learn More'
    },
    {
        imgSrc: 'https://i.pinimg.com/736x/e5/02/c7/e502c75e893f17a8f02c955ad236da44.jpg',
        title: 'Card 2',
        description: 'This is the description for card 2',
        buttonText: 'Learn More'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/18/92/77/189277a82bbaae87d3c69182dc905248.jpg',
        title: 'Card 3',
        description: 'This is the description for card 3',
        buttonText: 'Learn More'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'Card 4',
        description: 'This is the description for card 4',
        buttonText: 'Learn More'
    }
];

const Cards = () => {
    return (
        <div className="cardsSer-container">
            {cardsData.map((card, index) => (
                <div className="cardsSer-card" key={index}>
                    <img src={card.imgSrc} alt={card.title} className="cardsSer-card-img" />
                    <div className="cardsSer-card-content">
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <button>{card.buttonText}</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;
