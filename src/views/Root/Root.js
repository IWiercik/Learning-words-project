import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/theme/theme';
import { globalStyle as GlobalStyle } from 'assets/styles/globalStyle';
import { Wrapper } from './Root.style';
import { appContext } from 'providers/Providers';
import PreAuth from 'layout/PreAuth/PreAuth';
import MainTemplate from 'layout/MainTemplate/MainTemplate';
import { getData, listenForData } from 'configFirebase/firebase';
import { useDispatch } from 'react-redux';
import { downloadData } from 'store/wordsSlice';
import { updateWordToTranslate } from 'store/wordToTranslateSlice';

const Root = () => {
  // On the start app we download the user data and hear on snapshot
  const ctx = useContext(appContext);
  const dispatch = useDispatch();
  const updateReduxWordData = (result) => {
    const engWords = result[0];
    const actualWordToTranslate = engWords[Math.floor(Math.random() * engWords.length)];
    dispatch(downloadData(result));
    dispatch(updateWordToTranslate(actualWordToTranslate));
  };
  // If user is authorized we download and listen for new data
  // I passed the function to update redux database to snapshot firebase function
  ctx.currentUser && listenForData(ctx.currentUser.email, updateReduxWordData);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle> </GlobalStyle>
      <Wrapper> {ctx.currentUser ? <MainTemplate /> : <PreAuth />}</Wrapper>
    </ThemeProvider>
  );
};
export default Root;
