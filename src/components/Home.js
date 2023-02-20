import React from 'react';
import Card from './Card';
import AllCards from './AllCards';
import Header from './Header';
import MainMenu from './MainMenu';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
          <div className="w-full pr-24">
            <div className="flex justify-end pr-7">
              <MainMenu />
            </div>
          </div>
          <div className="w-full px-6">
            <AllCards />
          </div>
        </div>
    </div>
  );
};

export default HomePage;