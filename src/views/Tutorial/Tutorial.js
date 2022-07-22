import { TutorialContainer } from './Tutorial.style';
import exit from 'assets/images/icons/x.svg';
import arrowLeft from 'assets/images/icons/arrow-left-circle.svg';
import arrowRight from 'assets/images/icons/arrow-right-circle.svg';
import tutorial1 from 'assets/images/tutorial1.png';
import tutorial2 from 'assets/images/tutorial2.png';
import tutorial3 from 'assets/images/tutorial3.png';
import { Exit, TutorialImage, ArrowLeft, ArrowRight, BottomPart } from './Tutorial.style';
import Circle from 'components/atoms/TutorialCounter/TutorialCounter';
import { useState } from 'react';
function Tutorial() {
  const initialState = 1;
  const [tutorialCounter, setTutorialCounter] = useState(initialState);
  const usersTextHelpers = ['Create your Account', 'Add words to database', 'Learn by practise!'];
  const usersTextImages = [tutorial1, tutorial2, tutorial3];
  return (
    <TutorialContainer>
      <h2>Tutorial</h2>
      <Exit to="/home">
        <img src={exit} alt="exit" />
      </Exit>
      <TutorialImage src={usersTextImages[tutorialCounter - 1]} alt="tutorial" />
      <h4>{usersTextHelpers[tutorialCounter - 1]} </h4>
      <BottomPart>
        <ArrowLeft
          src={arrowLeft}
          alt="arrow-left"
          onClick={() => {
            if (tutorialCounter > 1) {
              setTutorialCounter(tutorialCounter - 1);
            }
          }}
        />
        <Circle text={tutorialCounter} />
        <ArrowRight
          src={arrowRight}
          alt="arrow-right"
          onClick={() => {
            if (tutorialCounter < 3) {
              setTutorialCounter(tutorialCounter + 1);
            }
          }}
        />
      </BottomPart>
    </TutorialContainer>
  );
}

export default Tutorial;
