const lista = [
  "Alexandre",
  "Ana",
  "Artur",
  "Bianco",
  "Bruno",
  "Cassio",
  "Cesar",
  "Dionatan",
  "Emanuel",
  "Enzo",
  "Giovanne",
  "Gustavo",
  "Heitor",
  "Ismael",
  "João Marcelo",
  "João Pedro",
  "Kaiky",
  "Kayque",
  "Khezac",
  "Leonardo",
  "Lucas A",
  "Lucas B",
  "Lucas D",
  "Luiz",
  "Maria Eduarda",
  "Matheus A",
  "Matheus F",
  "Mateus",
  "Miguel",
  "Nicolle",
  "Raphael",
  "Thiago",
  "Victor",
  Math.PI.toFixed(10),
];

const nomes = document.getElementById("nomes");

//Uma atribuição é uma cópia. Zépa, 2024

/*
//Inicialização ; Condição de continuidade ; termino ou incremento
for (let i = 0; i < lista.length; i++) {
  //Extrair/Copiado item da lista
  const item = lista[i];

  //Processar
  const li = document.createElement("li");
  li.innerText = item;
  nomes.appendChild(li);
}

*/

//Iteradores = métodos da propria lista para percorrer os elementos
/*
const novo = lista.map(function (item, i) {
  return i + " " + item.toUpperCase();
});

novo.sort();
*/

const vogais = ["A", "E", "I", "O", "U"];

function filtrar(item) {
  const letra = "e"; //item.substring(0, 1);
  if (item.includes(letra)) return letra;
}

const novo = lista.filter(filtrar);

novo.forEach(function (item) {
  //Processar
  const li = document.createElement("li");
  li.innerText = item;
  nomes.appendChild(li);
});
