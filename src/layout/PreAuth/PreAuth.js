import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { BasicContainer } from 'components/molecules/BasicContainer/BasicContainer.style';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegistrationForm from 'views/RegistrationForm/Registration';
import LoginForm from 'views/LoginForm/LoginForm';
import Home from 'views/Home/Home';

const preAuth = () => (
  <Router>
    <Navigation isAuthorized={false}></Navigation>
    <BasicContainer noPadding={true}>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegistrationForm} />
        <Route component={Home} />
      </Switch>
    </BasicContainer>
  </Router>
);
export default preAuth;
