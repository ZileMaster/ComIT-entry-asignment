import React from 'react';
import Card from './Card';
import './AllCards.css';

const AllCards = () => {
  return (
    <div className="w-screen h-90vh mx-auto">
      <div className="flex justify-center ">
        <div className="flex flex-wrap justify-center" style={{ flexWrap: 'wrap' }}>
          {[...Array(31)].map((_, index) => (
            <div key={index} className="card-container">
              <Card
                title={`Card ${index + 1}`}
                description={`This is card ${index + 1}`}
                imgSrc="https://placeimg.com/640/480/any"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCards;