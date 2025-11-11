import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import { Link } from 'react-router-dom';
import '../Projects.css';

function Projects() {
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);

  // Função para corrigir palavras específicas
  const corrigirTexto = (texto) => {
    if (!texto) return texto;
    return texto.replace(/\butilitario\b/gi, 'Utilitário');
  };

  // Ícones para categorias
  const categoryIcons = {
    'Segurança': 'fa-shield-alt',
    'Utilitário': 'fa-tools',
    'Produtividade': 'fa-bolt',
    'Multi-Plataforma': 'fa-globe',
    'Em Breve': 'fa-rocket',
    'default': 'fa-mobile-alt'
  };

  const getCategoryIcon = (category) => {
    const iconClass = categoryIcons[category] || categoryIcons['default'];
    return <i className={`fas ${iconClass}`}></i>;
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
      <div className="projects-loading">
        <div className="projects-loading-spinner"></div>
        <p className="projects-loading-text">Carregando projetos incríveis...</p>
      </div>
    );
  }

  return (
    <>
      {/* Modern Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <div className="projects-hero-content">
            <h1>Nossos Projetos</h1>
            <p>
              Soluções inovadoras desenvolvidas com as melhores tecnologias e práticas do mercado.
              Explore nosso portfólio de aplicações mobile e sistemas inteligentes.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Categories */}
      {Object.keys(categories).length > 0 &&
        Object.keys(categories).map((category) => (
          <section key={category} className="projects-category-section">
            <div className="container">
              <div className="category-header">
                <div className="category-icon">
                  {getCategoryIcon(category)}
                </div>
                <h2>{category}</h2>
              </div>
              <div className="modern-projects-grid">
                {categories[category].map((app) => (
                  <Link
                    key={app.appId}
                    to={`/project/${app.appId}`}
                    className="modern-project-card"
                  >
                    <div className="project-card-image">
                      <img
                        src={app.logoUrl || '/assets/img/logo.png'}
                        alt={app.nome}
                        className="project-card-logo"
                      />
                    </div>
                    <div className="project-card-body">
                      <span className="project-status-badge status-active">Ativo</span>
                      <h3 className="project-card-title">{app.nome}</h3>
                      <p className="project-card-description">
                        {app.descricaoCurta}
                      </p>
                      <div className="project-card-footer">
                        <span className="modern-btn modern-btn-primary">
                          <i className="fas fa-rocket"></i>
                          Ver Detalhes
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

      {/* Multi-Plataforma Section */}
      <section className="projects-category-section">
        <div className="container">
          <div className="category-header">
            <div className="category-icon">
              <i className="fas fa-globe"></i>
            </div>
            <h2 style={{ color: '#1a1a2e' }}>Multi-Plataforma</h2>
          </div>
          <div className="modern-projects-grid">
            <div className="modern-project-card">
              <div className="project-card-image">
                <img
                  src="/assets/img/sharexpress/app-logo.png"
                  alt="ShareXpress"
                  className="project-card-logo"
                />
              </div>
              <div className="project-card-body">
                <span className="project-status-badge status-active">Ativo</span>
                <h3 className="project-card-title" style={{ color: '#1a1a2e' }}>ShareXpress</h3>
                <p className="project-card-description" style={{ color: '#1a1a2e' }}>
                  Solução multiplataforma para compartilhar arquivos e textos de forma 
                  rápida e segura entre diferentes dispositivos e sistemas operacionais.
                </p>
                <div className="project-card-footer">
                  <a 
                    href="/projeto-sharexpress.html" 
                    className="modern-btn modern-btn-primary"
                  >
                    <i className="fas fa-rocket"></i>
                    Ver Detalhes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Em Breve Section */}
      <section className="projects-category-section">
        <div className="container">
          <div className="category-header">
            <div className="category-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h2>Em Breve</h2>
          </div>
          <div className="modern-projects-grid">
            <div className="modern-project-card">
              <div className="project-card-image">
                <img
                  src="/assets/img/torrentwave/app-logo.png"
                  alt="TorrentWave"
                  className="project-card-logo"
                />
              </div>
              <div className="project-card-body">
                <span className="project-status-badge status-soon">Em Breve</span>
                <h3 className="project-card-title">TorrentWave</h3>
                <p className="project-card-description">
                  Cliente torrent moderno e eficiente para dispositivos móveis, com 
                  interface intuitiva e recursos avançados de gerenciamento.
                </p>
                <div className="project-card-footer">
                  <button className="modern-btn modern-btn-disabled" disabled>
                    <i className="fas fa-clock"></i>
                    Em Desenvolvimento
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empty State (caso não tenha apps) */}
      {Object.keys(categories).length === 0 && (
        <div className="projects-empty">
          <div className="projects-empty-icon">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <h3>Nenhum projeto encontrado</h3>
          <p>Estamos trabalhando em novos projetos incríveis. Volte em breve!</p>
        </div>
      )}
    </>
  );
}

export default Projects;
