import React from 'react';
import './WelcomeScreen.style.css';

const WelcomeScreen = () => {
  return (
    <div className="welcome-wrapper container">
      <div className="welcome-card">
        <h6 className="card-title">Please choose your role</h6>
        <div className="card-content">
          <div className="role">
            <span>Admin</span>
            <div className="sub-text">Admin can create jobs</div>
          </div>
          <div className="role">
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
