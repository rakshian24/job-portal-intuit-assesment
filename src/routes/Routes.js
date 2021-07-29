import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateJob from '../components/CreateJob/CreateJob';
import Dashboard from '../components/Dashboard/Dashboard';
import Header from '../components/Header/Header';
import JobList from '../components/JobList/JobList';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import Profile from '../components/Profile/Profile';
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen';
import { ROLES } from '../constants';
import DynamicRoute from './DynamicRoute';

const { ROOT, ADMIN, USER } = ROLES;

const Routes = () => {
  return (
    <BrowserRouter>
      <Header title={'Job Portal'} />
      <Switch>
        <Route
          exact
          path="/"
          component={WelcomeScreen}
          roles={[ROOT, ADMIN, USER]}
        ></Route>
        <DynamicRoute
          exact
          path="/profile"
          component={Profile}
          roles={[ROOT, ADMIN, USER]}
        />
        <DynamicRoute
          exact
          path="/jobs"
          component={JobList}
          roles={[ROOT, ADMIN, USER]}
        />
        <DynamicRoute
          exact
          path="/dashboard"
          component={Dashboard}
          roles={[ROOT, ADMIN, USER]}
        />
        <DynamicRoute
          exact
          path="/createJob"
          component={CreateJob}
          roles={[ROOT, ADMIN]}
        />
        <Route
          exact
          path=""
          component={PageNotFound}
          roles={[ROOT, ADMIN, USER]}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
