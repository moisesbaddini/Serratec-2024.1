const relogio = document.querySelector(".relogio");

const hoje = new Date();
//const hora = `${hoje.getHours()}:${hoje.getMinutes()}:${hoje.getSeconds()}`;

const hora = hoje.toLocaleTimeString();
relogio.textContent = hora;

const id = setInterval(horario, 1000);

function horario() {
  const hoje = new Date();
  const hora = hoje.toLocaleTimeString();
  relogio.textContent = hora;
}

const container = document.querySelector(".container");
const button = document.createElement("button");
container?.appendChild(button);
button.textContent = "Parar";

button.onclick = function () {
  clearInterval(id);
};

//arrays são heterogêneos
const lista = ["string", 19, new Date(), [1, 3, null]];
