/*
escopo
var == global
let == local
*/

let lista = document.getElementById("lista");

let li = document.createElement("li");

lista?.appendChild(li);

li.textContent = "";

function criarTarefa() {}
