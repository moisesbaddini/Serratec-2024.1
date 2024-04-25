const lista = ["Alexandre", "Ana", "Artur", "Bianco", "Cássio", "Cesar", "Dionatan", "Emanuel"];

lista.push("Enzo", "Giovanne", "Gustavo", "Heitor", "João Marcelo", "João Pedro");
lista.push("Kaiky", "Kayque", "Khezac", "Leonardo", "Lucas A", "Lucas B");
lista.push("Lucas D");
lista.push("Luiz");
lista.push("Maria Eduarda", "Mateus", "Matheus A", "Matheus F", "Miguel");
lista.push("Nicolle", "Raphael", "Victor");

const grupos = ["um", "dois", "tres", "quatro", "cinco", "seis"];
const final = [];

while (lista.length > 0) {
  const nro = Math.floor(Math.random() * lista.length);
  const item = lista[nro];
  final.push(item);
  lista.splice(nro, 1);
}

console.log(final);
