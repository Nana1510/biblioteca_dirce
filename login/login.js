// Seleciona o formulário
const form = document.querySelector('.login-box form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // previne reload/redirecionamento

    // Pega valores
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    // Login fixo para teste
    const usuarioCorreto = 'nana';
    const senhaCorreta = '123456';

    if (nome === usuarioCorreto && senha === senhaCorreta) {
        // Marca usuário como logado
        localStorage.setItem('logado', 'true');

        // Redireciona só se login correto
        window.location.href = '/perfil/perfil.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
});