/* DECLARACION DE CONSTANTES (variables y arrays)*/
const mensajeBienvenida =
  "¡Bienvenid@s a LiberArt! \n Presioná la tecla 1 para crear un nuevo usuario o cualquier otra tecla para continuar con usuario existente";
const mensajeMenuPrincipal =
  "Elegí alguna de las siguientes opciones: \n 1 - Encontrar un libro por título \n 2 - Filtrar libros por género  \n 3 - Filtrar libros por rango de precios \n 4 - Ver contenido del carrito \n 5- Salir";
const categoriaDeLibros = ["ficción latinoamericana", "no ficción", "poesía"];
const carritoDeLibros = [];
const arrayDeUsuarios = [
  new Usuario("silvanita", "mipalabraclave10001"),
  new Usuario("lectoravezado", "elnombredemihija103"),
  new Usuario("juandeboedo", "fanaticodelciclon1963"),
  new Usuario("marianadecaballito", "firulais2020"),
];
const arrayDeLibros = [
  new Libro(
    "Las niñas del naranjel",
    "Gabriela Cabezón Cámara",
    "Random House",
    "ficción latinoamericana",
    18199,
    10
  ),
  new Libro(
    "La paciencia del agua sobre cada piedra",
    "Alejandra Kamiya",
    "Eterna Cadencia",
    "ficción latinoamericana",
    15000,
    4
  ),
  new Libro(
    "El ruido de una época",
    "Ariana Harwicz",
    "Marciana",
    "no ficción",
    11890,
    6
  ),
  new Libro(
    "Las primas",
    "Aurora Venturini",
    "Tusquets",
    "ficción latinoamericana",
    23000,
    8
  ),
  new Libro(
    "Las malas",
    "Camila Sosa Villada",
    "Tusquets",
    "ficción latinoamericana",
    24000,
    3
  ),
  new Libro(
    "La belleza del marido",
    "Anne Carson",
    "Zindo & Gafuri",
    "poesía",
    18200,
    4
  ),
  new Libro(
    "Ultimos poemas en prozac",
    "Fabián Casas",
    "Emece",
    "poesía",
    12900,
    5
  ),
  new Libro(
    "Libros chiquitos",
    "Tamara Kamenszain",
    "Eterna Cadencia",
    "poesía",
    9300,
    10
  ),
];

/* CONSTRUCTORES */
function Usuario(usuario, password) {
  this.usuario = usuario;
  this.password = password;
}

function Libro(titulo, autor, editorial, genero, precio, stock) {
  this.titulo = titulo;
  this.autor = autor;
  this.editorial = editorial;
  this.genero = genero;
  this.precio = precio;
  this.stock = stock;
  this.mostrarInformacionCompleta = function () {
    return (
      "Título: " +
      this.titulo +
      "\nAutor: " +
      this.autor +
      "\nEditorial: " +
      this.editorial +
      "\nGénero: " +
      this.genero +
      "\nPrecio: $" +
      this.precio +
      "\nStock: " +
      this.stock
    );
  };
  this.mostrarInformacionParcial = function () {
    return (
      "Título: " +
      this.titulo +
      "\nAutor: " +
      this.autor +
      "\nPrecio: $" +
      this.precio
    );
  };
}

/*FUNCIONES DE VALIDACION DE USUARIO Y PASSWORS*/
// Funciones para controlar si el nombre de usuario tiene al menos 8 caracteres y si el password ingresado tiene al menos un número y al menos 8 caracteres (si cumple ambas condiciones returna "true")
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

//Agregar nuevo usuario al array
function agregarNuevoUsuario(usu, pass) {
  let nuevoUsuario = new Usuario(usu, pass);
  arrayDeUsuarios.push(nuevoUsuario);
  return nuevoUsuario;
}

//Permitir el ingreso de usuarios con datos coincidentes con los almacenados en el array
function controlarIngreso(usu, pass) {
  let usuarioEncontrado = arrayDeUsuarios.find((el) => el.usuario == usu);
  let usuarioValidado = usuarioEncontrado && usuarioEncontrado.password == pass;
  if (usuarioValidado == true) {
    alert("Bienvenido " + usu);
  } else {
    alert("Credenciales incorrectas");
  }
  return usuarioValidado;
}

/* FUNCIONES DE BUSQUEDA Y FILTRADO */

function buscarPorTitulo(arr) {
  const filtro = prompt("Escriba el título buscado");
  const libroEncontrado = arr.find((el) => el.titulo.includes(filtro));
  return libroEncontrado;
}

function filtrarPorPrecio(arr) {
  const masBajo = parseFloat(prompt("Ingrese el límite inferior"));
  const masAlto = parseFloat(prompt("Ingrese el límite superior"));
  return arr.filter((el) => el.precio >= masBajo && el.precio <= masAlto);
}

function filtrarPorGenero(arr) {
  const categoriaElegida = prompt(
    "Elegir alguna de las siguientes categorias: \n 1 - ficción latinoamericana \n 2 - no ficción \n 3 - poesía"
  );
  const filtro = categoriaDeLibros[parseFloat(categoriaElegida) - 1];
  return arr.filter((el) => el.genero == filtro);
}

//Muestra información de libros en un array y pregunta si quiere ingresarlos al carrito
function mostrarInformacionLibros(arr) {
  if (arr.length == 0) {
    alert("No hay libros que cumplan con los criterios seleccionados");
  } else {
    for (i = 0; i < arr.length; i++) {
      let libro = arr[i];
      let opcionCarrito = prompt(
        libro.mostrarInformacionCompleta() +
          "\n ¿Agregar este libro al carrito? \n 1 - Sí \n 2 - No"
      );
      if (opcionCarrito == "1") {
        agregarLibroCarrito(carritoDeLibros, libro);
      }
    }
  }
}

function agregarLibroCarrito(arr, el) {
  arr.push(el);
  return arr;
}

/* FUNCIONES DE OPERACION DEL CARRITO */
function mostrarInformacionCarrito() {
  let texto = [];
  for (i = 0; i < carritoDeLibros.length; i++) {
    let libro = carritoDeLibros[i];
    texto = texto + libro.mostrarInformacionParcial() + "\n\n";
  }
  alert(texto + "El total a pagar es: $" + calcularTotal());
}

function calcularTotal() {
  return carritoDeLibros.reduce((acc, el) => {
    return (acc = acc + el.precio);
  }, 0);
}

function pagar() {
  alert("Ingrese a continuación los datos de su tarjeta de crédito.");
  const nombre = prompt("Nombre: ");
  const apellido = prompt("Apellido: ");
  const tarjetaDeCredito = prompt("Número de tarjeta: ");
  const confirmarPago = prompt(
    "Se debitará de su tarjeta el monto de: $" +
      calcularTotal() +
      "\n Presione 1 para confirmar."
  );
  if (confirmarPago == "1") {
    return "Pago confirmado";
  } else {
    return "Operación cancelada";
  }
}

/* MENU PRINCIPAL DE INGRESO*/
let ingreso = prompt(mensajeBienvenida);

/* GESTIONAR UNA CUENTA CON PASSWORD */
if (ingreso == "1") {
  //Opción 1: Crear nuevo usuario y password
  let usuarioIngresado = prompt(
    "Ingrese un nombre de usuario de al menos 8 caracteres"
  );
  while (validarNuevoUsuario(usuarioIngresado) == false) {
    usuarioIngresado = prompt(
      "El usuario ingresado no cumple con los requisitos intente nuevamente "
    );
  }
  alert("El usuario ha sido correctamente registrado");
  let passwordIngresada = prompt(
    "Ingrese una palabra clave de al menos 8 caracteres que contenga al menos 1 número"
  );
  while (validarNuevaPassword(passwordIngresada) == false) {
    passwordIngresada = prompt(
      "La password ingresada no cumple con los requisitos intente nuevamente "
    );
  }
  alert("La password ha sido correctamente registrada");
  const usuarioActual = agregarNuevoUsuario(
    usuarioIngresado,
    passwordIngresada
  );
  alert("Bienvenido  " + usuarioActual.usuario);
} else {
  let check = false;
  while (!check) {
    usuarioIngresado = prompt("Ingrese nombre de usuario");
    passwordIngresada = prompt("Ingrese su password");
    check = controlarIngreso(usuarioIngresado, passwordIngresada);
  }
}

//CREAR UN MENU DE OPCIONES PARA BUSCAR LIBROS Y OPERAR CON EL CARRITO
let condicionDeSalida = false;
while (condicionDeSalida == false) {
  const opcionMenuPrincipal = prompt(mensajeMenuPrincipal);
  switch (opcionMenuPrincipal) {
    case "1":
      const libroPorTitulo = buscarPorTitulo(arrayDeLibros);
      if (libroPorTitulo) {
        mostrarInformacionLibros([libroPorTitulo]);
      } else {
        alert("Título no encontrado");
      }
      break;
    case "2":
      const librosPorGenero = filtrarPorGenero(arrayDeLibros);
      mostrarInformacionLibros(librosPorGenero);
      break;
    case "3":
      const librosPorPrecio = filtrarPorPrecio(arrayDeLibros);
      mostrarInformacionLibros(librosPorPrecio);
      break;
    case "4":
      mostrarInformacionCarrito();
      const comprar = prompt("¿Desea finalizar la compra? \n 1 - Sí \n 2 - No");
      if (comprar == "1") {
        alert(pagar());
      }
      break;
    case "5":
      condicionDeSalida = true;
      break;
    default:
      alert("Opción no válida. Elija un número 1-5");
      break;
  }
}
