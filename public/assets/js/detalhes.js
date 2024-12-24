import { db } from './firebaseConfig.js'; // Certifique-se de importar a configuração do Firebase corretamente
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Função para exibir os detalhes do aplicativo
async function displayAppDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const appId = urlParams.get('appId'); // Recuperando o appId da URL

    if (!appId) {
        console.error("appId não encontrado na URL!");
        return;
    }

    const appRef = doc(db, "apps", appId); // Referência ao documento no Firestore usando appId
    try {
        const docSnap = await getDoc(appRef);

        if (docSnap.exists()) {
            const appData = docSnap.data();

            // Preencher os dados no HTML
            const appLogo = document.querySelector("#app-logo");
            const appName = document.querySelector("#app-name");
            const appDescription = document.getElementById("app-description");
            const shortDescription = document.querySelector("#short-description");
            const repoLink = document.querySelector("#repo-link");
            const apkLink = document.querySelector("#apk-link");
            const projetoheader = document.getElementById("projetoheader");
            

            // Exemplo de preenchimento dos dados
            document.getElementById("arch").textContent = Array.isArray(appData.arquiteturaSuportada) ? appData.arquiteturaSuportada.join(", ") : 'Não especificado';
            document.getElementById("sizeDownload").textContent = appData.tamanhoDownload ? `~${appData.tamanhoDownload} MiB` : 'Tamanho não especificado';
            document.getElementById("sizeInstalled").textContent = appData.tamanhoInstalado ? `~${appData.tamanhoInstalado} MiB` : 'Tamanho não especificado';



            // Preencher funcionalidades
            const funcionalidadesElement = document.querySelector('#app-functionalities');
            if (appData.funcionalidades && typeof appData.funcionalidades === 'string') {
                const funcionalidades = appData.funcionalidades.split(',');
                funcionalidadesElement.innerHTML = funcionalidades.map(func => `<li>${func.trim()}</li>`).join('');
            } else {
                funcionalidadesElement.innerHTML = '<li>Não há funcionalidades registradas.</li>';
            }

            // Preencher requisitos de sistema
            const requisitosElement = document.querySelector('#app-requirements');
            if (appData.requisitos && typeof appData.requisitos === 'string') {
                const requisitos = appData.requisitos.split(',');
                requisitosElement.innerHTML = requisitos.map(req => `<li>${req.trim()}</li>`).join('');
            } else {
                requisitosElement.innerHTML = '<li>Não há requisitos de sistema registrados.</li>';
            }

            console.log(appData.descricao)
            if (appLogo) appLogo.src = appData.logoUrl;
            if (appName) appName.textContent = appData.nome;
            document.getElementById("app-description").textContent = appData.descricao || "Sem descrição";
            if (shortDescription) shortDescription.textContent = appData.descricao;
            if (repoLink) repoLink.href = appData.repoLink;
            if (apkLink) apkLink.href = appData.apkUrl;
            if (projetoheader) projetoheader.textContent = appData.nome; // Atualiza o texto do elemento


            // Atualizar capturas de tela (se houver)
            if (appData.screenshotsUrls && appData.screenshotsUrls.length > 0) {
                const screenshot1 = document.querySelector("#screenshot-img-1");
                const screenshot2 = document.querySelector("#screenshot-img-2");
                const screenshot3 = document.querySelector("#screenshot-img-3");

                if (screenshot1) screenshot1.src = appData.screenshotsUrls[0];
                if (screenshot2 && appData.screenshotsUrls[1]) screenshot2.src = appData.screenshotsUrls[1];
                if (screenshot3 && appData.screenshotsUrls[2]) screenshot3.src = appData.screenshotsUrls[2];
            }

            // Changelog (se houver)
            // Changelog (se houver)
            const changelogList = document.querySelector("#changelog-list");
            if (changelogList) {
                changelogList.innerHTML = ''; // Limpa a lista de changelog
                if (appData.changelog && typeof appData.changelog === 'string') {
                    const changes = appData.changelog.split('\n'); // Divide o texto em linhas
                    changes.forEach(change => {
                        if (change.trim()) { // Ignorar linhas vazias
                            const listItem = document.createElement('li');
                            listItem.textContent = change.trim();
                            changelogList.appendChild(listItem);
                        }
                    });
                }
            }

        } else {
            console.log("Documento não encontrado!");
        }
    } catch (error) {
        console.log("Erro ao obter detalhes do aplicativo:", error);
    }
}


// Chamar a função quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", displayAppDetails);