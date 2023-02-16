import { useState } from 'react';
import MenuButton from './MenuButton';
import React from 'react';

const MainMenu = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonSelect = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className="flex justify-between border border-gray-400 p-4">
      <MenuButton selected={selectedButton === 'Button 1'} onClick={() => handleButtonSelect('Button 1')}>
        Button 1
      </MenuButton>
      <MenuButton selected={selectedButton === 'Button 2'} onClick={() => handleButtonSelect('Button 2')}>
        Button 2
      </MenuButton>
      <MenuButton selected={selectedButton === 'Button 3'} onClick={() => handleButtonSelect('Button 3')}>
        Button 3
      </MenuButton>
      <MenuButton selected={selectedButton === 'Button 4'} onClick={() => handleButtonSelect('Button 4')}>
        Button 4
      </MenuButton>
      <MenuButton selected={selectedButton === 'Button 5'} onClick={() => handleButtonSelect('Button 5')}>
        Button 5
      </MenuButton>
      <MenuButton selected={selectedButton === 'Button 6'} onClick={() => handleButtonSelect('Button 6')}>
        Button 6
      </MenuButton>
    </div>
  );
};

export default MainMenu;