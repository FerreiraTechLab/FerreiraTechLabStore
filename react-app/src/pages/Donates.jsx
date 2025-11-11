import { useState } from 'react';
import '../Donates.css';

function Donates() {
  const [copied, setCopied] = useState(false);
  const pixKey = 'a8152299-69a1-4f8e-9ef4-e47e8c3fe63d';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Modern Hero Section */}
      <section className="donates-hero">
        <div className="container">
          <div className="donates-hero-content">
            <h1>Apoie Nossos Projetos</h1>
            <p>
              Sua contribuição ajuda a manter todos os nossos projetos gratuitos e de código aberto
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="donates-content-section">
        <div className="container">
          <div className="donates-main-card">
            <div className="donates-header">
              <div className="donates-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h2>Ajude a Ferreira Tech Lab</h2>
              <p className="donates-subtitle">Sua contribuição faz toda a diferença!</p>
              <p className="donates-description">
                Todos os nossos projetos são desenvolvidos de forma independente e 
                disponibilizados gratuitamente para a comunidade. Com sua doação, 
                podemos continuar pesquisando, desenvolvendo e melhorando nossas 
                soluções em Inteligência Artificial, segurança cibernética e sistemas distribuídos.
              </p>
            </div>

            {/* Benefits */}
            <div className="donates-benefits">
              <div className="benefit-card">
                <i className="fas fa-code-branch"></i>
                <h4>Código Aberto</h4>
                <p>Todos os projetos são open source e disponíveis no GitHub</p>
              </div>
              <div className="benefit-card">
                <i className="fas fa-rocket"></i>
                <h4>Desenvolvimento Contínuo</h4>
                <p>Atualizações constantes com novos recursos e melhorias</p>
              </div>
              <div className="benefit-card">
                <i className="fas fa-graduation-cap"></i>
                <h4>Pesquisa Acadêmica</h4>
                <p>Apoio à pesquisa em IA, segurança e computação em nuvem</p>
              </div>
            </div>

            {/* PIX Donation */}
            <div className="pix-donation-card">
              <h3>
                <i className="fas fa-qrcode"></i>
                Doe via PIX
              </h3>
              <div className="qr-code-container">
                <img
                  src="/assets/img/qr-code.png"
                  alt="QR Code PIX"
                />
              </div>
              <div className="pix-key-container">
                <span className="pix-key-label">Chave PIX (UUID)</span>
                <code className="pix-key-value" style={{ color: '#131320ff' }}>{pixKey}</code>
                <button 
                  className="copy-button" 
                  onClick={handleCopyPix}
                >
                  <i className={copied ? "fas fa-check" : "fas fa-copy"}></i>
                  {copied ? 'Copiado!' : 'Copiar Chave'}
                </button>
              </div>
            </div>

            {/* Thank You Message */}
            <div className="thank-you-message">
              <p>
                Agradecemos imensamente pelo seu apoio e confiança em nosso trabalho!
                <i className="fas fa-heart"></i>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="projects-showcase">
        <div className="container">
          <h3 style={{ color: '#1a1a2e' }}>O que você está apoiando</h3>
          <div className="showcase-grid">
            <div className="showcase-card">
              <div className="showcase-card-icon">
                <i className="fas fa-music"></i>
              </div>
              <h4>Symphony</h4>
              <p>
                Orquestrador cognitivo para ambientes IoT/Edge/Cloud com 
                aprendizado por reforço e explainability
              </p>
            </div>
            <div className="showcase-card">
              <div className="showcase-card-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Hórus-CDS</h4>
              <p>
                Sistema avançado de detecção de ataques cibernéticos em 
                smart grids com múltiplas arquiteturas de deep learning
              </p>
            </div>
            <div className="showcase-card">
              <div className="showcase-card-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h4>Aplicativos Mobile</h4>
              <p>
                Soluções práticas para o dia-a-dia: segurança de dados,
                utilitários e ferramentas de produtividade open source
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Donates;
