const container = document.getElementById("container");

const titulo = document.createElement("h2");
titulo.textContent = "Tarefas da equipe que a equipe fez";

titulo.textContent = titulo.textContent.replaceAll("equipe", "galera");

container?.appendChild(titulo);

const form = `
<div class="nova">
<input type="text" id="texto" placeholder="Digite a tarefa" />
<button onclick="criarNota()">Criar</button>
</div>
`;

const div = document.createElement("div");
div.innerHTML = form;
container.appendChild(div);

const area = document.createElement("ul");
container?.appendChild(area);

function notaNota(texto) {
  const item = document.createElement("li");
  area?.appendChild(item);
  item.innerHTML = `<button onclick="excluir(event)">🗑️</button><div>${texto} | ${texto.length}</div>`;
}

const lista = [];

//Push é um add na lista
lista.push("Trabalhar com arrays");
lista.push("Estudar JS");
lista.push("Criar elementos");
lista.push("Trafegar JSON");
lista.push("Seletores irmão adjacente");
lista.push("Landing page");
lista.push("Laços de repetição");
lista.push("For, while, iteradores");
lista.push("Bootstrap e frameworks CSS");

for (let i = 0; i < lista.length; i++) {
  const item = lista[i];
  notaNota(item);
}

const texto = document.getElementById("texto");

function criarNota() {
  let valor = texto.value;
  texto.value = "";

  lista.push(valor);
  notaNota(valor);
}

function excluir(evento) {
  const li = evento.target.parentElement;
  li.remove();
}
