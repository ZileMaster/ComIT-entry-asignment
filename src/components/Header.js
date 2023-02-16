import TopMenu from './TopMenu';
import MainMenu from './MainMenu';
import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <TopMenu />
      </div>
      <div className="flex justify-end">
        <MainMenu />
      </div>
    </div>
  );
};

export default Header;