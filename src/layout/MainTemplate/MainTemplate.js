import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TypingMode from 'views/TypingMode/TypingMode';
import LearningMode from 'views/LearningMode/LearningMode';
import WordsControlPanel from 'views/WordsControlPanel/WordsControlPanel';
import Home from 'views/Home/Home';
import Account from 'views/Account/Account';

const MainTemplate = () => {
  return (
    <BrowserRouter>
      <Navigation isAuthorized={true}></Navigation>
      <Routes>
        <Route path="/home" element={<Home isAuthorized={true} />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/typing" element={<TypingMode />}></Route>
        <Route path="/learning" element={<LearningMode />}></Route>
        <Route path="/wordsControlPanel" element={<WordsControlPanel />}></Route>
        <Route path="*" element={<TypingMode />} />
      </Routes>
    </BrowserRouter>
  );
};
export default MainTemplate;
