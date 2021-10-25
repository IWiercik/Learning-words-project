import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/theme/theme';
import { globalStyle as GlobalStyle } from 'assets/styles/globalStyle';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle> </GlobalStyle>
      <MainTemplate></MainTemplate>
    </ThemeProvider>
  );
};
export default Root;
