function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="container">
          <h1>Contato</h1>
        </div>
      </section>

      {/* Contact Container */}
      <div className="container my-5">
        <div className="contact-container">
          <h2>Sobre Weslei Ferreira Santos</h2>
          <img
            src="/assets/img/perfil.jpg"
            alt="Weslei Ferreira Santos"
            className="profile-photo"
          />
          <p className="highlighted-text">
            Estudante do 8º semestre de Ciência da Computação na UESB.
          </p>
          <p>
            Atualmente, estou desenvolvendo meu TCC em Aprendizagem de Máquina
            aplicado à segurança de redes elétricas. Sou apaixonado por
            desenvolvimento mobile e outras áreas da programação, além de estar
            me especializando na área de Inteligência Artificial.
          </p>
          <h3>Tecnologias que domino</h3>
          <p>
            Domino diversas tecnologias, incluindo Python, Java, Kotlin, e
            frameworks de desenvolvimento web como Django e Flask. Também tenho
            experiência em desenvolvimento mobile com Android e sou o
            idealizador da Ferreira Tech Lab, onde crio soluções tecnológicas
            inovadoras para a comunidade.
          </p>
          <p>
            Estou sempre em busca de novos desafios e oportunidades para
            expandir meus conhecimentos e contribuir para o avanço da
            tecnologia.
          </p>

          {/* Timeline Section */}
          <h3>Minha Trajetória</h3>
          <div className="timeline">
            <div className="timeline-event">
              <h4>2017</h4>
              <ul>
                <li>
                  <p>
                    Comecei a aprender Python sob a orientação de meus
                    professores de matemática.
                  </p>
                </li>
              </ul>
            </div>
            <div className="timeline-event">
              <h4>2018</h4>
              <ul>
                <li>
                  <p>
                    Me aventurei no C++ por meio de documentação e cursos
                    online.
                  </p>
                </li>
                <li>
                  <p>
                    Me introduzi ao desenvolvimento web por meio de extensa
                    documentação e cursos online.
                  </p>
                </li>
              </ul>
            </div>
            <div className="timeline-event">
              <h4>2019</h4>
              <ul>
                <li>
                  <p>
                    Ingressei na faculdade de Engenharia de Computação da
                    FAINOR, completando 4 semestres.
                  </p>
                </li>
                <li>
                  <p>
                    Iniciei meus estudos em programação de microcontroladores,
                    começando com o Arduino, explorando sua aplicação em
                    diversos projetos eletrônicos e de automação.
                  </p>
                </li>
              </ul>
            </div>
            <div className="timeline-event">
              <h4>2020</h4>
              <ul>
                <li>
                  <p>
                    Transferi-me para o curso de Ciência da Computação na UESB.
                  </p>
                </li>
                <li>
                  <p>Iniciei estágio em Robótica na CNSFS.</p>
                </li>
              </ul>
            </div>
            <div className="timeline-event">
              <h4>2021</h4>
              <ul>
                <li>
                  <p>
                    Participei do programa de iniciação científica LARA,
                    ajudando a criar o framework{' '}
                    <a
                      href="https://microbotpy.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MicrobotPy
                    </a>{' '}
                    para programação de robôs com ESP-32.{' '}
                    <a
                      href="https://github.com/wesleiferreira98/LARA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub do LARA
                    </a>
                    .
                  </p>
                </li>
              </ul>
            </div>
            <div className="timeline-event">
              <h4>2022</h4>
              <ul>
                <li>
                  <p>Apresentei um projeto de carro autônomo na SeComp 2022.</p>
                </li>
              </ul>
            </div>
            <div className="timeline-event">
              <h4>2023</h4>
              <ul>
                <li>
                  <p>Concluí o estágio na CNSFS.</p>
                </li>
                <li>
                  <p>
                    Ingressei em um estágio na OPSS (Otimização, Programação e
                    Simulação de Sistemas), onde fui responsável pelo
                    desenvolvimento de aplicativos mobile.
                  </p>
                </li>
                <li>
                  <p>
                    Ministrei um minicurso sobre Linux na Semana de Integração
                    de 2023.1.
                  </p>
                </li>
                <li>
                  <p>
                    Ministrei minicursos de Python e desenvolvimento web na
                    SeComp 2023.
                  </p>
                </li>
              </ul>
            </div>
            <div className="timeline-event">
              <h4>2024</h4>
              <ul>
                <li>
                  <p>Concluí o estágio na OPSS.</p>
                </li>
                <li>
                  <p>
                    Participei do programa de residência de software RESTIC 36.
                    Na trilha de Ciência de dados.
                  </p>
                </li>
                <li>
                  <p>
                    Comecei a desenvolver meu TCC em segurança de redes
                    elétricas.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <h3>Conecte-se comigo</h3>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/weslei-ferreira-64a123208/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/wesleiferreira98"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
