import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ROLES } from '../../constants';
import { changeRole } from '../../reducer/role/actionCreator';
import './WelcomeScreen.style.css';

const WelcomeScreen = () => {
  const { role } = useSelector((state) => state.role);
  console.log('role = ', role);
  const dispatch = useDispatch();
  return (
    <div className="welcome-wrapper container">
      <div className="welcome-card">
        <h6 className="card-title">Please choose your role</h6>
        <div className="card-content">
          <div
            className="role"
            onClick={() => dispatch(changeRole(ROLES.ADMIN))}
          >
            <span>Admin</span>
            <div className="sub-text">Admin can create jobs</div>
          </div>
          <div
            className="role"
            onClick={() => dispatch(changeRole(ROLES.USER))}
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
