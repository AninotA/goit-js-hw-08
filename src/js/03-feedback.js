import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
let data = {};



form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', updateForm);

// onForm()


function onInput(e) {
  data[e.target.name] = e.target.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
  //   console.log(data);
}

function updateForm(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

  // form.reset();
  e.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const localStorageData = load(LOCALSTORAGE_KEY);
if (localStorageData) {
  form.email.value = localStorageData.email || "";
  form.message.value = localStorageData.message || "";
}

// function onForm() {
//   const textInput = localStorage.getItem(LOCALSTORAGE_KEY);
//   const localStorageData = JSON.parse(textInput);
//   //   console.log(localStorageData);

//   if (localStorageData) {
//     form.email.value = localStorageData || '';
//     form.message.value = localStorageData || '';
//   }
// }
