let menu = prompt("Seleccione su pizza:\n1. Muzzarella ($1000)\n2. Especial jamon ($1500)\n3. Especial morron ($1500)\n4. Especial anochoas ($1500)\n5. Completa jamon, morron y anchoas ($1900)");
let cantidad = prompt("Ingrese la cantidad de pizzas que desea ordenar:");

let precios = {
  1: 1000,
  2: 1500,
  3: 1500,
  4: 1500,
  5: 1900
};

let precio = precios[menu] || 0;
let total = precio * cantidad;

let formaDePago = prompt("¿Desea pagar con tarjeta o en efectivo?");
if (formaDePago === "tarjeta") {
  total *= 1.1;
}

let tiempoDeEntrega = {
  1: 20,
  2: 30,
  3: 30,
  4: 30,
  5: 30
};

let tiempoEstimado = tiempoDeEntrega[menu] * cantidad;

let nombresDestinatarios = [];
let saboresSeleccionados = [];

function agregarDestinatario() {
    let respuesta = prompt("¿Desea agregar un destinatario? (S/N)").toUpperCase();
    if (respuesta === "S") {
      let nombre = prompt("Ingrese el nombre del destinatario:");
      nombresDestinatarios.push(nombre);
      alert(`El destinatario de la pizza es: ${nombresDestinatarios.join(", ")}`);
      saboresSeleccionados.push(menu);
      agregarDestinatario();
    }
  }
  
  agregarDestinatario();
  

while (true) {
  let respuesta = prompt("¿Desea agregar un postre? (S/N)").toUpperCase();
  if (respuesta === "S") {
    let postre = prompt("Ingrese el postre que desea agregar:");
    let precioPostre = 500;
    let cantidadPostre = prompt("Ingrese la cantidad de postres que desea agregar:");
    let totalPostres = precioPostre * cantidadPostre;
    total += totalPostres;
    alert(`Se han agregado ${cantidadPostre} ${postre} a su orden. El precio total de su orden ahora es: $${total}.`);
  } else {
    break;
  }
}

let letraInicial = prompt("Ingrese la letra inicial por la que quiere filtrar los nombres de destinatarios:");
let nombresFiltrados = nombresDestinatarios.filter(nombre => nombre.charAt(0).toUpperCase() === letraInicial.toUpperCase());
alert(`Los destinatarios cuyos nombres comienzan con la letra ${letraInicial.toUpperCase()} son: ${nombresFiltrados.join(", ")}.`);
alert(`El precio total de su orden es: $${total}, y el tiempo de entrega estimado es de ${tiempoEstimado} minutos.`);