document.addEventListener('DOMContentLoaded', () => {
    // Garante que o script só rode se o botão existir
    const botaoEmprestar = document.getElementById('botao-emprestar');
    if (!botaoEmprestar) return;

    const mensagemStatus = document.getElementById('mensagem-status');
    const disponibilidadeTexto = document.getElementById('disponibilidade-texto');

    // --- SIMULAÇÕES DE ESTADO ---
    // Mude estas variáveis para testar diferentes cenários:
    const usuarioLogado = true;      // true: Tenta emprestar; false: Redireciona para login
    const estoqueDisponivel = 1;     // Se <= 0, livro indisponível
    const podeEmprestar = true;      // Se false, o usuário atingiu seu limite
    // ----------------------------

    // Função para calcular a data de devolução em 30 dias
    function calcularDataDevolucao() {
        const dataAtual = new Date();
        dataAtual.setDate(dataAtual.getDate() + 30); 
        return dataAtual.toLocaleDateString('pt-BR'); 
    }

    // Função utilitária para exibir a mensagem de status
    function exibirMensagem(texto, cor) {
        if (mensagemStatus) {
            mensagemStatus.textContent = texto;
            mensagemStatus.style.color = cor;
            mensagemStatus.style.display = 'block';
        }
    }

    // Função principal acionada ao clicar no botão
    function handleEmprestimo() {
        // 1. CHECAGEM DE LOGIN
        if (!usuarioLogado) {
            // Se não estiver logado, redireciona para a página de login
            window.location.href = '/login/login.html'; 
            return;
        }

        // 2. CHECAGEM DE DISPONIBILIDADE
        if (estoqueDisponivel <= 0) {
            exibirMensagem('Livro indisponível no momento. Tente novamente mais tarde.', 'red');
            return;
        }

        // 3. CHECAGEM DE LIMITE DO USUÁRIO
        if (!podeEmprestar) {
            exibirMensagem('Você atingiu o limite máximo de livros emprestados.', 'orange');
            return;
        }

        // 4. LÓGICA DE EMPRÉSTIMO BEM-SUCEDIDO
        const dataDevolucao = calcularDataDevolucao();
        
        // Simulação de sucesso:
        exibirMensagem(`Empréstimo realizado com sucesso! Prazo de devolução: ${dataDevolucao}.`, '#5A3A2E'); // Usando uma cor do seu tema
        
        // Altera o estado do botão e do texto, mantendo o estilo CSS
        botaoEmprestar.disabled = true;
        botaoEmprestar.textContent = 'Emprestado';
        
        if (disponibilidadeTexto) {
            disponibilidadeTexto.textContent = 'Disponibilidade: 0 unidades';
        }
    }
    
    // --- INICIALIZAÇÃO E EVENT LISTENER ---
    
    // Verifica a disponibilidade inicial e ajusta o botão
    if (estoqueDisponivel <= 0) {
        botaoEmprestar.disabled = true;
        botaoEmprestar.textContent = 'Indisponível';
        if (disponibilidadeTexto) {
            disponibilidadeTexto.textContent = 'Disponibilidade: 0 unidades';
        }
        // Adiciona uma classe para styling de botão desativado no CSS (opcional)
        botaoEmprestar.classList.add('indisponivel'); 
    } else {
        // Adiciona o evento de clique ao botão
        botaoEmprestar.addEventListener('click', handleEmprestimo);
    }
});