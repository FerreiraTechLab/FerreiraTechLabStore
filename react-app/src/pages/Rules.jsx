function Rules() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <h1>Diretrizes de Envio de Aplicativos</h1>
      </section>

      {/* Rules Container */}
      <div className="container my-5">
        <div className="rules-container bg-white p-5 rounded shadow">
          <h3>
            Bem-vindo à Ferreira Tech Lab Store! Para garantir a qualidade,
            transparência e segurança da nossa plataforma, todas as submissões
            de aplicativos devem atender às diretrizes abaixo:
          </h3>

          <h2 className="mt-4">1. Código Fonte Open-Source</h2>
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

          <h2 className="mt-4">2. Requisitos de Conteúdo</h2>
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

          <h2 className="mt-4">3. Monetização</h2>
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

          <h2 className="mt-4">4. Concordância com as Diretrizes</h2>
          <p>
            Ao enviar seu aplicativo para a Ferreira Tech Lab Store, você
            concorda automaticamente com todas as diretrizes descritas nesta
            página. Certifique-se de revisar cuidadosamente antes de prosseguir
            com o envio.
          </p>

          <h2 className="mt-4">5. Penalidades e Suspensões</h2>
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

          <h2 className="mt-4">6. Como Enviar</h2>
          <p>
            Para enviar seu aplicativo, acesse nosso portal de envio e preencha
            o formulário com as informações necessárias, incluindo o link para o
            repositório do código fonte e demais detalhes obrigatórios.
          </p>

          <div className="text-center mt-5">
            <a
              href="https://developer-ferreiratechlab.web.app/"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar Aplicativo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rules;
