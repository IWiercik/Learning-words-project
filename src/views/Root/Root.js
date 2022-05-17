import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/theme/theme';
import { globalStyle as GlobalStyle } from 'assets/styles/globalStyle';
import { Wrapper } from './Root.style';
import { appContext } from 'providers/Providers';
import PreAuth from 'layout/PreAuth/PreAuth';
import MainTemplate from 'layout/MainTemplate/MainTemplate';
import { getData } from 'configFirebase/firebase';
import { useDispatch } from 'react-redux';
import { downloadData } from 'store';
// import { updateData } from 'store';
// import { listenForData } from 'firebase/firebase';

const Root = () => {
  // On the start app we download the user data and hear on snapshot
  const ctx = useContext(appContext);
  const dispatch = useDispatch();
  ctx.currentUser && getData(ctx.currentUser.email).then((result) => (result ? dispatch(downloadData(result)) : false));
  // ctx.currentUser && listenForData(ctx.currentUser.email);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle> </GlobalStyle>
      <Wrapper> {ctx.currentUser ? <MainTemplate /> : <PreAuth />}</Wrapper>
    </ThemeProvider>
  );
};
export default Root;
