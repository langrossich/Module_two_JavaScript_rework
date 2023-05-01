const form = document.querySelector('.form');
const formInputs = document.querySelectorAll('.input-required');
const inputUserEmail = document.querySelector('#userEmail');
const inputUserPassword = document.querySelector('#userPassword');
const inputCheckBox = document.querySelector('#userCheck');




function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
}

form.onsubmit = function () {
    const emailValid = inputUserEmail.value;
    const passwordValid = inputUserPassword.value;
    const emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function(input) {
        if (input.value === '') {
            input.classList.add('form-container__input-error');
        } else {
            input.classList.remove('form-container__input-error');
        }
    });
    
    if (emptyInputs.length !== 0 ) {
        return false
    } 

    if (!validateEmail(emailValid)) {
        let spanEmail = document.querySelector('.error-email').textContent = 'Email невалидный';
        spanEmail.style.display ='block';
        inputEmail.classList.add('form-container__input-error');
        return false
    } else {
        spanEmail.style.display ='none';
        inputEmail.classList.remove('form-container__input-error')
    };

    if(!inputCheckBox.checked) {
        let spanCheckbox = document.querySelector('.error-checkbox').textContent = 'Поле обязательно для заполнения'
        spanCheckbox.style.display ='block';
        inputCheckBox.classList.add('form-container__input-error')
        return false
    } else {
        spanCheckbox.style.display ='none';
        inputCheckBox.classList.remove('form-container__input-error')
    };

    if (passwordValid.length < 8) {
        let spanPassword = document.querySelector('.error-password').textContent = 'Пароль должен содержать как минимум 8 символов'
        spanPassword.style.display ='block';
        passwordValid.classList.add('form-container__input-error')
        return false
    } else {
        spanPassword.style.display ='none';
        passwordValid.classList.remove('form-container__input-error')
    };

    }
    





