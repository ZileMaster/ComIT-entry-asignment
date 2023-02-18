import React from 'react';
import Card from './Card';

const AllCards = () => {
  return (
    <div className="w-screen h-90vh mx-auto border-2 border-blue-300">
    <div className="flex justify-center items-center h-90 w-80 mx-auto">
    <div className="grid grid-cols-2">
      <div>
        <Card
          title="Card 1"
          description="This is card 1"
          imgSrc="https://placeimg.com/640/480/any"
        />
      </div>
      <div>
        <Card
          title="Card 2"
          description="This is card 2"
          imgSrc="https://placeimg.com/640/480/any"
        />
      </div>
      <div>
        <Card
          title="Card 3"
          description="This is card 3"
          imgSrc="https://placeimg.com/640/480/any"
        />
      </div>
      <div>
        <Card
          title="Card 4"
          description="This is card 4"
          imgSrc="https://placeimg.com/640/480/any"
        />
      </div>
      <div>
        <Card
          title="Card 5"
          description="This is card 5"
          imgSrc="https://placeimg.com/640/480/any"
        />
      </div>
      <div>
        <Card
          title="Card 6"
          description="This is card 6"
          imgSrc="https://placeimg.com/640/480/any"
          isSmall
        />
      </div>
    </div>
  </div>
</div>
  );
};

export default AllCards;