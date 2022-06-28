import { CenterContainer } from 'components/molecules/CenterContainer/CenterContainer.style';
import deleteIcon from 'assets/images/icons/x-circle.svg';
import editIcon from 'assets/images/icons/edit.svg';
import arrowDown from 'assets/images/icons/arrow-down.svg';
import arrowUp from 'assets/images/icons/arrow-up.svg';
import { useSelector } from 'react-redux';
import { useContext, useState } from 'react';
import { appContext } from 'providers/Providers';
import { deleteSingleData } from 'configFirebase/firebase';
import { alertForEditingWords } from 'helpers/sweetAlert';
import Input from 'components/atoms/Input/Input';
import { Table, TableAdditionalOptions, TableItemsContainer, Row } from './WordsControlPanel.style';

function WordsControlPanel() {
  const ctx = useContext(appContext);
  const user = ctx.currentUser.email;
  const engWords = useSelector((state) => state.wordsDataSlice.engWords);
  const plWords = useSelector((state) => state.wordsDataSlice.plWords);
  const wordsIds = useSelector((state) => state.wordsDataSlice.idsWords);
  // console.log('[Pl Word]', plWords, '\n', '[Eng Word]:', engWords, '\n', '[Ids] :', wordsIds);
  let inputValue;
  const getInputValue = (val) => {
    inputValue = val;
  };
  const [isHidden, setIsHidden] = useState(true);
  //CSS Variable
  return (
    <CenterContainer modifiers="none">
      <Table>
        <img
          className="arrow"
          alt="icon"
          src={isHidden ? arrowUp : arrowDown}
          onClick={() => {
            setIsHidden(!isHidden);
          }}
        ></img>
        <TableAdditionalOptions className={isHidden ? 'hidden-content' : 'show-content'}>
          <Input placeholder={'Type words to filter'} sendData={getInputValue}></Input>
          <button
            onClick={() => {
              console.log(inputValue);
            }}
          >
            <strong>Delete All</strong>
          </button>
        </TableAdditionalOptions>
        <TableItemsContainer>
          <Row className="sticky">
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
          {engWords.map((word, index) => {
            // i+1 cause the array start from 0 and I want to itterate from 1
            return (
              <Row key={wordsIds[index]}>
                <div>{index + 1}</div>
                <div>{word}</div>
                <div>{plWords[index]}</div>
                <div className="action">
                  <button
                    name="edit-item-button"
                    className="buttonRectangle"
                    onClick={() => {
                      alertForEditingWords();
                    }}
                  >
                    <img alt="edit-Icon" src={editIcon}></img>
                  </button>
                  <button
                    name="delete-item-button"
                    className="buttonCircle"
                    onClick={() => {
                      deleteSingleData(user, wordsIds[index]);
                    }}
                  >
                    <img alt="delete-Icon" src={deleteIcon}></img>
                  </button>
                </div>
              </Row>
            );
          })}
        </TableItemsContainer>
      </Table>
    </CenterContainer>
  );
}

export default WordsControlPanel;
