import { Button } from 'components/atoms/Button/Button.style';
import { Text } from 'components/atoms/Text/Text';
import { Title } from 'components/atoms/Title/Title.style';
import { HomeContainer } from './Home.style';
import { ButtonsBox } from 'views/LearningMode/LearningMode.style';
import { ButtonLink } from './Home.style';
import { signInUser } from 'configFirebase/firebase';
function Home() {
  return (
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
            signInUser('guest@gmail.com', 'B497M7E06iJPbrGE72xZ');
          }}
        >
          Guest Account
        </Button>
      </ButtonsBox>
    </HomeContainer>
  );
}

export default Home;
