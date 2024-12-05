import { auth, db, storage } from './firebaseConfig.js';
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
import { collection, addDoc, Timestamp, getDoc, doc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
var userGitHub;
var userName;
document.getElementById("appUploadForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    // Obter dados do formulário
    const appName = document.getElementById("appName").value.trim();
    const appDescription = document.getElementById("appDescription").value.trim();
    const appCategory = document.getElementById("appCategory").value.trim();
    const appLogo = document.getElementById("appLogo").files[0];
    const appApk = document.getElementById("appApk").files[0];
    const appScreenshots = document.getElementById("appScreenshots").files;
    const appRepoLink = document.getElementById("appRepoLink").value.trim();
    const appVersion = document.getElementById("appVersion").value.trim();
    const appChangelog = document.getElementById("appChangelog").value.trim();
    const appLicense = document.getElementById("appLicense").value.trim();
    const appLLDescription = document.getElementById("appLLDescription").value.trim();

    // Verificar usuário autenticado
    const user = auth.currentUser;
    if (!user) {
        alert("Por favor, faça login para enviar o aplicativo.");
        return;
    }
    
    const userId = user.uid;
    const userEmail = user.email;
    
    // Obter os dados do usuário no Firestore
    const userDoc = await getDoc(doc(db, "usuarios", user.uid));
    if (userDoc.exists()) {
        const userData = userDoc.data();
        userGitHub = userData.github || "Não fornecido"; // Obtém o GitHub armazenado no Firestore
        userName = userData.nome || user.displayName || "Não fornecido"; // Nome do usuário
    } else {
        console.error("Dados do usuário não encontrados.");
    }
    

    try {
        // Salvar arquivos no Firebase Storage
        const storagePath = `appspublicos/${userId}/${appName}/`;

        // Upload do logo
        const logoRef = ref(storage, `${storagePath}logo`);
        const logoSnapshot = await uploadBytes(logoRef, appLogo);
        const logoUrl = await getDownloadURL(logoSnapshot.ref);

        // Upload do APK
        const apkRef = ref(storage, `${storagePath}${appApk.name}`);
        const apkSnapshot = await uploadBytes(apkRef, appApk);
        const apkUrl = await getDownloadURL(apkSnapshot.ref);

        // Upload das capturas de tela
        const screenshotsUrls = [];
        for (let i = 0; i < appScreenshots.length; i++) {
            const screenshotRef = ref(storage, `${storagePath}screenshots/${appScreenshots[i].name}`);
            const screenshotSnapshot = await uploadBytes(screenshotRef, appScreenshots[i]);
            const screenshotUrl = await getDownloadURL(screenshotSnapshot.ref);
            screenshotsUrls.push(screenshotUrl);
        }

        // Salvar dados no Firestore na coleção apps-revisao
        const appData = {
            nome: appName,
            descricao: appDescription,
            descricaoCurta: appLLDescription,
            categoria: appCategory,
            logoUrl,
            apkUrl,
            screenshotsUrls,
            repoLink: appRepoLink,
            versao: appVersion,
            changelog: appChangelog,
            usuarioId: userId,
            usuarioEmail: userEmail,
            usuarioGitHub:userGitHub,
            userNome: userName,
            status: "Em revisão",
            enviadoEm: Timestamp.now(),
            licenca: appLicense,
        };

        const docRef = await addDoc(collection(db, "apps-revisao"), appData);
        console.log("App enviado com sucesso com ID:", docRef.id);

        alert(`Aplicativo "${appName}" enviado com sucesso! Status: Em revisão.`);
        document.getElementById("appUploadForm").reset();

        // Atualizar a lista de aplicativos no frontend
        await loadUserApps(userId);
    } catch (error) {
        console.error("Erro ao enviar aplicativo:", error);
        alert("Erro ao enviar o aplicativo. Por favor, tente novamente.");
    }
});
