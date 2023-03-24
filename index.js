// Obtener elementos del DOM
const menu = document.getElementById("menu");
const cantidad = document.getElementById("cantidad");
const tarjeta = document.getElementById("tarjeta");
const calcularTotalBtn = document.getElementById("calcularTotal");
const destinatarioInput = document.getElementById("destinatarioInput");
const agregarDestinatarioBtn = document.getElementById("agregarDestinatarioButton");
const listaDestinatarios = document.getElementById("listaDestinatarios");
const formPostre = document.getElementById("formPostre");
const nombrePostreInput = document.getElementById("nombrePostre");
const cantidadPostreInput = document.getElementById("cantidadPostre");
const listaPostres = document.getElementById("listaPostres");
const letraInicialInput = document.getElementById("letraInicial");
const filtrarDestinatariosBtn = document.getElementById("filtrarDestinatarios");
const totalSpan = document.getElementById("totalSpan");
const tiempoSpan = document.getElementById("tiempoSpan");

// Definir variables globales para el costo y tiempo de entrega
let costoTotal = 0;
let tiempoTotal = 0;

// Calcular el costo y tiempo de entrega
function calcularCostoYTiempo() {
  const pizzaId = menu.value;
  const pizza = menuOptions.find(pizza => pizza.id === pizzaId);
  const cantidadPizzas = parseInt(cantidad.value);
  let precioTotal = pizza.price * cantidadPizzas;
  let tiempoEntrega = cantidadPizzas * 10; // cada pizza tarda 10 minutos en hacerse

  // Obtener fecha y hora actual
  const ahora = luxon.DateTime.local();
  
  // Calcular fecha y hora de entrega sumando el tiempo de entrega
  const entrega = ahora.plus({ minutes: tiempoEntrega });
  const fechaEntrega = entrega.toFormat("DD/MM/YYYY");
  const horaEntrega = entrega.toFormat("HH:mm");

  // Actualizar elementos del DOM con la fecha y hora de entrega
  const fechaEntregaSpan = document.getElementById("fechaEntregaSpan");
  const horaEntregaSpan = document.getElementById("horaEntregaSpan");
  fechaEntregaSpan.innerText = fechaEntrega;
  horaEntregaSpan.innerText = horaEntrega;
}


  // Si se paga con tarjeta, se agrega un 10% de recargo
  if (tarjeta.checked) {
    precioTotal = precioTotal * 1.1;
  }

  // Actualizar variables globales y elementos del DOM
  costoTotal = precioTotal;
  tiempoTotal = tiempoEntrega;
  totalSpan.innerText = `$${precioTotal.toFixed(2)}`;
  tiempoSpan.innerText = `${tiempoEntrega} minutos`;


// Generar opciones para el select del menú de pizzas
function generarOpcionesMenu(menuOptions) {
  let opciones = "";

  for (const pizza of menuOptions) {
    opciones += `<option value="${pizza.id}">${pizza.name} ($${pizza.price})</option>`;
  }

  menu.innerHTML = opciones;
}

// Cargar datos del menú desde un archivo JSON
fetch('index.json')
  .then(response => response.json())
  .then(data => {
    const menuOptions = data.menu;
    generarOpcionesMenu(menuOptions);

    // Calcular el costo y tiempo de entrega al cambiar el valor del select o la cantidad
    menu.addEventListener("change", calcularCostoYTiempo);
    cantidad.addEventListener("input", calcularCostoYTiempo);
    tarjeta.addEventListener("click", calcularCostoYTiempo);
    calcularTotalBtn.addEventListener("click", calcularCostoYTiempo);
  });
