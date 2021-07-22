import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../Header.style.css';

const HeaderNavs = ({ navItem }) => {
  const { pathname: currentRoute } = useLocation();

  return (
    <>
      <Link
        to={navItem.url}
        className={`header-nav ${
          currentRoute === navItem.url ? 'active-nav-tab' : ''
        }`}
      >
        {navItem.title}
      </Link>
    </>
  );
};

export default HeaderNavs;
