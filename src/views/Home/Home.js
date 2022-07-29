import { Button } from 'components/atoms/Button/Button.style';
import { Text } from 'components/atoms/Text/Text';
import { Title } from 'components/atoms/Title/Title.style';
import { HomeContainer } from './Home.style';
import { ButtonsBox } from 'views/LearningMode/LearningMode.style';
import { ButtonLink } from './Home.style';
import { signInUser } from 'configFirebase/firebase';
import { CenterContainer } from 'components/molecules/CenterContainer/CenterContainer.style';
import React from 'react';
function Home({ isAuthorized }) {
  return (
    <React.Fragment>
      {isAuthorized ? (
        <CenterContainer>
          <HomeContainer>
            <Title>Welcome!</Title>
            <Text>
              The website you are visiting helps learning words in <span>exact given translation!</span>
            </Text>
            <ButtonsBox>
              <Button>
                <ButtonLink to="/tutorial">Tutorial</ButtonLink>
              </Button>
            </ButtonsBox>
          </HomeContainer>
        </CenterContainer>
      ) : (
        <HomeContainer>
          <Title>Welcome!</Title>
          <Text>
            The website you are visiting helps learning words in <span>exact given translation!</span>
          </Text>
          <ButtonsBox>
            <Button>
              <ButtonLink to="/register">Get started!</ButtonLink>
            </Button>
            <Button>
              <ButtonLink to="/tutorial">Tutorial</ButtonLink>
            </Button>
            <Button
              onClick={() => {
                signInUser('quest@gmail.com', 'B497M7E06iJPbrGE72xZ');
              }}
            >
              Guest Account
            </Button>
          </ButtonsBox>
        </HomeContainer>
      )}
    </React.Fragment>
  );
}

export default Home;
