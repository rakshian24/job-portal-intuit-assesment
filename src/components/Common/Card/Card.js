import React from 'react';
import { useSelector } from 'react-redux';
import './Card.style.css';

const Card = ({ children }) => {
  const { darkTheme } = useSelector((state) => state.darkTheme);

  return (
    <div className={`card ${darkTheme ? 'dark-theme-card' : ''}`}>
      {children}
    </div>
  );
};

export default Card;
