import { Link } from 'react-router-dom';
import '../Home.css';

function Home() {
  return (
    <main>
      {/* Modern Hero Section */}
      <section className="modern-hero">
        <div className="container">
          <div className="modern-hero-content">
            <span className="modern-hero-badge">
              <i className="fas fa-rocket"></i> Inovação & Tecnologia
            </span>
            <h1>Ferreira Tech Lab</h1>
            <p>
              Desenvolvendo soluções tecnológicas inovadoras em Inteligência Artificial,
              Computação em Nuvem e Segurança Cibernética
            </p>
            <div className="modern-hero-actions">
              <Link to="/projects" className="modern-btn-primary">
                <i className="fas fa-folder-open"></i>
                Explorar Projetos
              </Link>
              <Link to="/contact" className="modern-btn-secondary">
                <i className="fas fa-envelope"></i>
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Projetos em Destaque</span>
            <h2>Pesquisa & Desenvolvimento</h2>
            <p>
              Projetos de pesquisa em IA, orquestração inteligente e segurança cibernética
            </p>
          </div>

          <div className="project-featured-grid">
            {/* Symphony Project */}
            <Link to="/symphony" className="project-featured-card">
              <div className="project-featured-header">
                <div className="project-featured-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <h3>Symphony</h3>
                <p>Mestrado PGCOMP/UFBA</p>
              </div>
              <div className="project-featured-body">
                <p className="project-featured-description">
                  Orquestrador inteligente para ambientes IoT/Edge/Cloud com aprendizado
                  por reforço, otimização multiobjetivo e explainability. Pesquisa em
                  sistemas distribuídos e computação cognitiva.
                </p>
                <div className="project-featured-tags">
                  <span className="project-tag">Reinforcement Learning</span>
                  <span className="project-tag">Edge Computing</span>
                  <span className="project-tag">IoT</span>
                </div>
                <span className="project-featured-link">
                  Ver documentação <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </Link>

            {/* Horus-CDS Project */}
            <Link to="/horus" className="project-featured-card">
              <div className="project-featured-header">
                <div className="project-featured-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Hórus-CDS</h3>
                <p>TCC UESB - Ciência da Computação</p>
              </div>
              <div className="project-featured-body">
                <p className="project-featured-description">
                  Sistema de detecção de ataques DDoS em Smart Grids usando Temporal
                  Convolutional Networks (TCN). Segurança cibernética para infraestruturas
                  críticas de energia elétrica.
                </p>
                <div className="project-featured-tags">
                  <span className="project-tag">Deep Learning</span>
                  <span className="project-tag">Cybersecurity</span>
                  <span className="project-tag">Smart Grids</span>
                </div>
                <span className="project-featured-link">
                  Ver documentação <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </Link>

            {/* Mobile Solutions */}
            <Link to="/projects" className="project-featured-card">
              <div className="project-featured-header">
                <div className="project-featured-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3>Soluções Mobile</h3>
                <p>Apps para o Dia-a-Dia</p>
              </div>
              <div className="project-featured-body">
                <p className="project-featured-description">
                  Aplicativos Android desenvolvidos para facilitar o cotidiano das pessoas.
                  Segurança de dados, utilitários práticos e ferramentas de produtividade
                  sempre gratuitas e open source.
                </p>
                <div className="project-featured-tags">
                  <span className="project-tag">Android</span>
                  <span className="project-tag">Kotlin</span>
                  <span className="project-tag">Open Source</span>
                </div>
                <span className="project-featured-link">
                  Ver aplicativos <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Projetos de Pesquisa</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Aplicativos Desenvolvidos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%+</span>
              <span className="stat-label">Precisão em IA</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Open Source</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Features Section */}
      <section className="modern-features">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Nossos Valores</span>
            <h2>Tecnologia com Propósito</h2>
            <p>Princípios que guiam nosso trabalho e pesquisa</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Inovação</h3>
              <p>
                Pesquisa de ponta em IA, aprendizado de máquina e sistemas distribuídos,
                sempre buscando soluções criativas para problemas complexos.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Código Aberto</h3>
              <p>
                Todos os projetos são open source. Acreditamos no compartilhamento de
                conhecimento e na colaboração para o avanço da tecnologia.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Aprendizado Contínuo</h3>
              <p>
                Compromisso com educação e pesquisa acadêmica. Desenvolvimento constante
                através de mestrado, cursos e colaborações institucionais.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Segurança</h3>
              <p>
                Foco em cibersegurança e proteção de infraestruturas críticas. Sistemas
                robustos e confiáveis para ambientes de produção.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Colaboração</h3>
              <p>
                Trabalho em conjunto com instituições de pesquisa, indústria e comunidade.
                Parcerias que geram impacto real.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Resultados Mensuráveis</h3>
              <p>
                Métricas rigorosas, validação científica e reprodutibilidade. Pesquisa
                aplicada com resultados comprovados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
