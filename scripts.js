const numberArray = [1,2,3,4,5,6,7,8,9,0];
const specialCharacterArray = ["@", "!", "?", "#"]

function limitInputLength (input) {
    if (input.value.length > 11){
        input.value = input.value.slice(0, 11);
    }
};


function checkPasswordEligibility (input) {
    let numberCheck = false;
    let specialCharacterCheck = false;
    for (const iterator of numberArray) {
        if (input.value.includes(iterator)){
            numberCheck = true;
        }
    }
    for (const iterator of specialCharacterArray) {
        if (input.value.includes(iterator)){
            specialCharacterCheck = true;
        }
    }

    if (!numberCheck || !specialCharacterCheck){
        input.classList.remove("normalList");
        input.classList.add("invalid");
        // input.style.borderColor = "red";
    } else if (numberCheck && specialCharacterCheck){
        // input.style.borderColor = "green";
        input.classList.remove("invalid");
        input.classList.add("valid");
    }

    if (input.value.length === 0){
        input.classList.remove("invalid");
        input.classList.remove("valid");
        input.classList.add("normalList");
    }
};

function checkPasswordMatch (input) {
    const otherPassword = document.querySelector("#password").value;
    if (input.value != otherPassword) {
        input.classList.remove("normalList");
        input.classList.add("invalid");
    } else if (input.value.length !== 0){
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else if (input.value.length === 0){
        input.classList.remove("invalid");
        input.classList.add("normalList");
    }
};

// const passwordSelect = document.querySelector("#password");
// const confirmPasswordSelect = document.querySelector("#confirm_password");

// passwordSelect.addEventListener('click', function (event) {

// });

function passwordSelect (input) {
    let numberCheck = false;
    let specialCharacterCheck = false;
    for (const iterator of numberArray) {
        if (input.value.includes(iterator)){
            numberCheck = true;
        }
    }
    for (const iterator of specialCharacterArray) {
        if (input.value.includes(iterator)){
            specialCharacterCheck = true;
        }
    }

    if (!numberCheck || !specialCharacterCheck){
        input.classList.remove("normalList");
        input.classList.add("invalid");
        // input.style.borderColor = "red";
    } else if (numberCheck && specialCharacterCheck){
        // input.style.borderColor = "green";
        input.classList.remove("invalid");
        input.classList.add("valid");
    }

    if (input.value.length === 0){
        input.classList.remove("invalid");
        input.classList.remove("valid");
        input.classList.add("normalList");
    }
};

function confirmPasswordSelect (input) {
    const otherPassword = document.querySelector("#password").value;
    if (input.value != otherPassword) {
        input.classList.remove("normalList");
        input.classList.add("invalid");
    } else if (input.value.length !== 0 && input.value === otherPassword) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
};




function removePasswordFocus (input) {
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirm_password")
    password.classList.remove("invalid");
    password.classList.remove("valid");
    password.classList.add("normalList");

    confirmPassword.classList.remove("invalid");
    confirmPassword.classList.remove("valid");
    confirmPassword.classList.add("normalList");
};

const bodyClick = document.querySelector("body");
bodyClick.addEventListener('click', function (event) {
    const inputElements = document.querySelector(".normalList");
    if (event.target.nodeName !== 'INPUT'){
        const password = document.querySelector("#password");
        const confirmPassword = document.querySelector("#confirm_password")
        password.classList.remove("invalid");
        password.classList.remove("valid");
        password.classList.add("normalList");
    
        confirmPassword.classList.remove("invalid");
        confirmPassword.classList.remove("valid");
        confirmPassword.classList.add("normalList");
    }
});