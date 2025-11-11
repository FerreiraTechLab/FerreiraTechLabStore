import React, { useState } from 'react';
import '../SymphonyDocs.css';

function Symphony() {
  const [activeSection, setActiveSection] = useState('intro');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="symphony-docs">
      {/* Hero Banner */}
      <div className="symphony-hero">
        <div className="hero-content">
          <span className="hero-badge">Projeto de Mestrado PGCOMP/UFBA</span>
          <h1 className="hero-title">The Symphony Project</h1>
          <p className="hero-subtitle">
            Um orquestrador inteligente baseado em IA para alocação multiobjetivo no Edge–Cloud Continuum
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">0%</span>
              <span className="stat-label">SLA Violations</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">25%</span>
              <span className="stat-label">Energia Economizada</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">18%</span>
              <span className="stat-label">Redução de Custos</span>
            </div>
          </div>

          <div className="hero-actions">
            <a
              href="https://github.com/wesleiferreira98/The-Symphony-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <i className="fab fa-github" style={{ marginRight: '8px' }}></i>
              Ver no GitHub
            </a>
            <button onClick={() => scrollToSection('quickstart')} className="btn-secondary">
              Quick Start
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="symphony-main">
        {/* Sidebar Navigation */}
        <aside className="symphony-sidebar">
          <nav className="sidebar-nav">
            <div className="nav-section">
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
                Principais Funcionalidades
              </a>
            </div>

            <div className="nav-section">
              <h4>Começando</h4>
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
                Instalação Detalhada
              </a>
            </div>

            <div className="nav-section">
              <h4>Arquitetura</h4>
              <a
                href="#architecture"
                className={activeSection === 'architecture' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('architecture'); }}
              >
                Visão Arquitetural
              </a>
              <a
                href="#components"
                className={activeSection === 'components' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('components'); }}
              >
                Componentes
              </a>
              <a
                href="#dataflow"
                className={activeSection === 'dataflow' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('dataflow'); }}
              >
                Fluxo de Dados
              </a>
            </div>

            <div className="nav-section">
              <h4>Metodologia</h4>
              <a
                href="#methodology"
                className={activeSection === 'methodology' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('methodology'); }}
              >
                Abordagem Técnica
              </a>
              <a
                href="#metrics"
                className={activeSection === 'metrics' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('metrics'); }}
              >
                Métricas e Avaliação
              </a>
              <a
                href="#results"
                className={activeSection === 'results' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('results'); }}
              >
                Resultados
              </a>
            </div>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="symphony-content">
          {/* Introdução */}
          <section id="intro" className="doc-section">
            <h1>Introdução ao Symphony</h1>
            <p className="lead">
              O Symphony é um projeto de pesquisa de mestrado desenvolvido por Weslei Ferreira Santos (PGCOMP/UFBA) 
              que propõe um modelo inteligente e adaptativo para orquestração de aplicações no Edge–Cloud Continuum.
            </p>

            <div className="info-card">
              <div className="info-card-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="info-card-content">
                <h3>Por que Symphony?</h3>
                <p>
                  Aplicações modernas exigem decisões de alocação complexas que vão além da simples latência. 
                  O Symphony combina heurísticas clássicas com inteligência artificial para otimizar 
                  simultaneamente SLA, consumo de energia, custos operacionais e privacidade de dados.
                </p>
              </div>
            </div>

            <p>
              Em cenários de Edge-Cloud Continuum, o sistema deve decidir dinamicamente onde executar cada aplicação: 
              em dispositivos IoT com recursos limitados, em servidores de borda com baixa latência, ou na nuvem 
              com alta capacidade computacional. O Symphony utiliza Deep Q-Networks (DQN) para aprender políticas 
              ótimas de alocação através de aprendizado por reforço.
            </p>
          </section>

          {/* Objetivos */}
          <section id="objectives" className="doc-section">
            <h2>Objetivos do Projeto</h2>

            <h3>Objetivo Geral</h3>
            <p>
              Desenvolver e avaliar o Symphony, um orquestrador inteligente baseado em IA, capaz de aprender e 
              adaptar-se continuamente para otimizar múltiplos objetivos na alocação de serviços entre nuvem, 
              borda e dispositivos IoT.
            </p>

            <h3>Objetivos Específicos</h3>
            <ul>
              <li>Mapear o estado da arte em heurísticas, metaheurísticas e IA aplicadas à alocação no continuum</li>
              <li>Projetar o Symphony como um algoritmo híbrido combinando heurística + IA</li>
              <li>Implementar o modelo em simuladores (EdgeSimPy, iFogSim2) e ambientes reais</li>
              <li>Avaliar métricas de SLA, energia, custo e privacidade em diferentes cenários</li>
              <li>Comparar o Symphony com baselines tradicionais (Tetris, First Fit) e métodos de IA puros</li>
            </ul>
          </section>

          {/* Funcionalidades */}
          <section id="features" className="doc-section">
            <h2>Principais Funcionalidades</h2>

            <div className="feature-grid">
              <div className="feature-item">
                <div className="feature-icon bg-blue">
                  <i className="fas fa-robot"></i>
                </div>
                <h4>IA Híbrida</h4>
                <p>Combina DQN com heurísticas clássicas para decisões rápidas e eficientes</p>
              </div>

              <div className="feature-item">
                <div className="feature-icon bg-green">
                  <i className="fas fa-leaf"></i>
                </div>
                <h4>Eficiência Energética</h4>
                <p>Reduz consumo de energia em até 25% através de alocação inteligente</p>
              </div>

              <div className="feature-item">
                <div className="feature-icon bg-yellow">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4>Otimização Multi-objetivo</h4>
                <p>Balanceia SLA, custo, energia e privacidade simultaneamente</p>
              </div>

              <div className="feature-item">
                <div className="feature-icon bg-purple">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <h4>Aprendizado Contínuo</h4>
                <p>Adapta-se a novos padrões de carga através de aprendizado por reforço</p>
              </div>
            </div>
          </section>

          {/* Quick Start */}
          <section id="quickstart" className="doc-section">
            <h2>Quick Start</h2>
            <p>Começe a usar o Symphony em menos de 5 minutos:</p>

            <h3>Pré-requisitos</h3>
            <ul>
              <li>Python 3.9+ (recomendado: 3.13)</li>
              <li>Node.js 16+ e npm</li>
              <li>Git 2.20+</li>
              <li>4GB RAM (recomendado: 8GB+)</li>
              <li>Docker 20.10+ (opcional)</li>
            </ul>

            <h3>Setup Completo</h3>
            <div className="code-block">
              <div className="code-header">
                <span className="code-lang">Bash</span>
                <button className="code-copy" onClick={() => {
                  navigator.clipboard.writeText('git clone https://github.com/wesleiferreira98/The-Symphony-Project.git\ncd The-Symphony-Project\n./setup.sh --full\ncd symphony-web\n./start.sh');
                }}>
                  <i className="fas fa-copy"></i>
                </button>
              </div>
              <pre><code>{`# Clone o repositório
git clone https://github.com/wesleiferreira98/The-Symphony-Project.git
cd The-Symphony-Project

# Execute o setup completo
./setup.sh --full

# Inicie a interface web
cd symphony-web
./start.sh`}</code></pre>
            </div>

            <div className="success-message">
              <i className="fas fa-check-circle"></i>
              <span>Acesse http://localhost:3000 para visualizar a interface web interativa!</span>
            </div>
          </section>

          {/* Instalação Detalhada */}
          <section id="installation" className="doc-section">
            <h2>Instalação Detalhada</h2>

            <h3>Apenas Training (Desenvolvimento de Modelos)</h3>
            <p>Para treinar novos modelos de IA sem interface web:</p>
            <div className="code-block">
              <div className="code-header">
                <span className="code-lang">Bash</span>
              </div>
              <pre><code>{`git clone https://github.com/wesleiferreira98/The-Symphony-Project.git
cd The-Symphony-Project
./setup.sh --training
source symphony-venv/bin/activate
cd symphony-training
python src/train/train_dqn_agent.py`}</code></pre>
            </div>

            <h3>Apenas Web Interface</h3>
            <p>Para executar apenas a interface interativa com modelos pré-treinados:</p>
            <div className="code-block">
              <div className="code-header">
                <span className="code-lang">Bash</span>
              </div>
              <pre><code>{`git clone https://github.com/wesleiferreira98/The-Symphony-Project.git
cd The-Symphony-Project
./setup.sh --web
cd symphony-web
./start.sh`}</code></pre>
            </div>
          </section>

          {/* Arquitetura */}
          <section id="architecture" className="doc-section">
            <h2>Arquitetura do Sistema</h2>
            <p className="lead">
              O Symphony é composto por quatro camadas principais que trabalham em conjunto para 
              otimizar a alocação de aplicações no continuum.
            </p>

            <div className="code-block">
              <div className="code-header">
                <span className="code-lang">Estrutura</span>
              </div>
              <pre><code>{`┌─────────────────────────────────────────────────────────────┐
│                    SYMPHONY PROJECT                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────┐    ┌──────────────┐    ┌────────────────┐  │
│  │  TRAINING  │───▶│   MODELS     │───▶│   WEB APP      │  │
│  │  (Python)  │    │   (.pt)      │    │ (React/FastAPI)│  │
│  └────────────┘    └──────────────┘    └────────────────┘  │
│       │                    │                     │           │
│   PyTorch            Checkpoints            Real-time       │
│   NumPy              Metadata               Inference       │
│   Gymnasium          Tensorboard            WebSockets      │
│       │                    │                     │           │
│  ┌────▼────────┐    ┌─────▼──────┐    ┌────────▼────────┐ │
│  │ Environment │    │ Evaluation │    │  Visualization  │ │
│  │ Simulation  │    │ Metrics    │    │  Monitoring     │ │
│  └─────────────┘    └────────────┘    └─────────────────┘ │
│                                                              │
└─────────────────────────────────────────────────────────────┘`}</code></pre>
            </div>

            <h3>Camadas do Sistema</h3>

            <h4>1. Camada de Dispositivos (IoT/Usuários)</h4>
            <p>Onde as aplicações surgem (sensores, veículos conectados, dispositivos móveis).</p>

            <h4>2. Camada Edge/Fog</h4>
            <p>Nós próximos ao usuário com baixa latência para execução de tarefas críticas em tempo real.</p>

            <h4>3. Camada Cloud</h4>
            <p>Alta capacidade de processamento e armazenamento para tarefas pesadas e análises globais.</p>

            <h4>4. Camada de Orquestração (Symphony)</h4>
            <ul>
              <li><strong>Monitoramento:</strong> Coleta métricas (CPU, memória, rede, energia, custo)</li>
              <li><strong>Previsor:</strong> Usa ML para prever picos de carga e mobilidade</li>
              <li><strong>Decisor de Alocação:</strong> Algoritmo híbrido (heurística + IA)</li>
              <li><strong>Executor:</strong> Despacha a tarefa para o nó escolhido</li>
              <li><strong>Feedback/Aprendizado:</strong> Ajusta políticas com base no desempenho observado</li>
            </ul>
          </section>

          {/* Componentes */}
          <section id="components" className="doc-section">
            <h2>Componentes Técnicos</h2>

            <div className="feature-grid">
              <div className="feature-item">
                <h4>Training Engine</h4>
                <p>PyTorch 2.6+</p>
                <p>Treina agentes DQN/RL</p>
              </div>

              <div className="feature-item">
                <h4>Environment</h4>
                <p>Gymnasium</p>
                <p>Simula Edge-Cloud Continuum</p>
              </div>

              <div className="feature-item">
                <h4>Backend API</h4>
                <p>FastAPI + Uvicorn</p>
                <p>Serve inferência e dados</p>
              </div>

              <div className="feature-item">
                <h4>Frontend</h4>
                <p>React 18 + TypeScript</p>
                <p>Interface interativa</p>
              </div>
            </div>
          </section>

          {/* Fluxo de Dados */}
          <section id="dataflow" className="doc-section">
            <h2>Fluxo de Dados</h2>
            <p>O Symphony opera em um ciclo contínuo de treinamento, avaliação e inferência:</p>

            <ol>
              <li><strong>Simulação:</strong> EdgeSimPy gera cenários sintéticos de alocação</li>
              <li><strong>Treinamento:</strong> DQN aprende políticas ótimas através de tentativa e erro</li>
              <li><strong>Checkpoint:</strong> Modelos treinados são salvos como arquivos .pt</li>
              <li><strong>Inferência:</strong> Backend FastAPI carrega modelos para uso em tempo real</li>
              <li><strong>Visualização:</strong> Frontend React exibe decisões e métricas interativamente</li>
            </ol>
          </section>

          {/* Metodologia */}
          <section id="methodology" className="doc-section">
            <h2>Abordagem Técnica</h2>
            <p>O Symphony combina inteligência adaptativa com heurísticas práticas:</p>

            <h3>Heurísticas de Referência</h3>
            <ul>
              <li><strong>Tetris:</strong> Baseline clássico de alocação</li>
              <li><strong>First Fit / Best Fit:</strong> Algoritmos determinísticos</li>
            </ul>

            <h3>Aprendizado por Reforço</h3>
            <ul>
              <li><strong>DQN (Deep Q-Networks):</strong> Adequado para decisões rápidas em estados discretos</li>
              <li><strong>PPO (Proximal Policy Optimization):</strong> Robusto em ambientes contínuos</li>
              <li><strong>MARL (Multi-Agent RL):</strong> Agentes distribuídos aprendendo cooperativamente</li>
            </ul>
          </section>

          {/* Métricas */}
          <section id="metrics" className="doc-section">
            <h2>Métricas e Avaliação</h2>

            <div className="feature-grid">
              <div className="feature-item">
                <div className="feature-icon bg-blue">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                <h4>SLA Compliance</h4>
                <p>Taxa de violação de acordos de nível de serviço</p>
              </div>

              <div className="feature-item">
                <div className="feature-icon bg-green">
                  <i className="fas fa-bolt"></i>
                </div>
                <h4>Consumo de Energia</h4>
                <p>Eficiência energética da infraestrutura</p>
              </div>

              <div className="feature-item">
                <div className="feature-icon bg-yellow">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <h4>Custo Operacional</h4>
                <p>Redução de custos de computação</p>
              </div>

              <div className="feature-item">
                <div className="feature-icon bg-purple">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>Privacidade</h4>
                <p>Proteção de dados sensíveis</p>
              </div>
            </div>
          </section>

          {/* Resultados */}
          <section id="results" className="doc-section">
            <h2>Resultados Alcançados</h2>

            <div className="info-card">
              <div className="info-card-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="info-card-content">
                <h3>Desempenho do Symphony V7</h3>
                <ul>
                  <li><strong>0% de Violações de SLA:</strong> Garantia total de cumprimento de requisitos</li>
                  <li><strong>25% de Economia de Energia:</strong> Redução significativa no consumo</li>
                  <li><strong>18% de Redução de Custos:</strong> Otimização de recursos computacionais</li>
                  <li><strong>Balanceamento de Carga:</strong> Distribuição equilibrada entre servidores (Gini &lt; 0.2)</li>
                </ul>
              </div>
            </div>

            <p>
              Esses resultados demonstram a eficácia da abordagem híbrida do Symphony, superando tanto 
              heurísticas tradicionais quanto métodos de IA puros em cenários de larga escala.
            </p>
          </section>
        </main>

        {/* Table of Contents */}
        <aside className="symphony-toc">
          <h4>Nesta Página</h4>
          <ul>
            <li><a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}>Introdução</a></li>
            <li><a href="#objectives" onClick={(e) => { e.preventDefault(); scrollToSection('objectives'); }}>Objetivos</a></li>
            <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Funcionalidades</a></li>
            <li><a href="#quickstart" onClick={(e) => { e.preventDefault(); scrollToSection('quickstart'); }}>Quick Start</a></li>
            <li><a href="#installation" onClick={(e) => { e.preventDefault(); scrollToSection('installation'); }}>Instalação</a></li>
            <li><a href="#architecture" onClick={(e) => { e.preventDefault(); scrollToSection('architecture'); }}>Arquitetura</a></li>
            <li><a href="#components" onClick={(e) => { e.preventDefault(); scrollToSection('components'); }}>Componentes</a></li>
            <li><a href="#dataflow" onClick={(e) => { e.preventDefault(); scrollToSection('dataflow'); }}>Fluxo de Dados</a></li>
            <li><a href="#methodology" onClick={(e) => { e.preventDefault(); scrollToSection('methodology'); }}>Metodologia</a></li>
            <li><a href="#metrics" onClick={(e) => { e.preventDefault(); scrollToSection('metrics'); }}>Métricas</a></li>
            <li><a href="#results" onClick={(e) => { e.preventDefault(); scrollToSection('results'); }}>Resultados</a></li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default Symphony;
