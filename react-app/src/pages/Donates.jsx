function Donates() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <h1>Doações</h1>
        <p>Apoie o desenvolvimento dos nossos projetos</p>
      </section>

      {/* Donation Container */}
      <div className="container my-5">
        <div className="donation-container">
          <h2>Ajude a Ferreira Tech Lab</h2>
          <p className="highlighted-text">
            Sua contribuição faz toda a diferença!
          </p>
          <p>
            Todos os nossos projetos são gratuitos e de código aberto. Com sua
            doação, podemos continuar desenvolvendo e melhorando nossas
            soluções.
          </p>

          {/* QR Code Section */}
          <div className="qr-code">
            <h3>Doe via PIX</h3>
            <img
              src="/assets/img/qr-code.png"
              alt="QR Code PIX"
              style={{ maxWidth: '250px' }}
            />
            <p className="pix-key mt-3">
              <strong>Chave PIX:</strong> <span>a8152299-69a1-4f8e-9ef4-e47e8c3fe63d</span>
            </p>
          </div>

          <p className="mt-4">
            Agradecemos muito pelo seu apoio e confiança em nosso trabalho! 💙
          </p>
        </div>
      </div>
    </>
  );
}

export default Donates;
