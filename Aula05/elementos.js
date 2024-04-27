/*
escopo
var == global
let == local

document.querySelectorAll('CSS')
*/

let lista = document.getElementById("lista");
let campo = document.getElementById("campo");

function criarTarefa() {
  let li = document.createElement("li");
  lista?.appendChild(li);
  li.textContent = campo.value;
  campo.value = "";
}
