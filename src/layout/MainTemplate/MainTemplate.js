import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TypingMode from 'views/TypingMode/TypingMode';
import LearningMode from 'views/LearningMode/LearningMode';
import WordsControlPanel from 'views/WordsControlPanel/WordsControlPanel';

const MainTemplate = () => {
  return (
    <Router>
      <Navigation isAuthorized={true}></Navigation>
      <Switch>
        <Route exact path="/typing" component={TypingMode}></Route>
        <Route exact path="/learning" component={LearningMode}></Route>
        <Route exact path="/wordsControlPanel" component={WordsControlPanel}></Route>
        <Route component={TypingMode} />
      </Switch>
    </Router>
  );
};
export default MainTemplate;
