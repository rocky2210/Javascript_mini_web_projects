const uname = document.getElementById("floatingName");
const email = document.getElementById("floatingEmail");
const dob = document.getElementById("floatingDOB");
const gender = document.getElementById("floatingGender");
const password = document.getElementById("floatingPassword");
const registration = document.getElementById("registrationForm");

function validateForm(event){
    
    let isValid = true;
    if(uname.value.trim() === ''){
        document.getElementById('name-error').textContent = 'Please enter your name';
        document.getElementById('floatingName').style.borderColor = "red";
        showError(floatingName);
        isValid = false;
    }else{
        document.getElementById('name-error').textContent = '';
        document.getElementById('floatingName').style.borderColor = '';
    }

    if (email.value.trim() === '') {
        document.getElementById('email-error').textContent = 'Please enter your email';
        document.getElementById('floatingEmail').style.borderColor = "red";
        showError(floatingEmail);
        isValid = false;
    } else {
        document.getElementById('email-error').textContent = '';
        document.getElementById('floatingEmail').style.borderColor = "";
    }

    if (dob.value.trim() === '') {
        document.getElementById('dob-error').textContent = 'Please select your date of birth';
        document.getElementById('floatingDOB').style.borderColor = "red";
        showError(floatingDOB);
        isValid = false;
    } else {
        document.getElementById('dob-error').textContent = '';
        document.getElementById('floatingDOB').style.borderColor = "";
    }

    if (gender.value === '') {
        document.getElementById('gender-error').textContent = 'Please select your gender';
        document.getElementById('floatingGender').style.borderColor = "red";
        showError(floatingGender);
        isValid = false;
    } else {
        document.getElementById('gender-error').textContent = '';
        document.getElementById('floatingGender').style.borderColor = "";
    }

    if (password.value.trim() === '') {
        document.getElementById('password-error').textContent = 'Please enter your password';
        document.getElementById('floatingPassword').style.borderColor = "red";
        showError(floatingPassword);
        isValid = false;
    } else {
        document.getElementById('password-error').textContent = '';
        document.getElementById('floatingPassword').style.borderColor = "";
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
};

function showError(element){
    element.classList.add('animate__animated', 'animate__shakeX');
    setTimeout(() => {
        element.classList.remove('animate__animated', 'animate__headShake');
    },130);
}

registration.addEventListener("submit",validateForm);