import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import NotAuthorized from '../components/NotAuthorized/NotAuthorized';

const DynamicRoute = (props) => {
  const { role } = useSelector((state) => state.role);
  const isAuthorized = props.roles.includes(role);
  if (!role) {
    return <Redirect to="/" />;
  } else if (isAuthorized) {
    return <Route component={props.component} {...props} />;
  } else {
    return <Route {...props} component={NotAuthorized} />;
  }
};

export default DynamicRoute;
