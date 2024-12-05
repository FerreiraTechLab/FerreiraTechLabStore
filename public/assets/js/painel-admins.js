import {auth, db } from './firebaseConfig.js';
import { getDocs, doc, updateDoc, deleteDoc, collection, addDoc,getDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { onAuthStateChanged, signOut, updatePassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Elementos da interface
const appsRevisaoContainer = document.getElementById("appsRevisaoContainer");
const appsPublicadosContainer = document.getElementById("appsPublicadosContainer");
const appDetailsModal = new bootstrap.Modal(document.getElementById('appDetailsModal'));
const appName = document.getElementById("appName");
const appDescription = document.getElementById("appDescription");
const appGitHub = document.getElementById("appGitHub");
const appIcon = document.getElementById("appIcon");
const appApk = document.getElementById("appApk");
const acceptAppBtn = document.getElementById("acceptAppBtn");
const rejectAppBtn = document.getElementById("rejectAppBtn");
const logoutButton = document.getElementById("logoutButton");


let selectedAppId = null;

logoutButton.addEventListener("click", () => {
    signOut(auth).then(() => {
        window.location.href = "login.html"; // Redireciona para a página de login
    }).catch((error) => {
        console.error("Erro ao fazer logout:", error.message);
    });
});
// Carregar apps em revisão
async function loadAppsRevisao() {
    const appsRevisaoSnapshot = await getDocs(collection(db, "apps-revisao"));
    appsRevisaoContainer.innerHTML = "";
    appsRevisaoSnapshot.forEach((doc) => {
        const app = doc.data();
        appsRevisaoContainer.innerHTML += `
            <div class="app-card">
                <h5>${app.nome}</h5>
                <button class="btn btn-primary" onclick="viewAppDetails('${doc.id}', 'apps-revisao')">Ver Detalhes</button>
                <button class="btn btn-danger" onclick="deleteApp('${doc.id}', 'apps-revisao')">Excluir</button>
            </div>
        `;
    });
}

// Carregar apps publicados
async function loadAppsPublicados() {
    const appsSnapshot = await getDocs(collection(db, "apps"));
    appsPublicadosContainer.innerHTML = "";
    appsSnapshot.forEach((doc) => {
        const app = doc.data();
        appsPublicadosContainer.innerHTML += `
            <div class="app-card">
                <h5>${app.nome}</h5>
                <button class="btn btn-danger" onclick="deleteApp('${doc.id}', 'apps')">Excluir</button>
            </div>
        `;
    });
}

// Visualizar detalhes do app
// Visualizar detalhes do app
window.viewAppDetails = async (id, collectionName) => {
    const appDoc = await getDoc(doc(db, collectionName, id));
    const app = appDoc.data();
    selectedAppId = id;
    // Atribuir valores aos elementos do modal
    console.log(app.logoUrl)
    appName.textContent = app.nome || "Sem nome";
    appDescription.textContent = app.descricao || "Sem descrição";
    appGitHub.href = app.repoLink || "#";
    appGitHub.textContent = app.repoLink ? "Repositório GitHub" : "Sem link";
    appGitHub.target = app.repoLink ? "_blank" : "_self";
    appIcon.src = app.logoUrl || "https://via.placeholder.com/150"; // Imagem padrão, se ausente
    appIcon.alt = app.logoUrl || "Ícone do App";
    appApk.href = app.apkUrl || "#";
    appApk.textContent = app.apkUrl ? "Baixar APK" : "Sem arquivo APK";
    appPublisher.textContent = app.usuarioEmail || "Informação não disponível";
    appVersion.textContent = app.versao || "Não informado";
    appChangelog.textContent = app.changelog || "Nenhuma atualização registrada.";
    appPublisherName.textContent = app.userNome;
    appPublisherGit.href = app.usuarioGitHub;
    appLicense.textContent = app.licenca || "Sem liçenca";
    appDescriptionCurta.textContent = app.descricaoCurta || "Sem descrição curta";
    appCategory.textContent = app.categoria || "Sem categoria";




    // Exibir o modal
    appDetailsModal.show();
};

// Aceitar app
acceptAppBtn.addEventListener("click", async () => {
    if (!selectedAppId) return;
    const appDoc = await getDoc(doc(db, "apps-revisao", selectedAppId));
    const appData = appDoc.data();
    

    await addDoc(collection(db, "apps"), appData);
    await deleteDoc(doc(db, "apps-revisao", selectedAppId));

    alert("App aceito e movido para a coleção de apps publicados.");
    appDetailsModal.hide();
    loadAppsRevisao();
    loadAppsPublicados();
});

// Rejeitar app
rejectAppBtn.addEventListener("click", async () => {
    if (!selectedAppId) return;

    await deleteDoc(doc(db, "apps-revisao", selectedAppId));
    alert("App rejeitado e removido da coleção de revisão.");
    appDetailsModal.hide();
    loadAppsRevisao();
});

// Excluir app
window.deleteApp = async (id, collectionName) => {
    await deleteDoc(doc(db, collectionName, id));
    alert("App excluído com sucesso.");
    if (collectionName === "apps-revisao") {
        loadAppsRevisao();
    } else {
        loadAppsPublicados();
    }
};

// Configurar abas de gerenciamento de apps
document.addEventListener("DOMContentLoaded", () => {
    // Inicializa abas ativas
    const appsRevisionTab = document.getElementById('apps-revision-tab');
    const appsPublishedTab = document.getElementById('apps-published-tab');

    appsRevisionTab.addEventListener('click', loadAppsRevisao);
    appsPublishedTab.addEventListener('click', loadAppsPublicados);

    // Carrega inicialmente a aba ativa
    loadAppsRevisao();
});


// Carregar dados ao iniciar
loadAppsRevisao();
loadAppsPublicados();
