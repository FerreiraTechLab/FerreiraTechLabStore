// Seleção do formulário
const devForm = document.getElementById("devForm");

// Manipulador de evento para o envio do formulário
devForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Captura dos valores dos campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const github = document.getElementById("github").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const bio = document.getElementById("bio").value;

    // Validação básica
    if (!name || !email || !phone || !github || !password || !confirmPassword || !bio) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validação da senha
    if (password !== confirmPassword) {
        alert("As senhas não correspondem. Tente novamente.");
        return;
    }

    // Exemplo de envio para backend (Firebase ou API)
    const developerData = {
        name,
        email,
        phone,
        github,
        password, // A senha geralmente deve ser criptografada no backend
        bio,
    };

    console.log("Dados do Desenvolvedor:", developerData);

    // Simulação de sucesso
    alert("Cadastro realizado com sucesso!");

    // Limpa o formulário após envio
    devForm.reset();
});
