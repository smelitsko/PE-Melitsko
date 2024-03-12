//Recupera el array de usuarios almacenado en local storage; si no existe inicializa como vacío.
const arrayDeUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//A título ilustrativo agrego algunos usuarios para probar el funcionamiento en una computadora sin local storage; se pueden comentar estas líneas
arrayDeUsuarios.push("silvanita", "mipalabraclave10001");
arrayDeUsuarios.push("lectoravezado", "elnombredemihija103");
arrayDeUsuarios.push("juandeboedo", "fanaticodelciclon1963");
arrayDeUsuarios.push("marianadecaballito", "firulais2020");

function Usuario(usuario, password) {
  this.usuario = usuario;
  this.password = password;
}

const ingreso = document.querySelectorAll("input");
const inputUser = ingreso[0];
const inputPassword = ingreso[1];
const check = ingreso[2];
const btnIngresar = ingreso[3];
const formLogin = document.querySelector("#form-login");

//FORMULARIO DE INGRESO
//Permitir el ingreso de usuarios con datos coincidentes con los almacenados en el array o en el local storage

function controlarIngreso(usu, pass) {
  let usuarioEncontrado = arrayDeUsuarios.find((el) => el.usuario == usu);
  let usuarioValidado = usuarioEncontrado && usuarioEncontrado.password == pass;
  if (usuarioValidado == true) {
    guardarEnStorage(check.checked);
  }
  return usuarioValidado;
}

//La función guardarEnStorage tiene por parámetro una variable booleana que vale true si el usuario seleccionó "recordar" contraseña y false de otra manera. En el primer caso almacena credenciales en local storage, en el segundo almacena en session
function guardarEnStorage(recordarPass) {
  const credenciales = { usuario: inputUser.value, pass: inputPassword.value };
  const credEnJson = JSON.stringify(credenciales);
  recordarPass
    ? localStorage.setItem("credenciales", credEnJson)
    : sessionStorage.setItem("credenciales", credEnJson);
}

formLogin.addEventListener("submit", (event) => {
  let usuarioValidado = controlarIngreso(inputUser.value, inputPassword.value);
  usuarioValidado == true
    ? window.location.replace("./service.html")
    : Swal.fire("Credenciales incorrectas");
  event.preventDefault();
});
