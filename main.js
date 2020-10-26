// Procurar o botão
document.querySelector('#mudarTexto')
// Quando clicar no botão
.addEventListener('click', alterarTexto);
// Executar uma ação
function alterarTexto() {
  // Pegar o local em que o texto será alterado
  document.querySelector('#texto').innerHTML = 'Texto alterado!'
}

