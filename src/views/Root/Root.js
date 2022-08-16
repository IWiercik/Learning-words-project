import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/theme/theme';
import { globalStyle as GlobalStyle } from 'assets/styles/globalStyle';
import { Wrapper } from './Root.style';
import { appContext } from 'providers/Providers';
import PreAuth from 'layout/PreAuth/PreAuth';
import MainTemplate from 'layout/MainTemplate/MainTemplate';
import { listenForData } from 'configFirebase/firebase';
import { useDispatch } from 'react-redux';
import { downloadData } from 'store/wordsSlice';
import { updateWordToTranslate } from 'store/wordToTranslateSlice';
import { getNewWord } from 'helpers/helpersJS';

const Root = () => {
  // On the start app we download the user data and hear on snapshot
  const ctx = useContext(appContext);
  const dispatch = useDispatch();
  const updateReduxWordData = (result) => {
    dispatch(downloadData(result));
    dispatch(updateWordToTranslate(getNewWord(result)));
  };
  const updateReduxWordDataForAnnonymous = () => {
    const exampleWords = [
      { id: '01', engWord: 'Cat', plWord: 'Kot' },
      { id: '02', engWord: 'Dog', plWord: 'Pies' },
    ];
    dispatch(downloadData(exampleWords));
    dispatch(updateWordToTranslate(getNewWord(exampleWords)));
  };
  // If user is authorized and notAnnymous we download and listen for new data
  // I passed the function to update redux database to snapshot firebase function
  if (ctx.currentUser) {
    if (ctx.currentUser.isAnonymous) {
      updateReduxWordDataForAnnonymous();
    } else {
      listenForData(ctx.currentUser.email, updateReduxWordData);
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper> {ctx.currentUser ? <MainTemplate /> : <PreAuth />}</Wrapper>
    </ThemeProvider>
  );
};
export default Root;
