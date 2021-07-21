import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const DynamicRoute = (props) => {
  const { role } = useSelector((state) => state.role);
  if (!role) {
    return <Redirect to="/" />;
  } else {
    return <Route component={props.component} {...props} />;
  }
};

export default DynamicRoute;
