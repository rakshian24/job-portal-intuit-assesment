import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import Header from '../components/Header/Header';
import JobList from '../components/JobList/JobList';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import Profile from '../components/Profile/Profile';
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen';
import DynamicRoute from './DynamicRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header title={'Job Portal'} />
      <Switch>
        <Route exact path="/" component={WelcomeScreen}></Route>
        <DynamicRoute exact path="/profile" component={Profile} />
        <DynamicRoute exact path="/jobs" component={JobList} />
        <DynamicRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="" component={PageNotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
