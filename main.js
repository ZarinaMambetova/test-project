const myForm = document.querySelector('#myForm');
const send = document.querySelector('#submit');
console.dir(myForm.elements.adult.checked);

myForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validateForm(myForm)) {
    const data = {
      email: myForm.elements.email.value,
      password: myForm.elements.password.value,
      radios: myForm.elements.radios.value,
      adult: myForm.elements.adult.checked
    };
    console.log(data);
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://httpbin.org/post');
    xhr.send(JSON.stringify(data));
    xhr.addEventListener('load', () => {
      if (xhr.response.json) {
        console.log('ok!');
      }
    });
  }
});
function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.email)) {
    valid = false;
  }

  if (!validateField(form.elements.password)) {
    valid = false;
  }

  if (!validateField(form.elements.adult)) {
      valid = false;
  }

  return valid;
}

function validateField(field) {

  if (!field.checkValidity()) {
        field.nextElementSibling.textContent = field.validationMessage;
    return false;
    
  } else {
    field.nextElementSibling.textContent = '';
    return true;
  }
}
