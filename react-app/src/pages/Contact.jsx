import '../Contact.css';

function Contact() {
  return (
    <>
      {/* Modern Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contato & Trajetória</h1>
            <p>Pesquisador em IA, Sistemas Distribuídos e Segurança Cibernética</p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="profile-section">
        <div className="container">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-photo-wrapper">
                <img
                  src="/assets/img/perfil.jpg"
                  alt="Weslei Ferreira Santos"
                  className="profile-photo"
                />
              </div>
              <h2 className="profile-name">Weslei Ferreira Santos</h2>
              <p className="profile-title">
                <i className="fas fa-graduation-cap"></i>
                Mestrando em Ciência da Computação - PGCOMP/UFBA
              </p>
            </div>

            <div className="profile-bio">
              <p>
                Bacharel em Ciência da Computação pela UESB, atualmente desenvolvo pesquisas em 
                Inteligência Artificial, computação em nuvem/borda e segurança cibernética. 
                Meu foco está em sistemas inteligentes de orquestração para ambientes IoT/Edge/Cloud, 
                aprendizado por reforço e detecção de ameaças em infraestruturas críticas.
              </p>
            </div>

            <div className="expertise-section">
              <h3>
                <i className="fas fa-code"></i>
                Tecnologias e Áreas de Atuação
              </h3>
              <p className="expertise-content">
                Possuo expertise em Python, Java, Kotlin, C++, e frameworks como Django, Flask, 
                TensorFlow e PyTorch. Experiência com desenvolvimento mobile Android, sistemas 
                distribuídos, aprendizado de máquina e deep learning. Atualmente pesquiso 
                orquestração inteligente em ambientes Edge/Cloud, aprendizado por reforço e 
                sistemas de detecção de ameaças cibernéticas.
              </p>
              <div className="projects-highlight">
                <p>
                  <strong>Idealizador da Ferreira Tech Lab</strong>, onde desenvolvo projetos como 
                  <strong> Symphony</strong> (orquestrador cognitivo para IoT), 
                  <strong> Hórus-CDS</strong> (detecção de ataques em smart grids) e diversos
                  <strong> aplicativos mobile</strong> open source para facilitar o dia-a-dia das pessoas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Modern Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="timeline-header">
            <h2>Minha Trajetória</h2>
            <p>Uma jornada de aprendizado contínuo e evolução profissional</p>
          </div>

          <div className="modern-timeline">
            <div className="timeline-item">
              <div className="timeline-year">
                <span className="year-badge">2017</span>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-card">
                  <ul>
                    <li>
                      <p>
                        Comecei a aprender Python sob a orientação de meus
                        professores de matemática.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">
                <span className="year-badge">2018</span>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-card">
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
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">
                <span className="year-badge">2019</span>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-card">
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
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">
                <span className="year-badge">2020</span>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-card">
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
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">
                <span className="year-badge">2021</span>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-card">
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
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">
                <span className="year-badge">2022</span>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-card">
                  <ul>
                    <li>
                      <p>Apresentei um projeto de carro autônomo na SeComp 2022.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">
                <span className="year-badge">2023</span>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-card">
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
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">
                <span className="year-badge">2024</span>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-card">
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
            </div>

            <div className="timeline-item">
              <div className="timeline-year">
                <span className="year-badge">2025</span>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-card">
                  <ul>
                    <li>
                      <p>
                        Atuei como professor de Robótica Educacional (6º ao 9º ano), 
                        desenvolvendo material didático próprio e plataforma de interpretação 
                        de pseudocódigo para apoio pedagógico.
                      </p>
                    </li>
                    <li>
                      <p>
                        Desenvolvimento de diversos aplicativos mobile open source focados
                        em segurança, utilitários e produtividade para dispositivos Android.
                      </p>
                    </li>
                    <li>
                      <p>
                        Consolidação do Hórus-CDS com quatro versões do agente de detecção 
                        (RNN, LSTM, GRU, TCN), incluindo API Flask e interfaces desktop/web.
                      </p>
                    </li>
                    <li>
                      <p>
                        Ingresso no mestrado em Ciência da Computação (PGCOMP/UFBA) - 
                        Linha de Ciência de Dados.
                      </p>
                    </li>
                    <li>
                      <p>
                        Início do projeto Symphony: orquestrador inteligente para ambientes 
                        IoT/Edge/Cloud com aprendizado por reforço, métricas de SLA e 
                        explainability. Preparação de artigo para SBRC 2026.
                      </p>
                    </li>
                    <li>
                      <p>
                        Colaboração com iniciativas jurídicas/tecnológicas (Integra Service / 
                        PGFN-SERPRO) em projetos de ingestão de dados e busca semântica.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="social-section">
        <div className="container">
          <h2>Conecte-se comigo</h2>
          <div className="modern-social-links">
            <a
              href="https://www.linkedin.com/in/weslei-ferreira-64a123208/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-card"
            >
              <i className="fab fa-linkedin"></i>
              <div className="social-link-text">
                <span className="social-name">LinkedIn</span>
                <span className="social-handle">Weslei Ferreira</span>
              </div>
            </a>
            <a
              href="https://github.com/wesleiferreira98"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-card"
            >
              <i className="fab fa-github"></i>
              <div className="social-link-text">
                <span className="social-name">GitHub</span>
                <span className="social-handle">@wesleiferreira98</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
