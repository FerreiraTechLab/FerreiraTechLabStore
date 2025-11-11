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
            Mestrando em Ciência da Computação no PGCOMP/UFBA - Linha de Ciência de Dados.
          </p>
          <p>
            Bacharel em Ciência da Computação pela UESB, atualmente desenvolvo pesquisas em 
            Inteligência Artificial, computação em nuvem/borda e segurança cibernética. 
            Meu foco está em sistemas inteligentes de orquestração para ambientes IoT/Edge/Cloud, 
            aprendizado por reforço e detecção de ameaças em infraestruturas críticas.
          </p>
          <h3>Tecnologias e Áreas de Atuação</h3>
          <p>
            Possuo expertise em Python, Java, Kotlin, C++, e frameworks como Django, Flask, 
            TensorFlow e PyTorch. Experiência com desenvolvimento mobile Android, sistemas 
            distribuídos, aprendizado de máquina e deep learning. Atualmente pesquiso 
            orquestração inteligente em ambientes Edge/Cloud, aprendizado por reforço e 
            sistemas de detecção de ameaças cibernéticas.
          </p>
          <p>
            Idealizador da Ferreira Tech Lab, onde desenvolvo projetos como Symphony 
            (orquestrador cognitivo para IoT), Hórus-CDS (detecção de ataques em smart grids) 
            e ConexAI (analytics e IA para setor financeiro).
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
            <div className="timeline-event">
              <h4>2025</h4>
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
                    Desenvolvimento do projeto ConexAI V3 (analytics e IA para setor financeiro), 
                    com foco em retenção de contexto e geração automática de relatórios.
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
