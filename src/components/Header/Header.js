import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { HEADER_NAVS } from '../../constants';
import { asyncChangeRole } from '../../reducer/role/actionCreator';
import HeaderNavs from './components/HeaderNavs/HeaderNavs';
import './Header.style.css';

const Header = ({ title }) => {
  const { role } = useSelector((state) => state.role);
  const dispatch = useDispatch();
  let history = useHistory();
  const { pathname: currentRoute } = useLocation();

  const [activeTab, setActiveTab] = useState(HEADER_NAVS[0]);

  return (
    <div className="header">
      <div className="header-title-container">
        <Link to={`${role ? '/dashboard' : '/'}`}>
          <h1 className="header-title">{title}</h1>
        </Link>
      </div>
      <div className="header-nav-container">
        <div>
          {HEADER_NAVS.map((navItem, index) => (
            <HeaderNavs
              navItem={navItem}
              key={index}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>

        <div
          onClick={() =>
            dispatch(asyncChangeRole('')).then(() => history.push('/'))
          }
        >
          <div
            className={`header-nav ${
              currentRoute === '/' ? 'active-nav-tab' : ''
            }`}
          >
            Change Role
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
