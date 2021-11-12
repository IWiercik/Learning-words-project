import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TypingMode from 'views/TypingMode/TypingMode';
import LearningMode from 'views/LearningMode/LearningMode';
const CenteredContent = styled.div`
  align-self: center;
  justify-self: center;
  background: rgba(0, 0, 0, 0.397);
  border-radius: 10px;
  min-width: 300px;
  position: relative;
  display: grid;
  box-shadow: 2px 2px 6px -1px rgb(0 0 0);
  padding: 25px 25px;
`;

const MainTemplate = () => {
  return (
    <Router>
      <Navigation isAuthorized={true}></Navigation>
      <CenteredContent>
        <Switch>
          <Route exact path="/typing" component={TypingMode}></Route>
          <Route exact path="/learning" component={LearningMode}></Route>
          <Route component={TypingMode} />
        </Switch>
      </CenteredContent>
    </Router>
  );
};
export default MainTemplate;
