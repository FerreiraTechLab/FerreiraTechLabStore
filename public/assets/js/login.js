document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simulação de autenticação
    if (email === "dev@exemplo.com" && password === "123456") {
        alert("Login bem-sucedido!");
        window.location.href = "perfil-desenvolvedor.html"; // Redireciona para o perfil do desenvolvedor
    } else {
        alert("E-mail ou senha inválidos.");
    }
});
