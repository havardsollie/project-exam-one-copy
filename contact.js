const form = document.querySelector("#contactForm");

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const button = document.querySelector("#submitButton");
const submitMessage = document.querySelector("#submitMessage");

function formValidation(event) {
    event.preventDefault();

    if (lengthValidation(fullName.value, 4) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (lengthValidation(subject.value, 14) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (lengthValidation(message.value, 24) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    if (emailValidation(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
};

form.addEventListener("submit", formValidation);

function lengthValidation(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function emailValidation(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

fullName, subject, message.onchange = lengthValidation;

function enableButton() {
    if (fullName.value === "" && regEx.test(email.value) && subject.value === "" && message.value === "") {
        button.disabled = true;
        // submitMessage.style.display = "none";
     } else {
        button.disabled = false;
        // submitMessage.style.display = "block";
}

}

fullName, email, subject, message.addEventListener("change", enableButton);
