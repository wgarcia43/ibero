const formulario = document.querySelector("#formulario");
const userName = document.querySelector("input[name='name']");
const userEmail = document.querySelector("input[name='email']");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
});

function sendContact(){
validarEmail(userEmail.value)
}

function validarEmail(valor) {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
        alert("La dirección de email " + valor + " es correcta.");
    } else {
        alert("La dirección de email es incorrecta.");
    }
}