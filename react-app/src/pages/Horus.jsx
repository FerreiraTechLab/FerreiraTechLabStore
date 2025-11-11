import React, { useState } from 'react';
import '../HorusDocs.css';

function Horus() {
  const [activeSection, setActiveSection] = useState('intro');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="horus-docs">
      {/* Hero Banner */}
      <div className="horus-hero">
        <div className="horus-hero-content">
          <span className="horus-badge">TCC UESB - Ciência da Computação</span>
          <h1 className="horus-title">Hórus-CDS</h1>
          <p className="horus-subtitle">
            Cyber Detection System para Smart Grids - Detecção de ataques DDoS em redes elétricas inteligentes usando TCN
          </p>

          <div className="horus-stats">
            <div className="horus-stat-item">
              <span className="horus-stat-number">TCN</span>
              <span className="horus-stat-label">Neural Networks</span>
            </div>
            <div className="horus-stat-item">
              <span className="horus-stat-number">95%+</span>
              <span className="horus-stat-label">Precisão</span>
            </div>
            <div className="horus-stat-item">
              <span className="horus-stat-number">Real-time</span>
              <span className="horus-stat-label">Monitoramento</span>
            </div>
          </div>

          <div className="horus-actions">
            <a
              href="https://github.com/wesleiferreira98/Horus-CDS"
              target="_blank"
              rel="noopener noreferrer"
              className="horus-btn-primary"
            >
              <i className="fab fa-github" style={{ marginRight: '8px' }}></i>
              Ver no GitHub
            </a>
            <button onClick={() => scrollToSection('quickstart')} className="horus-btn-secondary">
              Quick Start
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="horus-main">
        {/* Sidebar Navigation */}
        <aside className="horus-sidebar">
          <nav className="horus-sidebar-nav">
            <div className="horus-nav-section">
              <h4>Introdução</h4>
              <a
                href="#intro"
                className={activeSection === 'intro' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}
              >
                Visão Geral
              </a>
              <a
                href="#objectives"
                className={activeSection === 'objectives' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('objectives'); }}
              >
                Objetivos
              </a>
              <a
                href="#features"
                className={activeSection === 'features' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
              >
                Funcionalidades
              </a>
            </div>

            <div className="horus-nav-section">
              <h4>Começando</h4>
              <a
                href="#requirements"
                className={activeSection === 'requirements' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('requirements'); }}
              >
                Requisitos
              </a>
              <a
                href="#quickstart"
                className={activeSection === 'quickstart' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('quickstart'); }}
              >
                Quick Start
              </a>
              <a
                href="#installation"
                className={activeSection === 'installation' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('installation'); }}
              >
                Instalação
              </a>
            </div>

            <div className="horus-nav-section">
              <h4>Tecnologia</h4>
              <a
                href="#architecture"
                className={activeSection === 'architecture' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('architecture'); }}
              >
                Arquitetura
              </a>
              <a
                href="#models"
                className={activeSection === 'models' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('models'); }}
              >
                Modelos de IA
              </a>
              <a
                href="#interfaces"
                className={activeSection === 'interfaces' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('interfaces'); }}
              >
                Interfaces
              </a>
            </div>

            <div className="horus-nav-section">
              <h4>GPU & Deployment</h4>
              <a
                href="#gpu"
                className={activeSection === 'gpu' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('gpu'); }}
              >
                Aceleração GPU
              </a>
              <a
                href="#docker"
                className={activeSection === 'docker' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('docker'); }}
              >
                Docker
              </a>
            </div>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="horus-content">
          {/* Introdução */}
          <section id="intro" className="horus-doc-section">
            <h1>Hórus-CDS</h1>
            <p className="lead">
              O Hórus-Cyber Detection System é uma ferramenta desenvolvida como trabalho de conclusão de curso (TCC) 
              na UESB para detecção e monitoramento de incidentes de segurança em redes elétricas inteligentes (Smart Grids).
            </p>

            <div className="horus-alert horus-alert-info">
              <div className="horus-alert-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="horus-alert-content">
                <h3>Foco em Segurança Cibernética</h3>
                <p>
                  O sistema utiliza <strong>Temporal Convolutional Networks (TCN)</strong> para identificar padrões 
                  anômalos nos logs de acesso, com foco especial na detecção de ataques distribuídos de negação de 
                  serviço (DDoS) que podem comprometer a infraestrutura crítica de energia.
                </p>
              </div>
            </div>

            <p>
              As Smart Grids representam o futuro da distribuição de energia elétrica, mas também introduzem novos 
              vetores de ataque cibernético. O Hórus-CDS oferece uma camada de proteção inteligente, capaz de aprender 
              e adaptar-se a novos padrões de ameaças através de machine learning.
            </p>

            <div style={{ textAlign: 'center', margin: '40px 0' }}>
              <img 
                src="/assets/img/horus/logoSPTI.png" 
                alt="Logo Hórus-CDS" 
                style={{ maxWidth: '300px', height: 'auto' }}
              />
            </div>
          </section>

          {/* Objetivos */}
          <section id="objectives" className="horus-doc-section">
            <h2>Objetivos do Projeto</h2>

            <h3>Selos de Qualidade</h3>
            <p>O Hórus-CDS foi desenvolvido seguindo rigorosos padrões de qualidade acadêmica:</p>

            <div className="horus-feature-grid">
              <div className="horus-feature-item">
                <div className="horus-feature-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h4>SeloD - Disponível</h4>
                <p>Código-fonte e modelos treinados acessíveis publicamente</p>
              </div>

              <div className="horus-feature-item">
                <div className="horus-feature-icon">
                  <i className="fas fa-cog"></i>
                </div>
                <h4>SeloF - Funcional</h4>
                <p>Ferramenta executável conforme documentação</p>
              </div>

              <div className="horus-feature-item">
                <div className="horus-feature-icon">
                  <i className="fas fa-redo"></i>
                </div>
                <h4>SeloR - Reprodutível</h4>
                <p>Experimentos replicáveis com instruções completas</p>
              </div>
            </div>
          </section>

          {/* Funcionalidades */}
          <section id="features" className="horus-doc-section">
            <h2>Principais Funcionalidades</h2>

            <div className="horus-feature-grid">
              <div className="horus-feature-item">
                <div className="horus-feature-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <h4>Detecção Inteligente</h4>
                <p>TCN para identificação de padrões anômalos em tempo real</p>
              </div>

              <div className="horus-feature-item">
                <div className="horus-feature-icon">
                  <i className="fas fa-chart-area"></i>
                </div>
                <h4>Dashboard Web</h4>
                <p>Interface interativa para monitoramento e visualização</p>
              </div>

              <div className="horus-feature-item">
                <div className="horus-feature-icon">
                  <i className="fas fa-desktop"></i>
                </div>
                <h4>Interface PyQt5</h4>
                <p>Aplicação desktop para treinamento de modelos</p>
              </div>

              <div className="horus-feature-item">
                <div className="horus-feature-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h4>Aceleração GPU</h4>
                <p>Suporte CUDA para treinamento rápido com NVIDIA GPUs</p>
              </div>

              <div className="horus-feature-item">
                <div className="horus-feature-icon">
                  <i className="fas fa-server"></i>
                </div>
                <h4>API REST</h4>
                <p>Backend Flask para integração e inferência</p>
              </div>

              <div className="horus-feature-item">
                <div className="horus-feature-icon">
                  <i className="fas fa-docker"></i>
                </div>
                <h4>Docker Ready</h4>
                <p>Deployment simplificado com containers</p>
              </div>
            </div>
          </section>

          {/* Requisitos */}
          <section id="requirements" className="horus-doc-section">
            <h2>Requisitos do Sistema</h2>

            <h3>Hardware</h3>
            <ul>
              <li><strong>Processador:</strong> Intel Core i5 ou superior (AMD Ryzen 5+)</li>
              <li><strong>RAM:</strong> 8GB mínimo (16GB recomendado)</li>
              <li><strong>Disco:</strong> 10GB livres</li>
              <li><strong>GPU (Opcional):</strong> NVIDIA GPU com CUDA support
                <ul>
                  <li>GeForce RTX 20xx/30xx/40xx, GTX 16xx</li>
                  <li>Compute Capability 3.5+</li>
                  <li>4GB VRAM mínimo (6GB+ recomendado)</li>
                </ul>
              </li>
            </ul>

            <h3>Software</h3>
            <ul>
              <li><strong>Python:</strong> 3.12 (testado com 3.12.12)</li>
              <li><strong>CUDA:</strong> 12.3+ (12.6 recomendado) - apenas para GPU</li>
              <li><strong>cuDNN:</strong> 9.0+ (9.5.1 recomendado) - apenas para GPU</li>
              <li><strong>Docker:</strong> 20.10+ (opcional)</li>
            </ul>

            <div className="horus-alert horus-alert-info">
              <div className="horus-alert-icon">
                <i className="fas fa-info-circle"></i>
              </div>
              <div className="horus-alert-content">
                <h3>Nota sobre GPU</h3>
                <p>
                  A aceleração GPU não é obrigatória. O sistema pode ser executado apenas com CPU, 
                  porém com maior tempo de treinamento dos modelos.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Start */}
          <section id="quickstart" className="horus-doc-section">
            <h2>Quick Start</h2>
            <p>Instale e execute o Hórus-CDS em poucos minutos:</p>

            <h3>Instalação Rápida (Linux/macOS)</h3>
            <div className="horus-code-block">
              <div className="horus-code-header">
                <span className="horus-code-lang">Bash</span>
                <button className="horus-code-copy" onClick={() => {
                  navigator.clipboard.writeText('git clone https://github.com/wesleiferreira98/Horus-CDS.git\ncd Horus-CDS\n./scripts/install.sh');
                }}>
                  <i className="fas fa-copy"></i>
                </button>
              </div>
              <pre><code>{`git clone https://github.com/wesleiferreira98/Horus-CDS.git
cd Horus-CDS
./scripts/install.sh`}</code></pre>
            </div>

            <h3>Instalação Rápida (Windows)</h3>
            <div className="horus-code-block">
              <div className="horus-code-header">
                <span className="horus-code-lang">CMD</span>
              </div>
              <pre><code>{`git clone https://github.com/wesleiferreira98/Horus-CDS.git
cd Horus-CDS
scripts\\install.bat`}</code></pre>
            </div>

            <div className="horus-alert horus-alert-success">
              <div className="horus-alert-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="horus-alert-content">
                <p>
                  O instalador detecta automaticamente GPU NVIDIA e oferece opções de instalação interativas!
                </p>
              </div>
            </div>
          </section>

          {/* Instalação */}
          <section id="installation" className="horus-doc-section">
            <h2>Instalação Detalhada</h2>

            <h3>Opção 1: Ambiente Virtual Python (Recomendado)</h3>
            <div className="horus-code-block">
              <div className="horus-code-header">
                <span className="horus-code-lang">Bash</span>
              </div>
              <pre><code>{`# Clone o repositório
git clone https://github.com/wesleiferreira98/Horus-CDS.git
cd Horus-CDS

# Crie ambiente virtual
python3.12 -m venv venv-Horus

# Ative o ambiente (Linux/macOS)
source venv-Horus/bin/activate

# Ative o ambiente (Windows)
# venv-Horus\\Scripts\\activate

# Instale dependências
pip install --upgrade pip
pip install -r requirements.txt`}</code></pre>
            </div>

            <h3>Opção 2: Docker (Produção)</h3>
            <div className="horus-code-block">
              <div className="horus-code-header">
                <span className="horus-code-lang">Bash</span>
              </div>
              <pre><code>{`# CPU-only
docker-compose build
docker-compose up -d

# Com GPU NVIDIA
docker-compose -f docker-compose-gpu.yml build
docker-compose -f docker-compose-gpu.yml up -d

# Acessar:
# API: http://localhost:5000
# Dashboard: http://localhost:5001`}</code></pre>
            </div>

            <h3>Verificar Instalação</h3>
            <div className="horus-code-block">
              <div className="horus-code-header">
                <span className="horus-code-lang">Python</span>
              </div>
              <pre><code>{`python scripts/test_gpu_setup.py`}</code></pre>
            </div>
          </section>

          {/* Arquitetura */}
          <section id="architecture" className="horus-doc-section">
            <h2>Arquitetura do Sistema</h2>
            <p className="lead">
              O Hórus-CDS é composto por três componentes principais que trabalham em conjunto.
            </p>

            <h3>Estrutura de Diretórios</h3>
            <div className="horus-code-block">
              <div className="horus-code-header">
                <span className="horus-code-lang">Estrutura</span>
              </div>
              <pre><code>{`Horus-CDS/
├── root/
│   ├── Linux/              # Interface PyQt5 para treinamento
│   ├── web/                # Dashboard web interativo
│   │   ├── templates/      # HTML templates
│   │   └── static/         # CSS, JS, imagens
│   └── API/                # Backend Flask
│       ├── models/         # Modelos ML pré-treinados
│       └── logs/           # Logs do sistema
├── scripts/                # Scripts de instalação
├── docs/                   # Documentação completa
├── docker-compose.yml      # Config Docker CPU
└── docker-compose-gpu.yml  # Config Docker GPU`}</code></pre>
            </div>

            <h3>Tecnologias Utilizadas</h3>
            <div>
              <span className="horus-tech-badge"><i className="fab fa-python"></i> Python 3.12</span>
              <span className="horus-tech-badge">TensorFlow/Keras</span>
              <span className="horus-tech-badge">PyQt5</span>
              <span className="horus-tech-badge">Flask</span>
              <span className="horus-tech-badge">Pandas</span>
              <span className="horus-tech-badge">NumPy</span>
              <span className="horus-tech-badge">Scikit-learn</span>
              <span className="horus-tech-badge">Matplotlib</span>
              <span className="horus-tech-badge">Seaborn</span>
              <span className="horus-tech-badge"><i className="fab fa-docker"></i> Docker</span>
            </div>
          </section>

          {/* Modelos */}
          <section id="models" className="horus-doc-section">
            <h2>Modelos de Inteligência Artificial</h2>

            <div className="horus-alert horus-alert-info">
              <div className="horus-alert-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <div className="horus-alert-content">
                <h3>Temporal Convolutional Networks (TCN)</h3>
                <p>
                  Modelo principal do Hórus-CDS, ideal para análise de séries temporais de logs. 
                  TCNs combinam a capacidade de capturar dependências temporais longas com eficiência computacional.
                </p>
              </div>
            </div>

            <h3>Outros Modelos Testados</h3>
            <p>Além do TCN, foram avaliados outros modelos de machine learning para comparação:</p>
            <ul>
              <li><strong>LSTM</strong> - Long Short-Term Memory networks</li>
              <li><strong>Random Forest</strong> - Ensemble de árvores de decisão</li>
              <li><strong>SVM</strong> - Support Vector Machines</li>
              <li><strong>XGBoost</strong> - Gradient boosting otimizado</li>
            </ul>

            <p>
              Os modelos foram comparados em termos de <strong>precisão</strong>, <strong>recall</strong>, 
              <strong>F1-score</strong> e <strong>tempo de inferência</strong>, com TCN apresentando o melhor 
              desempenho geral para detecção de DDoS.
            </p>
          </section>

          {/* Interfaces */}
          <section id="interfaces" className="horus-doc-section">
            <h2>Interfaces do Sistema</h2>

            <h3>1. Interface PyQt5 (Desktop)</h3>
            <p>Aplicação desktop para treinamento e avaliação de modelos:</p>
            <ul>
              <li>Carregamento e pré-processamento de datasets</li>
              <li>Seleção de algoritmos de ML</li>
              <li>Treinamento com visualização em tempo real</li>
              <li>Avaliação de métricas e matrizes de confusão</li>
              <li>Exportação de modelos treinados</li>
            </ul>

            <div className="horus-screenshots">
              <img src="/assets/img/horus/1762094258794.png" alt="Interface Desktop - Tela Principal" />
              <img src="/assets/img/horus/1729628644600.png" alt="Interface Desktop - Treinamento" />
              <img src="/assets/img/horus/1729628665997.png" alt="Interface Desktop - Métricas" />
            </div>

            <h3>2. Dashboard Web (Monitoring)</h3>
            <p>Interface web responsiva para monitoramento em tempo real:</p>
            <ul>
              <li>Visualização de logs de acesso</li>
              <li>Detecção de ataques em tempo real</li>
              <li>Gráficos e métricas de segurança</li>
              <li>Alertas de incidentes</li>
              <li>Histórico de eventos</li>
            </ul>
            <div className="horus-screenshots">
              <img src="/assets/img/horus/1729629299664.png" alt="API REST - Endpoints" />
              <img src="/assets/img/horus/1729864786627.png" alt="API REST - Documentação" />
            </div>

            <h3>3. API REST</h3>
            <p>Backend Flask para integração e automação:</p>
            <ul>
              <li>Endpoints para inferência de modelos</li>
              <li>Upload e processamento de logs</li>
              <li>Consulta de histórico</li>
              <li>Gerenciamento de modelos</li>
            </ul>

          </section>

          {/* GPU */}
          <section id="gpu" className="horus-doc-section">
            <h2>Aceleração GPU com CUDA</h2>

            <div className="horus-alert horus-alert-warning">
              <div className="horus-alert-icon">
                <i className="fas fa-microchip"></i>
              </div>
              <div className="horus-alert-content">
                <h3>Requisitos para GPU</h3>
                <p>
                  Para utilizar aceleração GPU, é necessário instalar CUDA Toolkit e cuDNN. 
                  Consulte a documentação completa em <code>docs/CUDA_INSTALLATION.md</code>
                </p>
              </div>
            </div>

            <h3>Instalação CUDA (Ubuntu/Fedora)</h3>
            <div className="horus-code-block">
              <div className="horus-code-header">
                <span className="horus-code-lang">Bash</span>
              </div>
              <pre><code>{`# Verificar GPU NVIDIA
nvidia-smi

# Instalar CUDA Toolkit 12.6
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2404/x86_64/cuda-keyring_1.1-1_all.deb
sudo dpkg -i cuda-keyring_1.1-1_all.deb
sudo apt-get update
sudo apt-get install cuda-toolkit-12-6

# Configurar variáveis de ambiente
echo 'export PATH=/usr/local/cuda-12.6/bin:\${PATH}' >> ~/.bashrc
echo 'export LD_LIBRARY_PATH=/usr/local/cuda-12.6/lib64:\${LD_LIBRARY_PATH}' >> ~/.bashrc
source ~/.bashrc`}</code></pre>
            </div>

            <h3>Verificar GPU Setup</h3>
            <div className="horus-code-block">
              <div className="horus-code-header">
                <span className="horus-code-lang">Python</span>
              </div>
              <pre><code>{`python scripts/test_gpu_setup.py`}</code></pre>
            </div>
          </section>

          {/* Docker */}
          <section id="docker" className="horus-doc-section">
            <h2>Deployment com Docker</h2>

            <h3>Docker Compose (CPU)</h3>
            <div className="horus-code-block">
              <div className="horus-code-header">
                <span className="horus-code-lang">YAML</span>
              </div>
              <pre><code>{`version: '3.8'

services:
  horus-api:
    build: ./root/API
    ports:
      - "5000:5000"
    volumes:
      - ./root/API:/app
    environment:
      - FLASK_ENV=production

  horus-web:
    build: ./root/web
    ports:
      - "5001:5001"
    depends_on:
      - horus-api`}</code></pre>
            </div>

            <h3>Docker Compose (GPU)</h3>
            <p>Para usar GPU dentro de containers Docker:</p>
            <div className="horus-code-block">
              <div className="horus-code-header">
                <span className="horus-code-lang">Bash</span>
              </div>
              <pre><code>{`# Instalar NVIDIA Container Toolkit
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -
curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
sudo apt-get update && sudo apt-get install -y nvidia-container-toolkit
sudo systemctl restart docker

# Executar com GPU
docker-compose -f docker-compose-gpu.yml up -d`}</code></pre>
            </div>
          </section>

        </main>

        {/* Table of Contents */}
        <aside className="horus-toc">
          <h4>Nesta Página</h4>
          <ul>
            <li><a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}>Introdução</a></li>
            <li><a href="#objectives" onClick={(e) => { e.preventDefault(); scrollToSection('objectives'); }}>Objetivos</a></li>
            <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Funcionalidades</a></li>
            <li><a href="#requirements" onClick={(e) => { e.preventDefault(); scrollToSection('requirements'); }}>Requisitos</a></li>
            <li><a href="#quickstart" onClick={(e) => { e.preventDefault(); scrollToSection('quickstart'); }}>Quick Start</a></li>
            <li><a href="#installation" onClick={(e) => { e.preventDefault(); scrollToSection('installation'); }}>Instalação</a></li>
            <li><a href="#architecture" onClick={(e) => { e.preventDefault(); scrollToSection('architecture'); }}>Arquitetura</a></li>
            <li><a href="#models" onClick={(e) => { e.preventDefault(); scrollToSection('models'); }}>Modelos de IA</a></li>
            <li><a href="#interfaces" onClick={(e) => { e.preventDefault(); scrollToSection('interfaces'); }}>Interfaces</a></li>
            <li><a href="#gpu" onClick={(e) => { e.preventDefault(); scrollToSection('gpu'); }}>Aceleração GPU</a></li>
            <li><a href="#docker" onClick={(e) => { e.preventDefault(); scrollToSection('docker'); }}>Docker</a></li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default Horus;
