import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/theme/theme';
import { globalStyle as GlobalStyle } from 'assets/styles/globalStyle';
import { Wrapper } from './Root.style';
import { userContext } from 'providers/CurrentUser';
import PreAuth from 'layout/PreAuth/PreAuth';
import MainTemplate from 'layout/MainTemplate/MainTemplate';

const Root = () => {
  const ctx = useContext(userContext);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle> </GlobalStyle>
      <Wrapper> {ctx.currentUser ? <MainTemplate /> : <PreAuth />}</Wrapper>
    </ThemeProvider>
  );
};
export default Root;
