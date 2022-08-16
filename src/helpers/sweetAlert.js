import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import 'helpers/sweetAlert.css';
import { editData } from 'configFirebase/firebase';
import { sendingEmailWithNewPassword, updateProfileName } from 'configFirebase/firebase';
import parse from 'html-react-parser';

const MySwal = withReactContent(Swal);
//POST AUTH FUNCTIONING
export const alertForHints = (wordToTranslate) => {
  const maxLettersForHint = Math.round(wordToTranslate.length / 2);
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
export const alertForVerifingEmail = () => {
  MySwal.fire({
    title: 'Your account is not verified',
    text: 'If you want to have more words you need to first verify your account with email.',
  });
};
export const AlertForSendingVerification = () => {
  MySwal.fire({
    icon: 'success',
    title: 'Email sent check your email',
  });
};
export const alertForConfirmDeletingData = (deleteData, deleteReduxData, user) => {
  if (user) {
    MySwal.fire({
      title: 'Are you sure you wanna delete all data ?',
      showDenyButton: true,
      confirmButtonText: 'Yes I wanna delete all data',
      denyButtonText: `No I wanna leave`,
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          icon: 'success',
          title: 'Data deleted',
        });
        deleteData(user);
        deleteReduxData();
      }
    });
  } else {
    notificationForNeedingAccount();
  }
};
export const alertForChangingProfileName = (user) => {
  MySwal.fire({
    title: 'New nickname',
    input: 'text',
    confirmButtonText: 'Set nickname',
    preConfirm: (value) => {
      if (value.length < 3) {
        Swal.showValidationMessage(`Nickname need to contains atleast 4 letters`);
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      updateProfileName(user, result.value);
    }
  });
};
export const alertForSuccessfulProfileNameUpdate = () => {
  MySwal.fire({
    icon: 'success',
    title: 'Successful update!',
  });
};
export const notificationForNeedingAccount = () => {
  MySwal.fire({
    title: 'Permission Denied!',
    html: 'You need to <span style="color:lightgreen; font-weight:bold;">create account</span> instead using <span style="color:red;">guest account</span>',
  });
};
//LOGIN/REGISTRATION
export const alertForSuccessfulLogin = () => {
  Swal.fire({
    icon: 'success',
    title: 'Successful login!',
  });
};
export const alertForFailedLogin = (error, message) => {
  let explainMessage;
  let resetPasswordAvailable;
  switch (error) {
    case 'invalid-email':
      explainMessage = 'Check your email or create account.';
      break;
    case 'user-not-found':
      explainMessage = `There is <span class="blue-bold">no user</span> with this email.<br>You need to <span class="blue-bold">create account</span>.`;
      break;
    case 'wrong-password':
      explainMessage = `This password is incorrect.<br>If you want to reset password click:<br>`;
      resetPasswordAvailable = true;
      break;
    case 'too-many-requests':
      explainMessage = `Access to this account has been temporarily disabled due to many failed login attempts.<br> You can immediately restore it by resetting your password or you can try again later.<br>`;
      resetPasswordAvailable = true;
      break;
    default:
      explainMessage = message;
      resetPasswordAvailable = false;
  }
  MySwal.fire({
    title: ' ',
    html: (
      <div className="failed-login-div">
        {parse(explainMessage)}
        {resetPasswordAvailable && (
          <span className="reset-password" onClick={alertForResetingPassword}>
            Reset Password
          </span>
        )}
      </div>
    ),
  });
};
export const alertForFailedRegistration = (emailCorrectnes, passwordCorrectnes, error) => {
  let swalTitle;
  let swalText;
  let resetPasswordAvailable;
  // EMAIL/LOGIN  CORRECTNESS
  if (emailCorrectnes === false && passwordCorrectnes === true) {
    swalTitle = `Wrong email`;
    swalText = `Email need to contain @ and domain(.com/.pl/..) `;
  } else if (passwordCorrectnes === false && emailCorrectnes === true) {
    swalTitle = `Wrong password`;
    swalText = `Password need to contain atleast 6 letters `;
  } else if (passwordCorrectnes === false && emailCorrectnes === false) {
    swalTitle = `Wrong email and password`;
    swalText = `Password need to contain atleast 6 letters.Email need to contain @ and domain(.com/.pl/..) `;
  }
  //USER EXISTS
  switch (error) {
    case 'email-already-in-use':
      swalTitle = `User existing`;
      swalText = `Login into your account or reset password:<br>`;
      resetPasswordAvailable = true;
      break;
    default:
  }
  MySwal.fire({
    icon: 'error',
    title: swalTitle,
    html: (
      <div>
        <p>{parse(swalText)}</p>
        {resetPasswordAvailable && (
          <span className="reset-password" onClick={alertForResetingPassword}>
            Reset Password
          </span>
        )}
      </div>
    ),
  });
};
export const alertForResetingPassword = () => {
  MySwal.fire({
    html: `
     <h2>Pass your email</h2>
     `,
    input: 'text',
    preConfirm: (value) => {},
  }).then((result) => {
    if (result.isConfirmed) {
      sendingEmailWithNewPassword(result.value);
    }
  });
};
export const alertForSuccessfulPasswordReset = () => {
  Swal.fire({
    icon: 'success',
    title: 'Reset password link sent!',
    text: 'Check your email(look also in spam)',
  });
};
export const alertForFailedPasswordReset = (error, message) => {
  console.log(error);
  let explainMessage;
  let resetPasswordAvailable;
  switch (error) {
    case 'invalid-email':
      explainMessage = 'Check correctness of your email or create account.';
      break;
    case 'user-not-found':
      explainMessage = `There is <span class="blue-bold">no user</span> with this email.<br>You need to <span class="blue-bold">create account</span>.`;
      break;
    case 'missing-email':
      explainMessage = 'You need to pass your email';
      break;
    default:
      explainMessage = message;
      resetPasswordAvailable = false;
  }
  MySwal.fire({
    title: ' ',
    html: (
      <div className="failed-login-div">
        {parse(explainMessage)}
        {resetPasswordAvailable && (
          <span className="reset-password" onClick={alertForResetingPassword}>
            Reset Password
          </span>
        )}
      </div>
    ),
  });
};
