import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import PageNotFound from 'components/organisms/PageNotFound/PageNotFound';
import { Wrapper, CenteredContent } from './PreAuth.style';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegistrationForm from 'views/RegistrationForm/Registration';
import LoginForm from 'views/LoginForm/LoginForm';

const preAuth = () => (
  <Router>
    <Wrapper>
      <Navigation></Navigation>
      <CenteredContent>
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegistrationForm} />
          <Route component={PageNotFound} />
        </Switch>
      </CenteredContent>
    </Wrapper>
  </Router>
);
export default preAuth;
