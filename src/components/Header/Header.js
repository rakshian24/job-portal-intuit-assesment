import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.style.css';

const Header = ({ title }) => {
  const { role } = useSelector((state) => state.role);
  return (
    <div className="header">
      <div>
        <Link to={`${role ? '/dashboard' : '/'}`}>
          <h1 className="header-title">{title}</h1>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
