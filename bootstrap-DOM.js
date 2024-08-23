const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const retypePassword = document.getElementById("retypepassword"); // Pastikan ID elemen HTML sesuai

form.addEventListener("submit", e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = '';

    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const retypePasswordValue = retypePassword.value.trim();

    // 1. Cek email
    if (emailValue === "") {
        setError(email, "Masukkan Email");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Email tidak Valid");
    } else {
        setSuccess(email);
    }

    // 2. Cek username
    if (usernameValue === "") {
        setError(username, "Masukkan User Name");
    } else if (usernameValue.length < 5) { // Perbaiki typo "lenght" menjadi "length"
        setError(username, "User Name Harus Lebih dari 5 Karakter");
    } else {
        setSuccess(username);
    }

    // 3. Cek password
    if (passwordValue === "") {
        setError(password, "Masukkan password");
    } else if (passwordValue.length < 5) { // Perbaiki typo "lenght" menjadi "length"
        setError(password, "Password Harus Lebih dari 4 Karakter");
    } else {
        setSuccess(password);
    }

    // 4. Cek retype password
    if (retypePasswordValue === "") {
        setError(retypePassword, "Masukkan Ulang password");
    } else if (retypePasswordValue !== passwordValue) {
        setError(retypePassword, "Password Tidak Sama");
    } else {
        setSuccess(retypePassword);
    }
}
