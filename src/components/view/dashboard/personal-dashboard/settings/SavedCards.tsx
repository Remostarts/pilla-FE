'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// difining the stucture of the card object
interface Card {
  id: string;
  bank: string;
  number: string;
  cardType: 'visa' | 'mastercard';
}

const VisaLogo: React.FC = () => (
  <svg
    className="mr-3 h-6 w-10"
    viewBox="0 0 780 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M489.823 143.111C442.988 143.111 401.134 167.393 401.134 212.256C401.134 263.706 475.364 267.259 475.364 293.106C475.364 303.989 462.895 313.731 441.6 313.731C411.377 313.731 388.789 300.119 388.789 300.119L379.123 345.391C379.123 345.391 405.145 356.889 439.692 356.889C490.898 356.889 531.19 331.415 531.19 285.784C531.19 231.419 456.652 227.971 456.652 203.981C456.652 195.455 466.887 186.114 488.122 186.114C512.081 186.114 531.628 196.014 531.628 196.014L541.087 152.289C541.087 152.289 519.818 143.111 489.823 143.111ZM61.3294 146.411L60.1953 153.011C60.1953 153.011 79.8988 156.618 97.645 163.814C120.495 172.064 122.122 176.868 125.971 191.786L167.905 353.486H224.118L310.719 146.411H254.635L198.989 287.202L176.282 167.861C174.199 154.203 163.651 146.411 150.74 146.411H61.3294ZM333.271 146.411L289.275 353.486H342.756L386.598 146.411H333.271ZM631.554 146.411C618.658 146.411 611.825 153.318 606.811 165.386L528.458 353.486H584.542L595.393 322.136H663.72L670.318 353.486H719.805L676.633 146.411H631.554ZM638.848 202.356L655.473 280.061H610.935L638.848 202.356Z"
      fill="#1434CB"
    />
  </svg>
);

const MastercardLogo: React.FC = () => (
  <svg
    className="mr-3 h-6 w-10"
    viewBox="0 0 780 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M465.738 113.525H313.812V386.475H465.738V113.525Z" fill="#FF5A00" />
    <path
      d="M323.926 250C323.926 194.545 349.996 145.326 390 113.525C360.559 90.3769 323.42 76.3867 282.91 76.3867C186.945 76.3867 109.297 154.035 109.297 250C109.297 345.965 186.945 423.614 282.91 423.614C323.42 423.614 360.559 409.623 390 386.475C349.94 355.123 323.926 305.455 323.926 250Z"
      fill="#EB001B"
    />
    <path
      d="M670.711 250C670.711 345.965 593.062 423.614 497.098 423.614C456.588 423.614 419.449 409.623 390.008 386.475C430.518 354.618 456.082 305.455 456.082 250C456.082 194.545 430.012 145.326 390.008 113.525C419.393 90.3769 456.532 76.3867 497.041 76.3867C593.062 76.3867 670.711 154.541 670.711 250Z"
      fill="#F79E1B"
    />
  </svg>
);

const SavedCards: React.FC = () => {
  // defining the state of the cards
  const [cards, setCards] = useState<Card[]>([
    { id: '1', bank: 'GT Bank', number: '418745******5465', cardType: 'mastercard' },
    { id: '2', bank: 'Access Bank', number: '418745******5465', cardType: 'visa' },
    { id: '3', bank: 'Keystone Bank', number: '418745******5465', cardType: 'mastercard' },
  ]);

  // function to add a new card
  const handleAddCard = () => {
    console.log('Add card clicked');
    // Implement add card logic here
  };

  // function to remove a card
  const handleRemoveCard = (id: string) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="mx-auto size-full rounded-xl bg-white  p-6">
      <h2 className="mb-10 text-xl font-semibold">My Cards</h2>

      {/* button to add a new card */}
      <button
        onClick={handleAddCard}
        className="mb-10 flex w-full items-center justify-center rounded-xl border border-gray-300 py-5 text-center font-bold transition duration-150 ease-in-out hover:bg-gray-50"
      >
        <span className="mr-2 text-xl text-orange-500">
          <Image
            src="/assets/personal-dashboard/home/add-money-icon.svg"
            alt="add-icon"
            width={24}
            height={24}
          />
        </span>{' '}
        Add Card
      </button>

      {/* cards list */}
      <div className="space-y-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex items-center justify-between rounded-xl border border-gray-300 px-6 py-4 "
          >
            <div className="flex items-center">
              {card.cardType === 'visa' ? <VisaLogo /> : <MastercardLogo />}
              <div>
                <p className="font-medium">{card.bank}</p>
                <p className="text-sm text-gray-600">{card.number}</p>
              </div>
            </div>
            <button
              onClick={() => handleRemoveCard(card.id)}
              className="text-sm font-bold text-primary-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedCards;
