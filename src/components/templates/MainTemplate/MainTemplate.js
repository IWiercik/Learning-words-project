import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper, CenteredContent } from './MainTemplate.style';

const MainTemplate = ({ children }) => (
  <Wrapper>
    <Navigation></Navigation>
    <CenteredContent>{children}</CenteredContent>
  </Wrapper>
);
export default MainTemplate;
