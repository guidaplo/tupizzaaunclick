let precios = {
  "1": 1000,
  "2": 1500,
  "3": 1500,
  "4": 1500,
  "5": 1900,
};

let menuSelect = document.getElementById("menu");
let cantidadInput = document.getElementById("cantidad");
let formaDePagoEfectivoInput = document.getElementById("efectivo");
let formaDePagoTarjetaInput = document.getElementById("tarjeta");
let agregarDestinatarioButton = document.getElementById("agregarDestinatario");
let listaDestinatarios = document.getElementById("listaDestinatarios");
let agregarPostreButton = document.getElementById("agregarPostre");
let listaPostres = document.getElementById("listaPostres");
let letraInicialInput = document.getElementById("letraInicial");
let filtrarDestinatariosButton = document.getElementById("filtrarDestinatarios");
let precioTotalText = document.getElementById("total");
let tiempoEstimadoText = document.getElementById("tiempoEstimado");

function calcularTotal() {
  let menu = menuSelect.value;
  let precio = precios[menu] || 0;
  let total = precio * cantidadInput.value;
  let tiempoDeEntrega = 0;

  if (total >= 1000 && total <= 1500) {
    tiempoDeEntrega = 30;
  } else if (total >= 1501 && total <= 1900) {
    tiempoDeEntrega = 45;
  } else if (total > 1900) {
    tiempoDeEntrega = 60;
  }

  if (formaDePagoTarjetaInput.checked) {
    total *= 1.1;
  }

  precioTotalText.textContent = "$" + total;
  tiempoEstimadoText.textContent = tiempoDeEntrega + " minutos";
}

function agregarDestinatario() {
  let destinatario = prompt("Ingrese el nombre del destinatario:");

  if (destinatario) {
    let li = document.createElement("li");
    li.textContent = destinatario;
    listaDestinatarios.appendChild(li);
  }
}

function agregarPostre() {
  let postre = prompt("Ingrese el nombre del postre:");

  if (postre) {
    let li = document.createElement("li");
    let cantidadPostreInput = document.createElement("input");
    cantidadPostreInput.type = "number";
    cantidadPostreInput.min = "1";
    cantidadPostreInput.max = "10";
    cantidadPostreInput.value = "1";

    li.textContent = postre + " ";
    li.appendChild(cantidadPostreInput);

    listaPostres.appendChild(li);
  }
}

function filtrarDestinatarios() {
  let letraInicial = letraInicialInput.value.toUpperCase();

  for (let i = 0; i < listaDestinatarios.children.length; i++) {
    let li = listaDestinatarios.children[i];
    let nombreDestinatario = li.textContent.trim().toUpperCase();

    if (nombreDestinatario.startsWith(letraInicial)) {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }
  }
}

menuSelect.addEventListener("change", calcularTotal);
cantidadInput.addEventListener("input", calcularTotal);
formaDePagoEfectivoInput.addEventListener("change", calcularTotal);
formaDePago
