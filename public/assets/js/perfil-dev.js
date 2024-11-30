// Dados simulados
const apps = [
    { id: 1, name: "App 1", status: "Aprovado", logo: "assets/img/sharexpress/app-logo.png" },
    { id: 2, name: "App 2", status: "Em revisão", logo: "assets/img/pdfshield/app-logo.png" },
];

// Carregar informações do desenvolvedor
const developerName = document.getElementById("developerName");
const developerEmail = document.getElementById("developerEmail");
developerName.textContent = "João Ferreira"; // Simulação
developerEmail.textContent = "joao.ferreira@exemplo.com"; // Simulação

// Listar apps
const appsList = document.getElementById("appsList");
function loadApps() {
    appsList.innerHTML = "";
    apps.forEach((app) => {
        const appCard = document.createElement("div");
        appCard.className = "app-card";
        appCard.innerHTML = `
            <img src="${app.logo}" alt="Logo do App">
            <div>
                <h5>${app.name}</h5>
                <p>Status: ${app.status}</p>
            </div>
            <div class="app-actions">
                <button class="btn btn-primary btn-sm" onclick="updateApp(${app.id})">Atualizar</button>
                <button class="btn btn-danger btn-sm" onclick="removeApp(${app.id})">Remover</button>
            </div>
        `;
        appsList.appendChild(appCard);
    });
}
loadApps();

// Funções para atualizar e remover apps
function updateApp(appId) {
    alert(`Atualizar o app com ID ${appId}`);
}

function removeApp(appId) {
    const confirmation = confirm("Tem certeza que deseja remover este app?");
    if (confirmation) {
        alert(`App com ID ${appId} removido.`);
        // Aqui você poderia remover o app da lista no backend.
    }
}

// Atualizar informações
const updateInfoForm = document.getElementById("updateInfoForm");
updateInfoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Informações atualizadas com sucesso!");
});

// Alterar senha
const changePasswordForm = document.getElementById("changePasswordForm");
changePasswordForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Senha alterada com sucesso!");
});
