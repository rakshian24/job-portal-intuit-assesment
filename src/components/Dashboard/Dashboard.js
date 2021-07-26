import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Common/Card/Card';
import './Dashboard.style.css';

const Dashboard = () => {
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="dashboard-wrapper">
      <Card>
        <div className="card-title">
          {user && user.firstName ? (
            <span>You are logged in as {user.firstName}</span>
          ) : (
            <span>
              Please create your profile <Link to="/profile"> here</Link>{' '}
            </span>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
