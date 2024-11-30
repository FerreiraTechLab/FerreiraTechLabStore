document.getElementById("appUploadForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obter dados do formulário
    const appName = document.getElementById("appName").value;
    const appDescription = document.getElementById("appDescription").value;
    const appCategory = document.getElementById("appCategory").value;
    const appLogo = document.getElementById("appLogo").files[0];
    const appApk = document.getElementById("appApk").files[0];
    const appScreenshots = document.getElementById("appScreenshots").files;
    const appRepoLink = document.getElementById("appRepoLink").value;

    // Validações adicionais
    if (!appLogo || !appApk) {
        alert("Por favor, envie todos os arquivos obrigatórios.");
        return;
    }

    if (!isValidURL(appRepoLink)) {
        alert("Por favor, insira um link de repositório válido.");
        return;
    }

    // Simulação de envio (integrar com Firebase ou API real aqui)
    alert(`Aplicativo "${appName}" enviado com sucesso!\nRepositório: ${appRepoLink}`);

    // Redirecionar ou limpar formulário
    document.getElementById("appUploadForm").reset();
});

// Função para validar URL
function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}
