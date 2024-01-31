const lengthSlider = document.querySelector(".password__length input");
const options = document.querySelectorAll(".password__option input");
const copyIcon = document.querySelector(".password__inputbox i");
const passwordInput = document.querySelector(".password__inputbox input");
const passIndicator = document.querySelector(".password__indicator");
const generateBtn = document.querySelector(".password__button");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!$%&|[](){}:;.,*+-#@<>~"
};

const generatePassword = () => {
    let randomPassword = "";
    const passLength = parseInt(lengthSlider.value); // gets length from the slider

    // Concatenating selected character sets into a single string
    let selectedChars = "";
    options.forEach(option => {
        if (option.checked) {
            selectedChars += characters[option.id];
        }
    });

    // Generate random password
    for (let i = 0; i < passLength; i++) {
        const randomIndex = Math.floor(Math.random() * selectedChars.length);
        randomPassword += selectedChars[randomIndex];
    }

    // Update the password input field with the generated password
    passwordInput.value = randomPassword;

    // Update password strength indicator
    updatePassIndicator();
};

// Password Indicator function
const updatePassIndicator = () => {
    passIndicator.id = lengthSlider.value <= 8 ? "weak" :
        lengthSlider.value <= 16 ? "medium" : "strong";
};

// Password Slider
const updateSlider = () => {
    document.querySelector(".password__length span").innerHTML = lengthSlider.value;
    // generatePassword();
};

// Copy password
const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.style.color = "#b9e0f2";
    setTimeout(() => {
        copyIcon.style.color = "#fff";
    }, 500);
};

copyIcon.addEventListener("click", copyPassword);
lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);

// Initial generation of password and update of password strength indicator
updateSlider();

// Disclaimer
alert("Disclaimer:\n\n\tThis password generator is make for my learning purposes only.\n\tWhile it can generate strong passwords,\n\tit's important to remember that no password can guarantee complete security.\n\tPlease use generated passwords responsibly and consider additional security measures for sensitive accounts.🔒💡\n\n\t\t\t\tMade with ❤️ by @Rocky");

