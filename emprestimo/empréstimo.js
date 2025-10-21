const btnEmprestar = document.querySelector('.btn-emprestar');
const modal = document.querySelector('.modal-emprestimo');
const fechar = document.querySelector('.modal-conteudo .fechar');

btnEmprestar.addEventListener('click', () => {
  modal.style.display = 'flex';
});

fechar.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if(e.target === modal){
    modal.style.display = 'none';
  }
});
