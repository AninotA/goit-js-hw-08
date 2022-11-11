import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const data = {};

onForm();

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', updateForm);

function onInput(e) {
  data[e.target.name] = e.target.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
  //   console.log(data);
}

// const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// };

// const localStorageData = load(LOCALSTORAGE_KEY);
// if (localStorageData) {
//   form.email.value = localStorageData.email || '';
//   form.message.value = localStorageData.message || '';
// }


function onForm() {

  const localStorageData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  //   console.log(localStorageData);

  if (localStorageData) {
    form.email.value = localStorageData.email || '';
    form.message.value = localStorageData.message || '';
  }
}

function updateForm(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

  form.reset();
  // e.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}