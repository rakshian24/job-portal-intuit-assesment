import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ROLES } from '../../constants';
import { asyncChangeRole } from '../../reducer/role/actionCreator';
import './WelcomeScreen.style.css';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const WelcomeScreen = () => {
  const { role:{role}, darkTheme: {darkTheme} } = useSelector((state) => state);
  let history = useHistory();

  useEffect(() => {
    if (role) {
      history.push('/dashboard');
    }
  });

  const dispatch = useDispatch();
  return (
    <div className="welcome-wrapper container">
      <div className={`welcome-card ${darkTheme ? 'dark-theme-border dark-theme-shadow' : ''}`}>
        <h6 className="card-title">Please choose your role</h6>
        <div className="card-content">
          <div
            className={`role ${darkTheme ? 'dark-theme-role' : ''}`}
            onClick={() =>
              dispatch(asyncChangeRole(ROLES.ADMIN)).then(() =>
                history.push('/dashboard'),
              )
            }
          >
            <span>Admin</span>
            <div className="sub-text">Admin can create jobs</div>
          </div>
          <div
            className={`role ${darkTheme ? 'dark-theme-role' : ''}`}
            onClick={() =>
              dispatch(asyncChangeRole(ROLES.USER)).then(() =>
                history.push('/dashboard'),
              )
            }
          >
            <span>User</span>
            <div className="sub-text">
              Users will have a limited access to the job portal.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
