/* INICIALIZAR NOMBRE DE USUARIO Y PASSWORD */
let usuarioRegistrado = "desconocido";
let passwordRegistrada = "desconocido999";

/* MENU PRINCIPAL DE INGRESO*/
ingreso = prompt(
  "¡Bienvenid@s a LiberArt! \n Presione la tecla 1 para crear un nuevo usuario o cualquier otra tecla para continuar con usuario existente"
);

/* GESTIONAR UNA CUENTA CON PASSWORD */
if (ingreso === "1") {
  //Opción 1: Crear nuevo usuario y password
  let usuarioIngresado = prompt(
    "Ingrese un nombre de usuario de al menos 8 caracteres"
  );
  while (checkUsuario(usuarioIngresado) == false) {
    usuarioIngresado = prompt(
      "El usuario ingresado no cumple con los requisitos intente nuevamente "
    );
  }
  alert("El usuario ha sido correctamente registrado");
  usuarioRegistrado = usuarioIngresado;
  let passwordIngresada = prompt(
    "Ingrese una palabra clave de al menos 8 caracteres que contenga al menos 1 número"
  );
  while (checkPassword(passwordIngresada) == false) {
    passwordIngresada = prompt(
      "La password ingresada no cumple con los requisitos intente nuevamente "
    );
  }
  alert("La password ha sido correctamente registrada");
  passwordRegistrada = passwordIngresada;
}

/*Opción 2: ingresar con usuario y password creados previamente*/
let check = false;
while (check == false) {
  usuarioIngresado = prompt("Ingrese nombre de usuario");
  passwordIngresada = prompt("Ingrese su password");
  check = controlarIngreso(usuarioIngresado, passwordIngresada);
}

/*FUNCIONES*/
// Funciones para controlar si el nombre de usuario tiene al menos 8 caracteres y si el password ingresado tiene al menos un número y al menos 8 caracteres (si cumple ambas condiciones returna "true")
function checkUsuario(usu) {
  return usu.length >= 8;
}

function checkPassword(pass) {
  let numeroPresente = false;
  for (let i = 0; i < pass.length; i++) {
    if (pass[i] >= 0) {
      numeroPresente = true;
      break;
    }
  }
  return pass.length >= 8 && numeroPresente;
}

function controlarIngreso(usu, pass) {
  if (usu == usuarioRegistrado && pass == passwordRegistrada) {
    alert("Bienvenida " + usu);
    return true;
  } else {
    alert("Credenciales incorrectas");
    return false;
  }
}

/* SELECCIONAR UN LIBRO DE UN MENU */

let condicionDeSalida = false;
let carrito = 0;
while (condicionDeSalida == false) {
  let productoSeleccionado = prompt(
    "Agregar al carrito de " +
      usuarioRegistrado +
      ": \n 1- La paciencia del agua sobre cada piedra ($15000) \n 2- Las niñas del naranjel ($10000) \n 3- Apegos Feroces ($12000) \n 4- Las primas ($20000) \n 5- Salir"
  );
  switch (productoSeleccionado) {
    case "1":
      carrito = carrito + 15000;
      alert(
        "Seleccionaste 'La paciencia del agua. sobre cada piedra' \n Tu carrito tiene un saldo de $" +
          carrito
      );
      break;
    case "2":
      carrito = carrito + 10000;
      alert(
        "Seleccionaste 'Las niñas del naranjel' \n Tu carrito tiene un saldo de $" +
          carrito
      );
      break;
    case "3":
      carrito = carrito + 12000;
      alert(
        "Seleccionaste 'Apegos Feroces' \n Tu carrito tiene un saldo de $" +
          carrito
      );
      break;
    case "4":
      carrito = carrito + 20000;
      alert(
        "Seleccionaste 'Las primas' \n Tu carrito tiene un saldo de $" + carrito
      );
      break;
    case "5":
      alert(
        "Seleccionaste 'Salir' \n Tu carrito tiene un saldo de $" + carrito
      );
      condicionDeSalida = true;
      break;
    default:
      alert("Opción no válida");
      break;
  }
}
