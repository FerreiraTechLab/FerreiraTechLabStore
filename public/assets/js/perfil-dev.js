import { auth, db,storage  } from './firebaseConfig.js';
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
import { doc, getDoc, collection, getDocs, query, where,deleteDoc, updateDoc  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { onAuthStateChanged, signOut, updatePassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Elementos do DOM
const developerName = document.getElementById("developerName");
const developerEmail = document.getElementById("developerEmail");
const profileAvatar = document.querySelector(".profile-avatar");
const appsList = document.getElementById("appsList");
const changePasswordForm = document.getElementById("changePasswordForm");
const logoutButton = document.getElementById("logoutButton");
const saveAppChangesButton = document.getElementById("saveAppChanges");
// Verifica o estado de autenticação
onAuthStateChanged(auth, async (user) => {
    if (user) {
        const userId = user.uid;

        // Checa a verificação de e-mail
        if (!user.emailVerified) {
            alert("Por favor, verifique seu e-mail para acessar todas as funcionalidades.");
            sendEmailVerification(user).then(() => {
                console.log("E-mail de verificação enviado.");
            }).catch((error) => {
                console.error("Erro ao enviar e-mail de verificação:", error.message);
            });
        }

        // Busca as informações do usuário no Firestore
        const userDocRef = doc(db, "usuarios", userId);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
            const userData = userDocSnap.data();

            // Atualiza os elementos DOM
            developerName.textContent = userData.nome || "Usuário Anônimo";
            developerEmail.textContent = user.email;
            profileAvatar.src = userData.fotoPerfil || "assets/img/default-avatar.png"; // Adiciona a foto de perfil ou usa uma padrão
        } else {
            console.error("Nenhum dado encontrado para o usuário.");
        }

        // Carrega os aplicativos do usuário
        await loadUserApps(userId);
    } else {
        // Redireciona para a página de login se não houver usuário autenticado
        window.location.href = "login.html";
    }
});

// Função para carregar aplicativos do usuário
async function loadUserApps(userId) {
    appsList.innerHTML = ""; // Limpa a lista antes de carregar

    // Função para criar cartões de aplicativos
    function createAppCard(appData, status = "Publicado", appId) {
        const appCard = document.createElement("div");
        appCard.classList.add("app-card");
        console.log("Na criação",appId);
        appCard.setAttribute("data-id", appId); // Adiciona o data-id ao card com o ID do aplicativo
        console.log("Na criação",appId);

        appCard.innerHTML = `
            <img src="${appData.logoUrl || 'assets/img/default-app.png'}" alt="Logo do App">
            <div>
                <h5>${appData.nome}</h5>
                <p>${appData.descricao || "Sem descrição"}</p>
                <p><strong>Status:</strong> ${status}</p>
            </div>
            <div class="app-actions">
                <button class="btn btn-primary btn-sm">Editar</button>
                <button class="btn btn-danger btn-sm">Excluir</button>
            </div>
        `;

        appsList.appendChild(appCard);
    }


    // Busca na coleção `apps`
    const appsRef = collection(db, "apps");
    const appsQuery = query(appsRef, where("usuarioId", "==", userId));
    const appsSnapshot = await getDocs(appsQuery);

    if (!appsSnapshot.empty) {
        appsSnapshot.forEach((doc) => {
            const appData = doc.data();
            console.log(doc.id);
            createAppCard(appData, "Publicado",doc.id);
        });
    } else {
        console.log("Nenhum aplicativo publicado encontrado.");
    }

    // Busca na coleção `apps-revisao`
    const appsRevisaoRef = collection(db, "apps-revisao");
    const appsRevisaoQuery = query(appsRevisaoRef, where("usuarioId", "==", userId));
    const appsRevisaoSnapshot = await getDocs(appsRevisaoQuery);

    if (!appsRevisaoSnapshot.empty) {
        appsRevisaoSnapshot.forEach((doc) => {
            const appData = doc.data();
            createAppCard(appData, "Em revisão",doc.id);
        });
    } else {
        console.log("Nenhum aplicativo em revisão encontrado.");
    }
}

// Função de logout
logoutButton.addEventListener("click", () => {
    signOut(auth).then(() => {
        window.location.href = "login.html"; // Redireciona para a página de login
    }).catch((error) => {
        console.error("Erro ao fazer logout:", error.message);
    });
});

// Função de mudança de senha
changePasswordForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmNewPassword = document.getElementById("confirmNewPassword").value;

    if (newPassword !== confirmNewPassword) {
        alert("As senhas não coincidem.");
        return;
    }

    try {
        const user = auth.currentUser;

        if (user) {
            await updatePassword(user, newPassword);
            alert("Senha alterada com sucesso.");
            changePasswordForm.reset();
        } else {
            console.error("Usuário não autenticado.");
        }
    } catch (error) {
        console.error("Erro ao alterar senha:", error.message);
        alert("Erro ao alterar senha. Por favor, tente novamente.");
    }
});
// Selecionando os elementos do modal
const appNameInput = document.getElementById("editAppName");
const appDescriptionInput = document.getElementById("editAppDescription");
const appCategoryInput = document.getElementById("editAppCategory");
const appLicenseInput = document.getElementById("editAppLicense");
const appRepoLinkInput = document.getElementById("editAppRepoLink");
const appVersionInput = document.getElementById("editAppVersion");
const appChangelogInput = document.getElementById("editAppChangelog");
const  appLogoPreview = document.getElementById("appLogoPreview");


var appIDV;
// Referência ao modal do Bootstrap
const editModal = new bootstrap.Modal(document.getElementById("editAppModal"));

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-primary")) {
        // Encontrar o ID do aplicativo associado ao botão clicado
        const appCard = event.target.closest(".app-card");
        const appId = appCard?.getAttribute("data-id");
        appIDV = appId;

        if (!appId) {
            console.error("ID do aplicativo não encontrado.");
            return;
        }

        // Referência ao documento no Firestore
        const appDocRef = doc(db, "apps", appId);

        // Recuperar os dados do Firestore
        getDoc(appDocRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    const appData = docSnap.data();

                    // Preencher os campos do modal com os dados do Firestore
                    appNameInput.value = appData.nome || "";
                    appDescriptionInput.value = appData.descricao || "";
                    appLogoPreview.src = appData.logoUrl || "placeholder.jpg"; // Pré-visualizar logo
                    appCategoryInput.value = appData.categoria || "";
                    appLicenseInput.value = appData.licenca || "";
                    appRepoLinkInput.value = appData.repoLink || "";
                    appVersionInput.value = appData.versao || "";
                    appChangelogInput.value = appData.changelog || "";

                    // Abrir o modal do Bootstrap
                    editModal.show();
                } else {
                    console.error("Aplicativo não encontrado no Firestore.");
                }
            })
            .catch((error) => {
                console.error("Erro ao recuperar dados do Firestore:", error.message);
            });
    }
});

const appLogoInput = document.getElementById("editAppLogo");
const appApkInput = document.getElementById("editAppApk");

document.getElementById("saveAppChanges").addEventListener("click", async (e) => {
    e.preventDefault(); // Impede o comportamento padrão do botão

    if (!appIDV) {
        console.error("ID do aplicativo não encontrado.");
        return;
    }

    // Recuperar os arquivos selecionados
    const appLogo = appLogoInput.files[0];
    const appApk = appApkInput.files[0];

    try {
        // Uploads no Firebase Storage
        const storagePath = `appspublicos/${auth.currentUser.uid}/${appNameInput.value}/`;

        let logoUrl = appLogoInput.value; // Manter URL existente se não houver novo upload
        if (appLogo) {
            const logoRef = ref(storage, `${storagePath}logo`);
            const logoSnapshot = await uploadBytes(logoRef, appLogo);
            logoUrl = await getDownloadURL(logoSnapshot.ref);
        }

        let apkUrl;
        if (appApk) {
            const apkRef = ref(storage, `${storagePath}${appApk.name}`);
            const apkSnapshot = await uploadBytes(apkRef, appApk);
            apkUrl = await getDownloadURL(apkSnapshot.ref);
        }

        // Dados a serem atualizados
        const updatedAppData = {
            nome: appNameInput.value,
            descricao: appDescriptionInput.value,
            logoUrl, // Novo ou existente
            categoria: appCategoryInput.value,
            licenca: appLicenseInput.value,
            repoLink: appRepoLinkInput.value,
            versao: appVersionInput.value,
            changelog: appChangelogInput.value,
            ...(apkUrl && { apkUrl }), // Só atualiza se houver um novo APK
        };

        const appDocRef = doc(db, "apps", appIDV);
        await updateDoc(appDocRef, updatedAppData);

        alert("Aplicativo atualizado com sucesso!");
        editModal.hide();
    } catch (error) {
        console.error("Erro ao salvar alterações:", error.message);
        alert("Erro ao salvar as alterações. Tente novamente.");
    }
});
  




document.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-danger")) {
        const appCard = event.target.closest(".app-card");
        const appId = appCard.getAttribute("data-id");

        if (confirm("Tem certeza que deseja excluir este aplicativo?")) {
            const appDocRef = doc(db, "apps", appId);
            deleteDoc(appDocRef).then(() => {
                alert("Aplicativo excluído com sucesso!");
                loadUserApps(user.uid); // Recarrega a lista de apps
            }).catch((error) => {
                console.error("Erro ao excluir aplicativo:", error.message);
                alert("Erro ao excluir o aplicativo.");
            });
        }
    }
});

