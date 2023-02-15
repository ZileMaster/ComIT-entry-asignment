import React from 'react';
import Card from './Card';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center gap-4 mb-4">
        <div className="w-1/2">
          <Card
            title="Card 1"
            description="This is card 1"
            imgSrc="https://placeimg.com/640/480/any"
          />
        </div>
        <div className="w-1/2">
          <Card
            title="Card 2"
            description="This is card 2"
            imgSrc="https://placeimg.com/640/480/any"
          />
        </div>
      </div>
      <div className="flex justify-center gap-4 mb-4">
        <div className="w-1/2">
          <Card
            title="Card 3"
            description="This is card 3"
            imgSrc="https://placeimg.com/640/480/any"
          />
        </div>
        <div className="w-1/2">
          <Card
            title="Card 4"
            description="This is card 4"
            imgSrc="https://placeimg.com/640/480/any"
          />
        </div>
      </div>
      <div className="flex justify-center gap-4 mb-4">
        <div className="w-1/2">
          <Card
            title="Card 5"
            description="This is card 5"
            imgSrc="https://placeimg.com/640/480/any"
          />
        </div>
        <div className="w-1/2">
          <Card
            title="Card 6"
            description="This is card 6"
            imgSrc="https://placeimg.com/640/480/any"
            isSmall
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;