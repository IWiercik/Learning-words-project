import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { CenteredContent } from './PreAuth.style';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegistrationForm from 'views/RegistrationForm/Registration';
import LoginForm from 'views/LoginForm/LoginForm';

const preAuth = () => (
  <Router>
    <Navigation isAuthorized={false}></Navigation>
    <CenteredContent>
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegistrationForm} />
        <Route component={LoginForm} />
      </Switch>
    </CenteredContent>
  </Router>
);
export default preAuth;
