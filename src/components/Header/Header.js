import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { HEADER_NAVS } from '../../constants';
import { asyncChangeRole } from '../../reducer/role/actionCreator';
import { toggleTheme } from '../../reducer/theme/actionCreator';
import HeaderNavs from './components/HeaderNavs/HeaderNavs';
import './Header.style.css';

const Header = ({ title }) => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [activeTab, setActiveTab] = useState(HEADER_NAVS[0]);
  const { role } = useSelector((state) => state.role);
  const dispatch = useDispatch();
  let history = useHistory();
  const { pathname: currentRoute } = useLocation();
  const {darkTheme} = useSelector((state) => state.darkTheme);
  const dispatchDarkTheme = useDispatch();

  useEffect(() => {
    window.addEventListener('resize', setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener('resize', setWindowWidth(window.innerWidth));
    };
  }, []);

  return (
    <>
      <div className="header">
        <div className="header-title-container">
          <Link to={`${role ? '/dashboard' : '/'}`}>
            <h1 className="header-title">{title}</h1>
          </Link>
        </div>
        {windowWidth > 480 ? (
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
              <div>
                <button
                  className="search-btn"
                  onClick={() => dispatchDarkTheme(toggleTheme(!darkTheme))}
                >
                  {`${darkTheme ? 'Light Theme' : 'Dark Theme'}`}
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {windowWidth < 480 ? (
        <div className="header-footer">
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
      ) : null}
    </>
  );
};

export default Header;
