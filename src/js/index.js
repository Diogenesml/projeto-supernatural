const botoes = [...document.querySelectorAll(".botao")];
const imagens = [...document.querySelectorAll(".imagem")];

function selecionarCena(indice) {
  botoes.forEach((botao, i) => {
    const selecionado = i === indice;
    botao.classList.toggle("selecionado", selecionado);
    botao.setAttribute("aria-pressed", String(selecionado));
  });

  imagens.forEach((imagem, i) => {
    imagem.classList.toggle("ativa", i === indice);
  });
}

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => selecionarCena(indice));
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
  const atual = botoes.findIndex((botao) => botao.classList.contains("selecionado"));
  const direcao = event.key === "ArrowRight" ? 1 : -1;
  const proximo = (atual + direcao + botoes.length) % botoes.length;
  selecionarCena(proximo);
  botoes[proximo].focus();
});
