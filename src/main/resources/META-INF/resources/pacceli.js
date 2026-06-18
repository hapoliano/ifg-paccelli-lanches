document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login realizado com sucesso! 🍔\n\n(Bem-vindo ao Paccelli Lanches)');
    // Aqui você pode redirecionar para a tela principal do app
    // window.location.href = "home.html";
});

//cadastroo

// Máscara simples para telefone
const telefoneInput = document.getElementById('telefone');
telefoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 2) {
        value = `(${value.slice(0,2)}) ${value.slice(2)}`;
    }
    if (value.length > 9) {
        value = value.slice(0,9) + '-' + value.slice(9);
    }
    e.target.value = value;
});

// Máscara simples para CPF
const cpfInput = document.getElementById('cpf');
cpfInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 9) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');
    } else if (value.length > 3) {
        value = value.replace(/(\d{3})(\d{3})/, '$1.$2');
    }
    e.target.value = value;
});

// Validação do formulário
document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem! Por favor, verifique.');
        return;
    }

    if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }

    alert('✅ Cadastro realizado com sucesso!\n\nBem-vindo ao Paccelli Lanches! 🍔');
    // Aqui você pode redirecionar para a tela de login ou home
    // window.location.href = "login.html";
});