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
    const bio = document.getElementById("bio").value;

    // Validação simples
    if (!name || !email || !phone || !github || !bio) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Exemplo de envio para backend (Firebase ou API)
    const developerData = {
        name,
        email,
        phone,
        github,
        bio,
    };

    console.log("Dados do Desenvolvedor:", developerData);

    // Simulação de sucesso
    alert("Cadastro realizado com sucesso!");

    // Limpa o formulário após envio
    devForm.reset();
});
