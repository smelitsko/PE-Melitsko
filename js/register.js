const arrayDeUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function Usuario(usuario, password) {
  this.usuario = usuario;
  this.password = password;
}

const ingreso = document.querySelectorAll("input");
const inputUser = ingreso[0];
const inputPassword = ingreso[1];
const btnIngresar = ingreso[2];
const formRegister = document.querySelector("#form-register");

function validarNuevoUsuario(usu) {
  return usu.length >= 8;
}

function validarNuevaPassword(pass) {
  let numeroPresente = false;
  for (let i = 0; i < pass.length; i++) {
    if (pass[i] >= 0) {
      numeroPresente = true;
      break;
    }
  }
  return pass.length >= 8 && numeroPresente;
}

function agregarNuevoUsuario(usu, pass) {
  if (validarNuevoUsuario(usu) && validarNuevaPassword(pass)) {
    let nuevoUsuario = new Usuario(usu, pass);
    arrayDeUsuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(arrayDeUsuarios));
    location.href = "./index.html";
  } else {
    Swal.fire("El usuario y/o password no cumplen con las condiciones");
  }
}

formRegister.addEventListener("submit", (event) => {
  agregarNuevoUsuario(inputUser.value, inputPassword.value);
  event.preventDefault();
});
