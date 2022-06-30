import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import 'helpers/sweetAlert.css';
import { editData } from 'configFirebase/firebase';
export const alertForHints = (wordToTranslate) => {
  const maxLettersForHint = Math.round(wordToTranslate.length / 2);
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    icon: 'question',
    html: `
     <h2>How many letters do you want ?</h2>
     <p>You can have max ${maxLettersForHint} letters</p>
     `,
    input: 'number',
    preConfirm: (value) => {
      if (value < 0) {
        Swal.showValidationMessage(`You can't do this!`);
      } else if (value > maxLettersForHint) {
        Swal.showValidationMessage(`You want too many letters!`);
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `Your hint:`,
        text: `${wordToTranslate.substring(0, result.value)}...`,
      });
    }
  });
};

export const alertForAddingWordsToDataBase = () => {
  Swal.fire({
    icon: 'success',
    title: 'Sent!',
  });
};

export const alertForEmptyInput = () => {
  Swal.fire({
    icon: 'warning',
    title: 'Fill in the fields!',
  });
};

export const alertForEditingWords = (engWord, plWord, id, user) => {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    html: `
    <div class="flex-container">
      <label for="engWord">English Word:</label> <input name="engWord" value="${engWord}" type="text"></input> 
      <label for="plWord">Polish Word:</label> <input name="plWord"  value ="${plWord}"type="text "></input>
    </div> 
   `,
    confirmButtonColor: '#1a1a1a',
    confirmButtonText: 'Update data!',
    preConfirm: function () {
      return new Promise(function (resolve) {
        const engWord = document.querySelector('[name="engWord"]').value;
        const plWord = document.querySelector('[name="plWord"]').value;
        if (engWord.length < 2 || plWord.length < 2) {
          Swal.showValidationMessage('Fill in fields correctly!');
          Swal.enableButtons();
        } else {
          Swal.resetValidationMessage();
          resolve([engWord, plWord]);
        }
      });
    },
  }).then((result) => {
    const engWord = result.value[0];
    const plWord = result.value[1];
    editData(user, id, engWord, plWord).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
      });
    });
  });
};
