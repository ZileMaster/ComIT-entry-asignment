import { useState } from 'react';
import React from 'react';
import MenuButton from './MenuButton';

const TopMenu = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonSelect = (button) => {
    setSelectedButton(button);
  };

  const buttonStyle = 'py-2 px-4 text-white';
  const selectedButtonStyle = 'bg-blue-300';

  return (
    <div className="flex justify-end">
      <MenuButton selected={selectedButton === 'Button 1'} onClick={() => handleButtonSelect('Button 1')}>
        Button 1
      </MenuButton>
      <MenuButton selected={selectedButton === 'Button 2'} onClick={() => handleButtonSelect('Button 2')}>
        Button 2
      </MenuButton>
      <MenuButton selected={selectedButton === 'Button 3'} onClick={() => handleButtonSelect('Button 3')}>
        Button 3
      </MenuButton>
    </div>
  );
};

export default TopMenu;