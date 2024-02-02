const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirm-password");
const form = document.querySelector("#registrationForm");


const isEmailValid = (email) =>{
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};

const isPasswordSecure = (password) => {
    const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})");
    return regex.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


// Check the username 
const checkUsername = () =>{

    let valid = false;

    const min = 3,max = 20;
    const uname = username.value.trim();

    if(!isRequired(uname)){
        // error
        showError(username, 'Username cannot be blank');
    }else if(!isBetween(uname.length, min,max)){
        // error
        showError(username, `Username must be between ${min} and ${max} characters.`);
    }else{
        showSuccess(username);
        valid = true;
    }
    return valid;
}; 


// Check email
const checkEmail = () => {
    let valid = false;

    const uemail = email.value.trim();
    if(!isRequired(uemail)){
        showError(email,'Email cannot be blank.');
    }else if(!isEmailValid(uemail)){
        showError(email,'Email is not valid')
    }else{
        showSuccess(email);
        valid = true;
    }
    return valid;
}

// Check password
const checkPassword = () => {
    let valid = false;

    const upass = password.value.trim();
    // console.log("Password:", upass);

    if (!isRequired(upass)) {
        // console.log("Password is blank");
        showError(password, 'Password cannot be blank');
    } else if (!isPasswordSecure(upass)) {
        // console.log("Password is not secure");
        showError(password, 'Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        // console.log("Password is valid");
        showSuccess(password);
        valid = true;
    }
    // console.log("Valid:", valid);
};



// check confirm password
const checkConfirmPassword = () =>{
    let valid = false;

    // check confirm password
    const uconfirmpassword = confirmpassword.value.trim();
    const upass = password.value.trim();

    if(!isRequired(uconfirmpassword)){
        showError(confirmpassword, 'please enter the password again');
    }else if(upass !== uconfirmpassword){
        showError(confirmpassword,'The password does not match');
    }else{
        showSuccess(confirmpassword);
        valid = true;
    }
}

// Show error
const showError = (input, message) => {

    // Getting formgroup element
    const formField = input.parentElement;
    // adding the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // Showing the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};


// Show success
const showSuccess = (input) => {
    // get the formgroup element

    const formField = input.parentElement;
    // adding the error class
    formField.classList.add('success');
    formField.classList.remove('error');

    // Showing the error message
    const error = formField.querySelector('small');
    error.textContent = '';
};


// Submit function
form.addEventListener('submit',function(e){

    // prevent the form submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));