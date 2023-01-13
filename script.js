const submitButton = document.getElementById('btn-submit');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('e-mail');
const password = document.getElementById('password');
const inputs = document.getElementsByClassName('form-input');
const errorMessages = document.getElementsByClassName('error-message');

const validateFirstName = () => {
    if (firstName.value === '' && firstName.placeholder !== '') {
        const errorMessage = document.createElement('p');
        errorMessage.innerHTML = 'First Name cannot be empty';
        errorMessage.classList.add('error-message')
        firstName.parentElement.appendChild(errorMessage);
        firstName.classList.add('error-field');
        firstName.placeholder = '';
    }
};

const restoreFirstName = () => {
    firstName.addEventListener('click', () => {
        if (firstName.placeholder === '') {
            firstName.classList.remove('error-field');
            firstName.placeholder = 'First Name';
            firstName.parentElement.removeChild(firstName.nextElementSibling)
        }
    })
};

const validateLastName = () => {
    if (lastName.value === '' && lastName.placeholder !== '') {
        const errorMessage = document.createElement('p');
        errorMessage.innerHTML = 'Last Name cannot be empty';
        errorMessage.classList.add('error-message')
        lastName.parentElement.appendChild(errorMessage);
        lastName.classList.add('error-field');
        lastName.placeholder = '';
    }
};

const restoreLastName = () => {
    lastName.addEventListener('click', () => {
        if (lastName.placeholder === '') {
            lastName.classList.remove('error-field');
            lastName.placeholder = 'Last Name';
            lastName.parentElement.removeChild(lastName.nextElementSibling)
        }
    })
};

const validatePassword = () => {
    if (password.value === '' && password.placeholder !== '') {
        const errorMessage = document.createElement('p');
        errorMessage.innerHTML = 'Password cannot be empty';
        errorMessage.classList.add('error-message')
        password.parentElement.appendChild(errorMessage);
        password.classList.add('error-field');
        password.placeholder = '';
    }
};

const restorePassword = () => {
    password.addEventListener('click', () => {
        if (password.placeholder === '') {
            password.classList.remove('error-field');
            password.placeholder = 'Password';
            password.parentElement.removeChild(password.nextElementSibling)
        }
    })
};

const validadeEmail = () => {
    const validation = /\S+@\S+\.\S+/;
    if (!validation.test(email.value) && email.placeholder !== 'email@example.com') {
        const errorMessage = document.createElement('p');
        errorMessage.innerHTML = 'Looks like this is not an email';
        errorMessage.classList.add('error-message')
        email.parentElement.appendChild(errorMessage);
        email.classList.add('error-field');
        email.placeholder = 'email@example.com';
    }
};

const restoreEmail = () => {
    email.addEventListener('click', () => {
        if (email.placeholder === 'email@example.com') {
            email.classList.remove('error-field');
            email.placeholder = 'Email';
            email.parentElement.removeChild(email.nextElementSibling);
        }
    })
};

const submitForm = () => {
    submitButton.addEventListener('click', (event) => {
        validateFirstName();
        validateLastName();
        validatePassword();
        validadeEmail();
        if (errorMessages.length > 0) {
            event.preventDefault();
        };
    });
};

window.onload = () => {
    submitForm();
    restoreFirstName();
    restoreLastName();
    restorePassword();
    restoreEmail();
};
