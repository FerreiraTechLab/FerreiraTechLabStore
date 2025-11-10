import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="parallax-bg"></div>
        <div className="container">
          <h1>Bem-vindo à Ferreira Tech Lab</h1>
          <p>Inovação e tecnologia para um futuro melhor</p>
          <Link to="/projects" className="btn btn-primary btn-lg mt-4">
            Conheça nossos projetos
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Inovação</h3>
              <p>
                Buscamos sempre a inovação em cada projeto, oferecendo soluções
                tecnológicas avançadas.
              </p>
            </div>
            <div className="col-md-4">
              <div className="icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Tecnologia</h3>
              <p>
                Utilizamos as melhores ferramentas e tecnologias para garantir
                alta performance e qualidade.
              </p>
            </div>
            <div className="col-md-4">
              <div className="icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Colaboração</h3>
              <p>
                Acreditamos na colaboração para alcançar resultados
                excepcionais.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Código Aberto</h3>
              <p>
                Promovemos e contribuímos com o código aberto, acreditando que
                o compartilhamento de conhecimento fortalece a comunidade.
              </p>
            </div>
            <div className="col-md-4">
              <div className="icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Sustentabilidade</h3>
              <p>
                Comprometidos com práticas sustentáveis, focamos em soluções
                que minimizam o impacto ambiental.
              </p>
            </div>
            <div className="col-md-4">
              <div className="icon">
                <i className="fas fa-book"></i>
              </div>
              <h3>Aprendizado Contínuo</h3>
              <p>
                Incentivamos o aprendizado contínuo e a evolução constante para
                acompanhar as inovações do mercado.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
