import { CenterContainer } from 'components/molecules/CenterContainer/CenterContainer.style';
import deleteIcon from 'assets/images/icons/x-circle.svg';
import editIcon from 'assets/images/icons/edit.svg';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { appContext } from 'providers/Providers';
import { Table } from './WordsControlPanel.style';
import { Row } from './WordsControlPanel.style';

function WordsControlPanel() {
  const ctx = useContext(appContext);
  const user = ctx.currentUser.email;
  const engWords = useSelector((state) => state.wordsDataSlice.engWords);
  const plWords = useSelector((state) => state.wordsDataSlice.plWords);
  return (
    <CenterContainer>
      <Table>
        <Row>
          <div>
            <strong>Lp.</strong>
          </div>
          <div>
            <strong>English Word</strong>
          </div>
          <div>
            <strong>Polish Word</strong>
          </div>
          <div>
            <strong>Actions</strong>
          </div>
        </Row>
        {engWords.map((word, i) => {
          // i+1 cause the array start from 0 and I want to itterate from 1
          return (
            <Row key={i + 1}>
              <div>{i + 1}</div>
              <div>{word}</div>
              <div>{plWords[i]}</div>
              <div className="action">
                <button className="buttonRectangle">
                  <img alt="edit-Icon" src={editIcon}></img>
                </button>
                <button
                  className="buttonCircle"
                  onClick={() => {
                    console.log('Delete me!');
                  }}
                >
                  <img alt="delete-Icon" src={deleteIcon}></img>
                </button>
              </div>
            </Row>
          );
        })}
      </Table>
    </CenterContainer>
  );
}

export default WordsControlPanel;
