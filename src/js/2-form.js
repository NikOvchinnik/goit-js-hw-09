const formElem = document.querySelector('.feedback-form');

const localObj = {
  email: '',
  message: '',
};

formElem.addEventListener('input', onInputForm);

function onInputForm(e) {
  if (!e.target.value) return;
  if (e.target.name === 'email') {
    localObj.email = e.target.value.trim();
  } else if (e.target.name === 'message') {
    localObj.message = e.target.value.trim();
  }
  return setItemLocalStorage('feedback-form-state', localObj);
}

function setItemLocalStorage(key, data) {
  return localStorage.setItem(key, JSON.stringify(data));
}

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function removeLocalStorage(key) {
  return localStorage.removeItem(key);
}

function resetPage() {
  const localValue = getLocalStorage('feedback-form-state');
  if (localValue === null) return;
  formElem.elements.email.value = localValue.email;
  formElem.elements.message.value = localValue.message;
  localObj.email = localValue.email;
  localObj.message = localValue.message;
}

resetPage();

formElem.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  if (!formElem.elements.email.value || !formElem.elements.message.value) {
   return alert("Your form is empty!")
  };
  console.log(localObj);
  formElem.reset();
  return removeLocalStorage('feedback-form-state');
}
