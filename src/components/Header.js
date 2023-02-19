import TopMenu from './TopMenu';
import MainMenu from './MainMenu';
import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <TopMenu />
      </div>
      <div className="flex justify-end mt-10">
        <MainMenu />
      </div>
    </div>
  );
};

export default Header;