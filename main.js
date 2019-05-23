const myForm = document.querySelector('#myForm');
const send = document.querySelector('#submit');

send.addEventListener('click', event => {
    event.preventDefoult();

    if (validateForm(myForm)) {
        const data = {
            email: myForm.elements.email.value,
            password: myForm.elements.password.value,
            radios: myForm.elements.radios.value,
            adult: myForm.elements.adult.value,
        };
        // console.log(data);
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'http://httpbin.org/post');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', () => { 
            if (xhr.response.status) {
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

    if (!validateField(form.elements.checkbox)) {
        valid = false;
    } 

    return valid;
}  

// function validateField(field) {
 
//     field.next.ElementSibling.textContent = field.validationMessage;
//     return field.checkValidity();

// } 