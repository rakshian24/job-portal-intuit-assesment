import React from 'react';
import './Header.style.css';

const Header = ({ title }) => {
  return (
    <div className="header">
      <div>
      <h1 className="header-title">{title}</h1>
      </div>
      <div>
          
      </div>
    </div>
  );
};

export default Header;
