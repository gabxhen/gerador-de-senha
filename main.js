let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#value');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

const charset ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
let newPass = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = () => {
    sizePassword.innerHTML = sliderElement.value;
}

const generatePassword = () => {
    let pass = "";
    for(let i = 0; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * charset.length))
    }

    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPass(){
    alert("Sua senha foi copiada.")
    navigator.clipboard.writeText(novaSenha);
}