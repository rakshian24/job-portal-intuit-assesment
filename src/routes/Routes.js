import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import JobList from '../components/JobList/JobList';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import Profile from '../components/Profile/Profile';
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WelcomeScreen}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/job-list" component={JobList}></Route>
        <Route exact path="" component={PageNotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
