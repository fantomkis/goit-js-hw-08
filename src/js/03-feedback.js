import { throttle } from 'lodash';

const formEl = document.querySelector('.feedback-form');
const fetInput = document.querySelector('.feedback-form input');
const fetMessage = document.querySelector('.feedback-form textarea');

const formChange = function () {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: fetInput.value,
      message: fetMessage.value,
    })
  );
};

const getPreviousData = function () {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!data) return;
  fetInput.value = data.email;
  fetMessage.value = data.message;
};

const formSubmit = function (evt) {
  evt.preventDefault();
  console.log({
    email: fetInput.value,
    message: fetMessage.value,
  });
  formEl.reset();
  localStorage.clear();
};

fetInput.addEventListener('input', throttle(formChange, 500));
fetMessage.addEventListener('input', throttle(formChange), 500);
formEl.addEventListener('submit', formSubmit);

getPreviousData();
