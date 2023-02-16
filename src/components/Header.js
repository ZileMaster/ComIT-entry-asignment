import TopMenu from './TopMenu';
import MainMenu from './MainMenu';
import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between">
      <TopMenu />
      <MainMenu />
    </div>
  );
};

export default Header;