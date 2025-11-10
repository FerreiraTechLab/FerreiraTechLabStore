import { db } from './firebaseConfig.js'; // Certifique-se que 'db' está sendo exportado corretamente de 'firebaseConfig.js'
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Função para corrigir palavras específicas
function corrigirTexto(texto) {
  if (!texto) return texto;
  return texto.replace(/\butilitario\b/gi, "Utilitário");
}

// Função para agrupar e exibir aplicativos
async function displayApps() {
  const appsContainer = document.getElementById("appsContainer");

  try {
    // Buscar os aplicativos do Firestore
    const appsSnapshot = await getDocs(collection(db, "apps"));
    const categories = {}; // Objeto para armazenar apps por categoria

    appsSnapshot.forEach((doc) => {
      const appData = doc.data();

      console.log("Dados antes da correção:", appData); // Log para depuração

      // Corrigir textos nos dados do app antes de usá-los
      appData.nome = corrigirTexto(appData.nome);
      appData.descricaoCurta = corrigirTexto(appData.descricaoCurta);
      appData.categoria = corrigirTexto(appData.categoria);

      console.log("Dados após a correção:", appData); // Log para verificar a correção

      // Verificar se a categoria já existe, se não, cria uma nova
      if (!categories[appData.categoria]) {
        categories[appData.categoria] = [];
      }

      // Adicionar o app à categoria correspondente
      categories[appData.categoria].push({ ...appData, appId: doc.id }); // Inclui o ID do documento como parte dos dados
    });

    // Exibir os aplicativos por categoria
    for (const category in categories) {
      const categoryContainer = document.createElement("div");
      categoryContainer.classList.add("category-section");

      // Adicionando o título da categoria
      const categoryTitle = document.createElement("h3");
      categoryTitle.classList.add("category-title");
      categoryTitle.textContent = category;
      categoryContainer.appendChild(categoryTitle);

      // Criar os cards para cada app dentro da categoria
      const row = document.createElement("div");
      row.classList.add("row");

      categories[category].forEach(appData => {
        const appCard = document.createElement("div");
        console.log("ID do app:", appData.appId); // Log para verificar ID do app
        appCard.classList.add("col-md-6", "col-lg-4");
        appCard.innerHTML = `
          <div class="project-card d-flex align-items-center">
            <img src="${appData.logoUrl}" alt="Ícone do Projeto" class="project-icon">
            <div>
              <h3 class="project-title">${appData.nome}</h3>
              <p class="project-description">${appData.descricaoCurta}</p>
              <!-- Passando o appId para a página de detalhes -->
              <a href="detalhes.html?appId=${appData.appId}" class="btn btn-primary details-button" target="_blank">Ver detalhes</a>
              <a href="${appData.apkUrl}" class="btn btn-success mt-2" download>Baixar APK</a>
            </div>
          </div>
        `;
        row.appendChild(appCard);
      });

      categoryContainer.appendChild(row);
      appsContainer.appendChild(categoryContainer);
    }

  } catch (error) {
    console.error("Erro ao carregar os aplicativos:", error);
  }
}

// Chamar a função para exibir os apps assim que o DOM estiver carregado
document.addEventListener("DOMContentLoaded", displayApps);
