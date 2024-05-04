function quadrado(x) {
  return x * x;
}

const quad = (x) => x * x;

let resposta = quadrado(3);
resposta = quad(4);

document.querySelector("h1").innerText = resposta;

setInterval(() => (document.querySelector("h1").innerText = "teste"), 1000);

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const novo = lista.map((item) => item + 64);

const p = document.createElement("p");

document.body.appendChild(p);
p.innerText = novo;

/////

let frase = "Segue o lider Botafogo";

const p1 = document.createElement("p");
document.body.appendChild(p1);

frase = frase.replace("lider", '<span style="background: yellow">lider</span>');

p1.innerHTML = frase;
