import '../Rules.css';

function Rules() {
  return (
    <>
      {/* Modern Hero Section */}
      <section className="rules-hero">
        <div className="container">
          <div className="rules-hero-content">
            <h1>Diretrizes de Envio de Aplicativos</h1>
            <p>
              Transparência, qualidade e segurança são a base da nossa plataforma
            </p>
          </div>
        </div>
      </section>

      {/* Rules Content Section */}
      <section className="rules-content-section">
        <div className="container">
          <div className="rules-main-card">
            {/* Introduction */}
            <div className="rules-intro">
              <h3>
                Bem-vindo à Ferreira Tech Lab Store! Para garantir a qualidade,
                transparência e segurança da nossa plataforma, todas as submissões
                de aplicativos devem atender às diretrizes abaixo:
              </h3>
            </div>

            {/* Rule 1 */}
            <div className="rule-item">
              <div className="rule-header">
                <div className="rule-number">1</div>
                <h2 className="rule-title">Código Fonte Open-Source</h2>
              </div>
              <div className="rule-content">
                <ul>
                  <li>
                    Todos os aplicativos enviados devem ser{' '}
                    <span className="highlight">open-source</span>.
                  </li>
                  <li>
                    O código fonte deve estar hospedado em um repositório público no{' '}
                    <span className="highlight">GitHub</span> ou{' '}
                    <span className="highlight">GitLab</span>.
                  </li>
                  <li>
                    Você, como desenvolvedor, deve ter a propriedade e os direitos
                    sobre o código fonte.
                  </li>
                </ul>
              </div>
            </div>

            {/* Rule 2 */}
            <div className="rule-item">
              <div className="rule-header">
                <div className="rule-number">2</div>
                <h2 className="rule-title">Requisitos de Conteúdo</h2>
              </div>
              <div className="rule-content">
                <ul>
                  <li>
                    Cada aplicativo deve incluir uma{' '}
                    <span className="highlight">descrição breve</span> e uma{' '}
                    <span className="highlight">descrição longa</span> que expliquem
                    claramente suas funcionalidades e público-alvo.
                  </li>
                  <li>
                    É obrigatório incluir um{' '}
                    <span className="highlight">changelog</span> detalhado,
                    documentando as mudanças de cada versão do aplicativo.
                  </li>
                </ul>
              </div>
            </div>

            {/* Rule 3 */}
            <div className="rule-item">
              <div className="rule-header">
                <div className="rule-number">3</div>
                <h2 className="rule-title">Monetização</h2>
              </div>
              <div className="rule-content">
                <ul>
                  <li>
                    Você pode monetizar seu aplicativo por meio de{' '}
                    <span className="highlight">anúncios</span> integrados.
                  </li>
                  <li>
                    Opções para aplicativos pagos serão disponibilizadas em breve. Por
                    enquanto, apenas aplicativos gratuitos com anúncios são aceitos.
                  </li>
                </ul>
              </div>
            </div>

            {/* Rule 4 */}
            <div className="rule-item">
              <div className="rule-header">
                <div className="rule-number">4</div>
                <h2 className="rule-title">Concordância com as Diretrizes</h2>
              </div>
              <div className="rule-content">
                <p>
                  Ao enviar seu aplicativo para a Ferreira Tech Lab Store, você
                  concorda automaticamente com todas as diretrizes descritas nesta
                  página. Certifique-se de revisar cuidadosamente antes de prosseguir
                  com o envio.
                </p>
              </div>
            </div>

            {/* Rule 5 */}
            <div className="rule-item">
              <div className="rule-header">
                <div className="rule-number">5</div>
                <h2 className="rule-title">Penalidades e Suspensões</h2>
              </div>
              <div className="rule-content">
                <ul>
                  <li>
                    Aplicativos que violarem estas diretrizes poderão ser removidos
                    sem aviso prévio.
                  </li>
                  <li>
                    Não serão aceitos conteúdos que promovam ou incluam:
                    <ul>
                      <li>
                        <span className="highlight">Discurso de ódio</span>,
                        incluindo, mas não limitado a, racismo, nazismo, misoginia,
                        homofobia ou qualquer outra forma de preconceito.
                      </li>
                      <li>
                        Conteúdos considerados{' '}
                        <span className="highlight">violentos</span> ou que incentivem
                        atividades ilegais.
                      </li>
                      <li>
                        Material que viole direitos autorais ou propriedade
                        intelectual.
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="warning-box">
                  <p>
                    <i className="fas fa-exclamation-triangle"></i>
                    Violações graves podem resultar em banimento permanente da plataforma
                  </p>
                </div>
              </div>
            </div>

            {/* Rule 6 */}
            <div className="rule-item">
              <div className="rule-header">
                <div className="rule-number">6</div>
                <h2 className="rule-title">Como Enviar</h2>
              </div>
              <div className="rule-content">
                <p>
                  Para enviar seu aplicativo, acesse nosso portal de desenvolvedores e 
                  preencha o formulário com as informações necessárias, incluindo o link 
                  para o repositório do código fonte, descrições detalhadas, screenshots 
                  e demais informações obrigatórias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Section */}
      <section className="submit-section">
        <div className="container">
          <div className="submit-content">
            <h2>Pronto para enviar seu app?</h2>
            <p>
              Acesse o portal de desenvolvedores e compartilhe sua criação com a comunidade
            </p>
            <a
              href="https://developer-ferreiratechlab.web.app/"
              className="submit-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-rocket"></i>
              Acessar Portal de Desenvolvedores
            </a>

            <div className="benefits-grid">
              <div className="benefit-item">
                <i className="fas fa-users"></i>
                <h4>Comunidade Ativa</h4>
                <p>Alcance milhares de usuários interessados em tecnologia</p>
              </div>
              <div className="benefit-item">
                <i className="fas fa-chart-line"></i>
                <h4>Analytics Detalhados</h4>
                <p>Acompanhe downloads, feedbacks e engajamento</p>
              </div>
              <div className="benefit-item">
                <i className="fas fa-shield-alt"></i>
                <h4>Hospedagem Segura</h4>
                <p>Infraestrutura confiável com backups regulares</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Rules;
