import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
export const alertForHints = (wordToTranslate) => {
  const maxLettersForHint = wordToTranslate.length / 2;
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    icon: 'question',
    html: `
     <h2>How much letters do you want ?</h2>
     <p>You can have max ${maxLettersForHint} letters</p>
     `,
    input: 'number',
    preConfirm: (value) => {
      if (value < 0) {
        Swal.showValidationMessage(`You can't do this!`);
      } else if (value > maxLettersForHint) {
        Swal.showValidationMessage(`You want too much letters!`);
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      console.log(typeof wordToTranslate);
      console.log(result.value);
      Swal.fire({
        title: `Your hint:`,
        text: `${wordToTranslate.substring(0, result.value)}...`,
      });
    }
  });
};
