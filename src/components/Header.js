import TopMenu from './TopMenu';
import MainMenu from './MainMenu';
import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <TopMenu />
      </div>
    </div>
  );
};

export default Header;