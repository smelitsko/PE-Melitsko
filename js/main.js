/* INICIALIZAR NOMBRE DE USUARIO Y PASSWORD */
let usuarioRegistrado = "smelitsko";
let passwordRegistrada = "mipassword666";

/* MENU PRINCIPAL DE INGRESO*/
ingreso = prompt(
  "¡Bienvenid@s a LiberArt! \nSeleccione alguna de las siguientes opciones:\n 1 - Nuevo usuario \n 2 - Ingresar con usuario existente"
);

/* GESTIONAR UNA CUENTA CON PASSWORD */
if (ingreso === "1") {
  /*PRIMERA OPCION: INGRESAR NUEVO USUARIO*/
  //PASO 1: Ingreso y control de usuario
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
  //PASO 2: Ingreso y control de password
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
} else if (ingreso === "2") {
  /*SEGUNDA OPCION: INGRESO CON USUARIO Y PASSWRD*/
  usuarioIngresado = prompt("Ingrese nombre de usuario");
  passwordIngresada = prompt("Ingrese su password");
  if (
    usuarioIngresado == usuarioRegistrado &&
    passwordIngresada == passwordRegistrada
  ) {
    alert("Bienvenida " + usuarioIngresado);
  } else {
    alert("Credenciales incorrectas");
  }
} else {
  prompt("Seleccione 1 o 2 por favor");
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

/* SELECCIONAR UN LIBRO DE UN MENU */

let condicionDeSalida = false;
let carrito = 0;
while (condicionDeSalida == false) {
  let productoSeleccionado = prompt(
    "Agregar al carrito: \n 1- La paciencia del agua sobre cada piedra ($15000) \n 2- Las niñas del naranjel ($10000) \n 3- Apegos Feroces ($120000) \n 4- Las primas ($20000) \n 5- Salir"
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
