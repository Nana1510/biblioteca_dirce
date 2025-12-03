// ===== FOTO DE PERFIL =====
const foto = document.getElementById('foto-perfil'); // pega o elemento com id foto e guarda na constante foto
const menuFoto = document.getElementById('menu-foto'); //seleciona o elemento do menu que abre quando clica na foto
const uploadFoto = document.getElementById('upload-foto'); //pega o input tipo file (escondido ou visível) usado para escolher uma imagem do dispositivo.
const adicionarBtn = document.getElementById('adicionar-foto');//botão dentro do menu para adicionar/trocar a foto (quando clicado, abre o seletor de arquivos).
const removerBtn = document.getElementById('remover-foto');//botão para remover (resetar) a foto do perfil para a imagem padrão.

// Mostrar/esconder menu ao clicar na foto
foto.addEventListener('click', (e) => {
  e.stopPropagation();
  menuFoto.style.display = menuFoto.style.display === 'block' ? 'none' : 'block';
});

// Abrir seletor de arquivos
adicionarBtn.addEventListener('click', () => {
  uploadFoto.click();
});

// Trocar foto após upload
uploadFoto.addEventListener('change', () => {
  const arquivo = uploadFoto.files[0];
  if (arquivo) {
    const reader = new FileReader();
    reader.onload = () => {
      foto.src = reader.result;
      localStorage.setItem("fotoPerfil", reader.result);
    };
    reader.readAsDataURL(arquivo);
  }
  menuFoto.style.display = 'none';
});

// Remover foto
removerBtn.addEventListener('click', () => {
  foto.src = '/imagens/perfil.jpg';
  localStorage.removeItem('fotoPerfil');
  menuFoto.style.display = 'none';
});

// Carregar foto salva
const fotoSalva = localStorage.getItem("fotoPerfil");
if (fotoSalva) foto.src = fotoSalva;

// Fecha o menu se clicar fora
document.addEventListener('click', () => {
  menuFoto.style.display = 'none';
});
