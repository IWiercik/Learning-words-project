import { Button } from 'components/atoms/Button/Button';
import { Text } from 'components/atoms/Text/Text';
import { Title } from 'components/atoms/Title/Title';
import { HomeContainer } from './Home.style';
import { ButtonsBox } from 'views/LearningMode/LearningMode.style';
import { ButtonLink } from './Home.style';
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
          <ButtonLink to="/home">Tutorial</ButtonLink>
        </Button>
        <Button>
          <ButtonLink to="/login">Guest Account</ButtonLink>
        </Button>
      </ButtonsBox>
    </HomeContainer>
  );
}

export default Home;
