import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import { Link } from 'react-router-dom';

function Projects() {
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);

  // Função para corrigir palavras específicas
  const corrigirTexto = (texto) => {
    if (!texto) return texto;
    return texto.replace(/\butilitario\b/gi, 'Utilitário');
  };

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const appsSnapshot = await getDocs(collection(db, 'apps'));
        const categoriesData = {};

        appsSnapshot.forEach((doc) => {
          const appData = doc.data();

          // Corrigir textos
          appData.nome = corrigirTexto(appData.nome);
          appData.descricaoCurta = corrigirTexto(appData.descricaoCurta);
          appData.categoria = corrigirTexto(appData.categoria);

          // Agrupar por categoria
          if (!categoriesData[appData.categoria]) {
            categoriesData[appData.categoria] = [];
          }

          categoriesData[appData.categoria].push({
            ...appData,
            appId: doc.id,
          });
        });

        setCategories(categoriesData);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar apps:', error);
        setLoading(false);
      }
    };

    fetchApps();
  }, []);

  if (loading) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="container">
          <h1>Nossos Projetos</h1>
          <p className="lead">
            Descubra as soluções inovadoras que estamos desenvolvendo para o
            futuro.
          </p>
        </div>
      </section>

      {/* Projects Container */}
      <div className="container mt-5">
        {/* Apps do Firestore por Categoria */}
        {Object.keys(categories).length > 0 &&
          Object.keys(categories).map((category) => (
            <div key={category} className="mb-5">
              <h2 className="category-title">{category}</h2>
              <div className="projects-grid">
                {categories[category].map((app) => (
                  <div key={app.appId} className="project-card">
                    <img
                      src={app.logoUrl || '/assets/img/logo.png'}
                      alt={app.nome}
                      className="project-icon"
                    />
                    <div className="project-info">
                      <h3 className="project-title">{app.nome}</h3>
                      <p className="project-description">
                        {app.descricaoCurta}
                      </p>
                      <Link
                        to={`/project/${app.appId}`}
                        className="btn btn-primary btn-sm details-button"
                      >
                        Ver Detalhes
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        {/* Multi-Plataforma */}
        <h2 className="category-title">Multi-Plataforma</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img
              src="/assets/img/sharexpress/app-logo.png"
              alt="ShareXpress"
              className="project-icon"
            />
            <div className="project-info">
              <h3 className="project-title">ShareXpress</h3>
              <p className="project-description">
                Uma solução eficiente para compartilhar arquivos e textos em
                múltiplas plataformas.
              </p>
              <a
                href="/projeto-sharexpress.html"
                className="btn btn-primary btn-sm details-button"
              >
                Ver Detalhes
              </a>
            </div>
          </div>
        </div>

        {/* Em Breve */}
        <h2 className="category-title">Em Breve</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img
              src="/assets/img/torrentwave/app-logo.png"
              alt="TorrentWave"
              className="project-icon"
            />
            <div className="project-info">
              <h3 className="project-title">TorrentWave</h3>
              <p className="project-description">
                Seu app de torrent para mobile, rápido e eficiente.
              </p>
              <button className="btn btn-secondary btn-sm details-button" disabled>
                Em breve
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
