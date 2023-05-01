const signUpBtn = document.querySelector('#signUpBtn');
signUpBtn.addEventListener('click', signUp);

const signInBtn = document.querySelector('#signInBtn');
signInBtn.addEventListener('click', signIn);

const btnReg = document.querySelector('.form__link-reg');
btnReg.addEventListener('click', toggleView);

const btnAuth = document.querySelector('.form__link-auth');
btnAuth.addEventListener('click', toggleView);

function toggleView (event) {
    event.preventDefault();
    const FormReg = document.querySelector('#registration');
    const FormAuth = document.querySelector('#authorization')
    if (FormReg.style.display === 'none') {
        FormReg.style.display='flex'
        FormAuth.style.display='none'
    } else {
        FormReg.style.display='none'
        FormAuth.style.display='flex'
    }
    
    
}

function signUp(event) {
    event.preventDefault();
    const emailIsValid = validateEmailReg();
    const passwordIsValid = validatePasswordReg();
    const checkIsValid = validateCheckboxReg()

    if(emailIsValid && passwordIsValid && checkIsValid){
        const email = document.querySelector('#userEmail-reg').value;
        const password = document.querySelector('#userPassword-reg').value;
        const user = {email, password};
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (!users.find(({email}) => user.email === email)){
            users.push(user)
            localStorage.setItem('users', JSON.stringify(users))
        } else alert('Такой пользователь уже существует')
    }
};

function signIn(event) {
    event.preventDefault();
    const emailIsValid = validateEmailAuth();
    const passwordIsValid = validatePasswordAuth();
    if(emailIsValid && passwordIsValid){
        const email = document.querySelector('#userEmail-auth').value;
        const password = document.querySelector('#userPassword-auth').value;
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(user => user.email === email && user.password === password)) {
            alert('Вы успешно вошли!')
        } else alert('Ошибка авторизации')
    }
};

function validateEmailReg () {
    const emailReg = document.querySelector('#userEmail-reg');
    const emailErrorrBox = document.querySelector('.error__email-reg');
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        if (!isEmpty(emailReg, emailErrorrBox)) {
            if (emailRegExp.test(emailReg.value)) {
                toggleErrorMessage(emailReg, emailErrorrBox);
                return true
            } else {
                toggleErrorMessage(emailReg, emailErrorrBox, 'Email не валидный');
            }       
        } 
        return false
};

function validateEmailAuth () {
    const emailAuth = document.querySelector('#userEmail-auth');
    const emailErrorrBox = document.querySelector('.error__email-auth');
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (!isEmpty(emailAuth, emailErrorrBox)) {
                if (emailRegExp.test(emailAuth.value)) {
                    toggleErrorMessage(emailAuth, emailErrorrBox);
                    return true
                } else {
                    toggleErrorMessage(emailAuth, emailErrorrBox, 'Email не валидный');
                }       
            } 
            return false
        };

function validatePasswordReg () {
            const passwordReg = document.querySelector('#userPassword-reg');
            const passwordErrorBox = document.querySelector('.error__password-reg');
                if (!isEmpty(passwordReg, passwordErrorBox)) {
                    if (passwordReg.value.length >= 8) {
                        toggleErrorMessage(passwordReg, passwordErrorBox);
                        return true
                    } else {
                        toggleErrorMessage(passwordReg, passwordErrorBox, 'Пароль должен содержать как минимум 8 символов' );
                                 
                    }
                }  
                return false 
    };

function validatePasswordAuth () {
    const passwordAuth = document.querySelector('#userPassword-auth');
    const passwordErrorBox = document.querySelector('.error__password-auth');
        if (!isEmpty(passwordAuth, passwordErrorBox)) {
            if (passwordAuth.value.length >= 8) {
                toggleErrorMessage(passwordAuth, passwordErrorBox);
                return true
            } else {
                toggleErrorMessage(passwordAuth, passwordErrorBox, 'Пароль должен содержать как минимум 8 символов' );
                         
            }
        }  
        return false 
};

function validateCheckboxReg () {
    const checkboxReg = document.querySelector('#userCheck-reg');
    const checkboxErrorBox = document.querySelector('.error__checkbox-reg');
        if (checkboxReg.checked) {
                toggleErrorMessage(checkboxReg, checkboxErrorBox);
                return true
            } else {
                toggleErrorMessage(checkboxReg, checkboxErrorBox, 'Поле обязательно для заполнения' );    
            }
        return false 
};

function isEmpty(inputElement, errorBox){
    if (inputElement.value.length === 0){
        toggleErrorMessage(inputElement, errorBox, 'Поле обязательно для заполнения')
        return true
    } else {
        toggleErrorMessage(inputElement, errorBox)
    }
    return false
};

function toggleErrorMessage (inputElement, errorBox, errorMessage) {
    const lableRed = document.querySelectorAll('.form__lable, .form__wrapper');

    if (errorMessage) {
        inputElement.classList.add('form__input-error');
        errorBox.textContent = errorMessage;
        errorBox.style.display = 'block';
        if (errorBox.style.display = 'block') {
            for (const lable of lableRed) {
                lable.classList.add('form__lable-error');
                lable.style.display = 'block';
            }
        } else if (errorBox.style.display = 'none'){
            for (const lable of lableRed) {
                lable.classList.remove('form__lable-error');
                lable.style.display = 'none';
            }
        };
    } else {
        inputElement.classList.remove('form__input-error');
        for (const lable of lableRed) {
            lable.classList.remove('form__lable-error');
        }        
        errorBox.style.display = 'none'
    }
};



