const livros = [
    {
      id: 1,
      nome: "Sol da Meia Noite",
      autor: "Stephenie Meyer",
      sinopse: "Em Sol da Meia-Noite, a história de Crepúsculo é contada sob a perspectiva de Edward Cullen...",
      capa: "/livros/sol da meia noite.jpg",
      url: "/emprestimo/sol.html"
    },
    {
      id: 2,
      nome: "Alice no País das Maravilhas",
      autor: "Lewis Carroll",
      sinopse: "Alice é uma menina curiosa e sonhadora que vive buscando algo além da rotina...",
      capa: "/livros/alice.jpg",
      url: "/emprestimo/alice.html"
    }
  ];
  
  // 2️⃣ Função para exibir livros na tela
  function mostrarLivros(lista) {
    const container = document.querySelector(".livros-catalogo");
    container.innerHTML = ""; // Limpa a lista antes de mostrar
  
    lista.forEach(livro => {
      const livroItem = document.createElement("div");
      livroItem.classList.add("livros-item");
  
      livroItem.innerHTML = `
        <img src="${livro.capa}" alt="${livro.nome}" class="livros-capa">
        <div class="livro-info">
          <h2>${livro.nome}</h2>
          <p>${livro.sinopse}</p>
          <a href="${livro.url}" class="botao-vermais">Ver mais</a>
        </div>
      `;
  
      container.appendChild(livroItem);
    });
  }
  
  // 3️⃣ Função de pesquisa
  const inputPesquisa = document.querySelector(".search-bar input");
  
  inputPesquisa.addEventListener("input", function() {
    const termo = inputPesquisa.value.toLowerCase();
  
    const filtrados = livros.filter(livro =>
      livro.nome.toLowerCase().includes(termo) ||
      livro.autor.toLowerCase().includes(termo)
    );
  
    mostrarLivros(filtrados);
  });
  
  // 4️⃣ Inicializa a página mostrando todos os livros
  mostrarLivros(livros);