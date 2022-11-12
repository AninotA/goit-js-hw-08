import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(element => {
    const onInput = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(onInput));
  }, 500)
);

form.addEventListener('submit', updateForm);

function updateForm(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

  form.reset();
  // e.target.reset();
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
  email.value = localStorageData.email;
  message.value = localStorageData.message;
}
