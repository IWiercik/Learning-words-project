import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper, CenteredContent } from './MainTemplate.style';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegistrationForm from 'views/RegistrationForm/Registration';
import LoginForm from 'views/LoginForm/LoginForm';

const MainTemplate = () => (
  <Router>
    <Wrapper>
      <Navigation></Navigation>
      <CenteredContent>
        <Switch>
          <Route path="/login">
            <LoginForm></LoginForm>
          </Route>
          <Route path="/">
            <RegistrationForm></RegistrationForm>
          </Route>
        </Switch>
      </CenteredContent>
    </Wrapper>
  </Router>
);
export default MainTemplate;
