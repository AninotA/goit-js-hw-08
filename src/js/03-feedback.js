import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const data = {};

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);
// textInput();
// onForm();

function onInput(e) {
  data[e.target.name] = e.target.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
  //   console.log(data);
}

function onSubmit(e) {
  e.preventDefault();

  if (localStorage.setItem(STORAGE_KEY)) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  }
  e.currentTarget.reset();

  //   localStorage.getItem(LOCALSTORAGE_KEY, form.evt.target.value);
  //   updateForm();
  localStorage.removeItem(STORAGE_KEY);

  //   form.reset();
}


// function onForm() {
//   try {
//     const textInput = JSON.parse(localStorage.getItem('STORAGE_KEY'));
//     if (textInput) {
//       form.email.value =
//         !localStorageData || !localStorageData.hasOwnProperty('email')
//           ? ''
//           : localStorageData.email;
//       form.message.value =
//         !localStorageData || !localStorageData.hasOwnProperty('message')
//           ? ''
//           : localStorageData.message;
//     }
//   } catch (e) {
//     console.log(e);
//   }
// }

// // updateForm();

// function updateForm() {
//   form.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || '';
// }
