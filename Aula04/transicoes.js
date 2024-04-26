const pacoca = document.getElementById("pacoca");

function girar() {
  pacoca?.classList.add("pacoca");
  setTimeout(() => {
    pacoca?.classList.add("volta");
  }, 10 * 1000);
}
