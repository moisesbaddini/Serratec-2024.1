const relogio = document.querySelector(".relogio");

const hoje = new Date();
//const hora = `${hoje.getHours()}:${hoje.getMinutes()}:${hoje.getSeconds()}`;

const hora = hoje.toLocaleTimeString();
relogio.textContent = hora;

setInterval(horario, 1000);

function horario() {
  const hoje = new Date();
  const hora = hoje.toLocaleTimeString();
  relogio.textContent = hora;
}
