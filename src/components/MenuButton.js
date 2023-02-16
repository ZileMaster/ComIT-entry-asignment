import React from 'react';

const MenuButton = ({ children, selected, onClick }) => {
  const buttonStyle = 'py-2 px-4 text-black';
  const selectedButtonStyle = 'border-2 border-blue-300';

  return (
    <button className={`${buttonStyle} ${selected ? selectedButtonStyle : ''}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default MenuButton;