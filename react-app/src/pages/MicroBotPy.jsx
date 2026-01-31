import React, { useState } from 'react';
import '../MicroBotPyDocs.css';

function MicroBotPy() {
  const [activeSection, setActiveSection] = useState('intro');
  const [copiedId, setCopiedId] = useState(null);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="microbotpy-docs">
      {/* Hero Banner */}
      <div className="microbotpy-hero">
        <div className="microbotpy-hero-content">
          <div className="microbotpy-inpi-badge">
            <i className="fas fa-certificate"></i>
            <span>Registrado no INPI • BR512023003083-0</span>
          </div>
          <span className="microbotpy-badge">Iniciação Científica - UESB</span>
          <h1 className="microbotpy-title">MicroBotPy</h1>
          <p className="microbotpy-subtitle">
            Framework de alto nível para robótica educacional com MicroPython e ESP32.
            Simplificando a programação de microcontroladores para iniciantes.
          </p>

          <div className="microbotpy-stats">
            <div className="microbotpy-stat-item">
              <span className="microbotpy-stat-number">ESP32</span>
              <span className="microbotpy-stat-label">Microcontrolador</span>
            </div>
            <div className="microbotpy-stat-item">
              <span className="microbotpy-stat-number">Python</span>
              <span className="microbotpy-stat-label">Linguagem</span>
            </div>
            <div className="microbotpy-stat-item">
              <span className="microbotpy-stat-number">INPI</span>
              <span className="microbotpy-stat-label">Registrado</span>
            </div>
          </div>

          <div className="microbotpy-actions">
            <a
              href="https://github.com/wesleiferreira98/MicroBotPy"
              target="_blank"
              rel="noopener noreferrer"
              className="microbotpy-btn-primary"
            >
              <i className="fab fa-github" style={{ marginRight: '8px' }}></i>
              Ver no GitHub
            </a>
            <a
              href="https://microbotpy.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="microbotpy-btn-secondary"
            >
              <i className="fas fa-globe" style={{ marginRight: '8px' }}></i>
              Acessar Site
            </a>
            <button onClick={() => scrollToSection('quickstart')} className="microbotpy-btn-tertiary">
              Quick Start
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="microbotpy-main">
        {/* Sidebar Navigation */}
        <aside className="microbotpy-sidebar">
          <nav className="microbotpy-sidebar-nav">
            <div className="microbotpy-nav-section">
              <h4>Introdução</h4>
              <a
                href="#intro"
                className={activeSection === 'intro' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}
              >
                Visão Geral
              </a>
              <a
                href="#features"
                className={activeSection === 'features' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
              >
                Funcionalidades
              </a>
            </div>

            <div className="microbotpy-nav-section">
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

            <div className="microbotpy-nav-section">
              <h4>Componentes</h4>
              <a
                href="#motors"
                className={activeSection === 'motors' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('motors'); }}
              >
                Motores
              </a>
              <a
                href="#sensors"
                className={activeSection === 'sensors' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('sensors'); }}
              >
                Sensores
              </a>
              <a
                href="#packages"
                className={activeSection === 'packages' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('packages'); }}
              >
                Classe Pacotes
              </a>
            </div>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="microbotpy-content">
          {/* Introdução */}
          <section id="intro" className="microbotpy-doc-section">
            <h1>MicroBotPy</h1>
            <p className="lead">
              MicroBotPy (uma combinação de "MicroPython" e "Robô") é uma extensão do projeto LARA. 
              Este framework foi desenvolvido com o objetivo de oferecer um alto nível de abstração 
              para que os iniciantes em programação de computadores não se sintam intimidados por 
              sintaxes que pareçam extremamente complexas.
            </p>

            <div className="microbotpy-alert microbotpy-alert-info">
              <div className="microbotpy-alert-icon">
                <i className="fas fa-robot"></i>
              </div>
              <div className="microbotpy-alert-content">
                <h3>Robótica Acessível</h3>
                <p>
                  Especificamente projetado para trabalhar com microcontroladores <strong>ESP32</strong> e 
                  o framework <strong>MicroPython</strong>, o MicroBotPy torna mais fácil para os usuários 
                  iniciarem e progredirem no mundo da robótica e automação.
                </p>
              </div>
            </div>

            <p>
              Ao simplificar a interação com os sensores e fornecer um conjunto abrangente de funcionalidades, 
              este framework permite que os usuários se concentrem na lógica e funcionalidade do seu projeto, 
              em vez de lidarem com os detalhes técnicos dos dispositivos de hardware.
            </p>

            <p>
              Com MicroBotPy, a programação de robôs e dispositivos automatizados se torna mais acessível, 
              abrindo as portas para mais pessoas explorarem este campo fascinante.
            </p>

            <div className="microbotpy-alert microbotpy-alert-success">
              <div className="microbotpy-alert-icon">
                <i className="fas fa-award"></i>
              </div>
              <div className="microbotpy-alert-content">
                <h3>Registro de Programa de Computador - INPI</h3>
                <p>
                  O MicroBotPy possui registro de programa de computador junto ao 
                  <strong> Instituto Nacional da Propriedade Industrial (INPI)</strong>, 
                  vinculado ao Ministério do Desenvolvimento, Indústria, Comércio e Serviços.
                  <br /><br />
                  <strong>Processo Nº:</strong> BR512023003083-0
                </p>
              </div>
            </div>
          </section>

          {/* Funcionalidades */}
          <section id="features" className="microbotpy-doc-section">
            <h2>Principais Funcionalidades</h2>

            <div className="microbotpy-feature-grid">
              <div className="microbotpy-feature-item">
                <div className="microbotpy-feature-icon">
                  <i className="fas fa-microchip"></i>
                </div>
                <h4>Suporte ESP32</h4>
                <p>Projetado especificamente para microcontroladores ESP32</p>
              </div>

              <div className="microbotpy-feature-item">
                <div className="microbotpy-feature-icon">
                  <i className="fab fa-python"></i>
                </div>
                <h4>MicroPython</h4>
                <p>Utiliza a linguagem Python simplificada para embarcados</p>
              </div>

              <div className="microbotpy-feature-item">
                <div className="microbotpy-feature-icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <h4>Controle de Motores</h4>
                <p>API simples para controle de motores DC</p>
              </div>

              <div className="microbotpy-feature-item">
                <div className="microbotpy-feature-icon">
                  <i className="fas fa-broadcast-tower"></i>
                </div>
                <h4>Sensores Integrados</h4>
                <p>Suporte a infravermelho, ultrassônico, cor e luz</p>
              </div>

              <div className="microbotpy-feature-item">
                <div className="microbotpy-feature-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h4>Educacional</h4>
                <p>Ideal para ensino de programação e robótica</p>
              </div>

              <div className="microbotpy-feature-item">
                <div className="microbotpy-feature-icon">
                  <i className="fas fa-puzzle-piece"></i>
                </div>
                <h4>Classe Fachada</h4>
                <p>Padrão de design que simplifica o uso das APIs</p>
              </div>
            </div>
          </section>

          {/* Requisitos */}
          <section id="requirements" className="microbotpy-doc-section">
            <h2>Requisitos do Sistema</h2>

            <h3>Hardware</h3>
            <ul>
              <li><strong>Microcontrolador:</strong> ESP32 (qualquer variante)</li>
              <li><strong>Cabo USB:</strong> Para conexão com o computador</li>
              <li><strong>Sensores (opcionais):</strong> Infravermelho, Ultrassônico, Cor, Luz</li>
              <li><strong>Motores DC:</strong> Para movimentação do robô</li>
            </ul>

            <h3>Software</h3>
            <ul>
              <li><strong>Python:</strong> 3.4 ou superior</li>
              <li><strong>esptool.py:</strong> Ferramenta para flash do firmware</li>
              <li><strong>Thonny IDE:</strong> Recomendado para desenvolvimento</li>
              <li><strong>MicroPython Firmware:</strong> Última versão para ESP32</li>
            </ul>

            <h3>Tecnologias Utilizadas</h3>
            <div>
              <span className="microbotpy-tech-badge"><i className="fab fa-python"></i> Python</span>
              <span className="microbotpy-tech-badge">MicroPython</span>
              <span className="microbotpy-tech-badge">ESP32</span>
              <span className="microbotpy-tech-badge">Thonny IDE</span>
              <span className="microbotpy-tech-badge">esptool</span>
            </div>
          </section>

          {/* Quick Start */}
          <section id="quickstart" className="microbotpy-doc-section">
            <h2>Quick Start</h2>
            <p>Comece a usar o MicroBotPy em poucos passos:</p>

            <h3>1. Instale o esptool</h3>
            <div className="microbotpy-code-block">
              <div className="microbotpy-code-header">
                <span className="microbotpy-code-lang">Shell</span>
                <button 
                  className={`microbotpy-code-copy ${copiedId === 'esptool' ? 'copied' : ''}`}
                  onClick={() => handleCopy('pip install esptool', 'esptool')}
                >
                  <i className={`fas ${copiedId === 'esptool' ? 'fa-check' : 'fa-copy'}`}></i>
                </button>
              </div>
              <pre><code>{`pip install esptool`}</code></pre>
            </div>

            <h3>2. Apague o Flash do ESP32</h3>
            <div className="microbotpy-code-block">
              <div className="microbotpy-code-header">
                <span className="microbotpy-code-lang">Shell</span>
                <button 
                  className={`microbotpy-code-copy ${copiedId === 'erase' ? 'copied' : ''}`}
                  onClick={() => handleCopy('esptool.py --port /dev/ttyUSB0 erase_flash', 'erase')}
                >
                  <i className={`fas ${copiedId === 'erase' ? 'fa-check' : 'fa-copy'}`}></i>
                </button>
              </div>
              <pre><code>{`esptool.py --port /dev/ttyUSB0 erase_flash`}</code></pre>
            </div>

            <h3>3. Instale o MicroPython</h3>
            <div className="microbotpy-code-block">
              <div className="microbotpy-code-header">
                <span className="microbotpy-code-lang">Shell</span>
                <button 
                  className={`microbotpy-code-copy ${copiedId === 'flash' ? 'copied' : ''}`}
                  onClick={() => handleCopy('esptool.py --chip esp32 --port /dev/ttyUSB0 write_flash -z 0x1000 micropython.bin', 'flash')}
                >
                  <i className={`fas ${copiedId === 'flash' ? 'fa-check' : 'fa-copy'}`}></i>
                </button>
              </div>
              <pre><code>{`esptool.py --chip esp32 --port /dev/ttyUSB0 write_flash -z 0x1000 micropython.bin`}</code></pre>
            </div>

            <div className="microbotpy-alert microbotpy-alert-success">
              <div className="microbotpy-alert-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="microbotpy-alert-content">
                <p>
                  Pronto! Agora você pode usar o Thonny IDE para programar seu ESP32 com MicroPython.
                </p>
              </div>
            </div>
          </section>

          {/* Instalação */}
          <section id="installation" className="microbotpy-doc-section">
            <h2>Configurando o Thonny IDE</h2>

            <ol>
              <li>Baixe e instale o <a href="https://thonny.org" target="_blank" rel="noopener noreferrer">Thonny IDE</a></li>
              <li>Conecte o ESP32 via USB</li>
              <li>No Thonny, vá para <code>Run {'>'} Select Interpreter</code></li>
              <li>Escolha <strong>"MicroPython (ESP32)"</strong></li>
              <li>Selecione a porta serial correta</li>
            </ol>

            <h3>Importando as Classes</h3>
            <div className="microbotpy-code-block">
              <div className="microbotpy-code-header">
                <span className="microbotpy-code-lang">Python</span>
                <button 
                  className={`microbotpy-code-copy ${copiedId === 'import' ? 'copied' : ''}`}
                  onClick={() => handleCopy("import sys\nsys.path.insert(1,'/classes')\nimport Pacotes\n\nmeus_pacotes = Pacotes.Pacotes()", 'import')}
                >
                  <i className={`fas ${copiedId === 'import' ? 'fa-check' : 'fa-copy'}`}></i>
                </button>
              </div>
              <pre><code>{`import sys
sys.path.insert(1,'/classes')
import Pacotes

meus_pacotes = Pacotes.Pacotes()`}</code></pre>
            </div>
          </section>

          {/* Motores */}
          <section id="motors" className="microbotpy-doc-section">
            <h2>Controle de Motores</h2>
            <p>A classe <code>Motor</code> é usada para controlar os movimentos de dois motores do robô.</p>

            <h3>Inicialização</h3>
            <div className="microbotpy-code-block">
              <div className="microbotpy-code-header">
                <span className="microbotpy-code-lang">Python</span>
                <button 
                  className={`microbotpy-code-copy ${copiedId === 'motor-init' ? 'copied' : ''}`}
                  onClick={() => handleCopy('meu_motor = Pacotes.Motor()', 'motor-init')}
                >
                  <i className={`fas ${copiedId === 'motor-init' ? 'fa-check' : 'fa-copy'}`}></i>
                </button>
              </div>
              <pre><code>{`meu_motor = Pacotes.Motor()`}</code></pre>
            </div>

            <h3>Movendo os Motores</h3>
            <div className="microbotpy-code-block">
              <div className="microbotpy-code-header">
                <span className="microbotpy-code-lang">Python</span>
                <button 
                  className={`microbotpy-code-copy ${copiedId === 'motor-move' ? 'copied' : ''}`}
                  onClick={() => handleCopy("# Mover para frente\nmeu_motor.frenteMotor1(velocidade)\nmeu_motor.frenteMotor2(velocidade)\n\n# Mover para trás\nmeu_motor.trazMotor1(velocidade)\nmeu_motor.trazMotor2(velocidade)\n\n# Parar motores\nmeu_motor.pararMotores()", 'motor-move')}
                >
                  <i className={`fas ${copiedId === 'motor-move' ? 'fa-check' : 'fa-copy'}`}></i>
                </button>
              </div>
              <pre><code>{`# Mover para frente
meu_motor.frenteMotor1(velocidade)
meu_motor.frenteMotor2(velocidade)

# Mover para trás
meu_motor.trazMotor1(velocidade)
meu_motor.trazMotor2(velocidade)

# Parar motores
meu_motor.pararMotores()`}</code></pre>
            </div>

            <h3>Métodos Disponíveis</h3>
            <ul>
              <li><code>frenteMotor1(velocidade)</code> - Move motor 1 para frente</li>
              <li><code>frenteMotor2(velocidade)</code> - Move motor 2 para frente</li>
              <li><code>trazMotor1(velocidade)</code> - Move motor 1 para trás</li>
              <li><code>trazMotor2(velocidade)</code> - Move motor 2 para trás</li>
              <li><code>pararMotor1()</code> - Para motor 1</li>
              <li><code>pararMotor2()</code> - Para motor 2</li>
              <li><code>pararMotores()</code> - Para todos os motores</li>
            </ul>
          </section>

          {/* Sensores */}
          <section id="sensors" className="microbotpy-doc-section">
            <h2>Sensores</h2>
            <p>O MicroBotPy oferece suporte a diversos tipos de sensores:</p>

            <h3>Sensor Infravermelho (Infra)</h3>
            <div className="microbotpy-code-block">
              <div className="microbotpy-code-header">
                <span className="microbotpy-code-lang">Python</span>
                <button 
                  className={`microbotpy-code-copy ${copiedId === 'infra' ? 'copied' : ''}`}
                  onClick={() => handleCopy("meu_infra = Infra()\ndistancia = meu_infra.calculaDistancia()", 'infra')}
                >
                  <i className={`fas ${copiedId === 'infra' ? 'fa-check' : 'fa-copy'}`}></i>
                </button>
              </div>
              <pre><code>{`meu_infra = Infra()
distancia = meu_infra.calculaDistancia()`}</code></pre>
            </div>

            <h3>Sensor Infravermelho Digital (InfraDig)</h3>
            <div className="microbotpy-code-block">
              <div className="microbotpy-code-header">
                <span className="microbotpy-code-lang">Python</span>
                <button 
                  className={`microbotpy-code-copy ${copiedId === 'infradig' ? 'copied' : ''}`}
                  onClick={() => handleCopy("meu_infra_dig = InfraDig()\nobjeto = meu_infra_dig.haObjeto()  # True se objeto < 30cm", 'infradig')}
                >
                  <i className={`fas ${copiedId === 'infradig' ? 'fa-check' : 'fa-copy'}`}></i>
                </button>
              </div>
              <pre><code>{`meu_infra_dig = InfraDig()
objeto = meu_infra_dig.haObjeto()  # True se objeto < 30cm`}</code></pre>
            </div>

            <h3>Sensor Ultrassônico (Ultra)</h3>
            <div className="microbotpy-code-block">
              <div className="microbotpy-code-header">
                <span className="microbotpy-code-lang">Python</span>
                <button 
                  className={`microbotpy-code-copy ${copiedId === 'ultra' ? 'copied' : ''}`}
                  onClick={() => handleCopy("from Pacotes import Ultra\n\nultra = Ultra(tr=trigger_pin, echo=echo_pin)\nultra.iniciaSensor()\nprint(ultra.calculaDistaciaUltra())", 'ultra')}
                >
                  <i className={`fas ${copiedId === 'ultra' ? 'fa-check' : 'fa-copy'}`}></i>
                </button>
              </div>
              <pre><code>{`from Pacotes import Ultra

ultra = Ultra(tr=trigger_pin, echo=echo_pin)
ultra.iniciaSensor()
print(ultra.calculaDistaciaUltra())`}</code></pre>
            </div>

            <h3>Sensor de Cor (SensorCor)</h3>
            <div className="microbotpy-code-block">
              <div className="microbotpy-code-header">
                <span className="microbotpy-code-lang">Python</span>
                <button 
                  className={`microbotpy-code-copy ${copiedId === 'cor' ? 'copied' : ''}`}
                  onClick={() => handleCopy("meu_sensor_cor = SensorCor(s0, s1, s2, s3, out)\n\nvermelho = meu_sensor_cor.RetornaCorVermelha()\nazul = meu_sensor_cor.RetornaCorAzul()\nverde = meu_sensor_cor.RetornaCorVerde()\nbranco = meu_sensor_cor.RetornaCorBranco()", 'cor')}
                >
                  <i className={`fas ${copiedId === 'cor' ? 'fa-check' : 'fa-copy'}`}></i>
                </button>
              </div>
              <pre><code>{`meu_sensor_cor = SensorCor(s0, s1, s2, s3, out)

vermelho = meu_sensor_cor.RetornaCorVermelha()
azul = meu_sensor_cor.RetornaCorAzul()
verde = meu_sensor_cor.RetornaCorVerde()
branco = meu_sensor_cor.RetornaCorBranco()`}</code></pre>
            </div>

            <h3>Sensor de Luz (SensorLuz)</h3>
            <div className="microbotpy-code-block">
              <div className="microbotpy-code-header">
                <span className="microbotpy-code-lang">Python</span>
                <button 
                  className={`microbotpy-code-copy ${copiedId === 'luz' ? 'copied' : ''}`}
                  onClick={() => handleCopy("from Pacotes import SensorLuz\n\nluz = SensorLuz()\nluz.ligarSensor1()\nprint(luz.RetornaValorLuzSensor1())\nluz.desligarSensor1()", 'luz')}
                >
                  <i className={`fas ${copiedId === 'luz' ? 'fa-check' : 'fa-copy'}`}></i>
                </button>
              </div>
              <pre><code>{`from Pacotes import SensorLuz

luz = SensorLuz()
luz.ligarSensor1()
print(luz.RetornaValorLuzSensor1())
luz.desligarSensor1()`}</code></pre>
            </div>
          </section>

          {/* Classe Pacotes */}
          <section id="packages" className="microbotpy-doc-section">
            <h2>Classe Pacotes (Fachada)</h2>
            <p>
              A classe <code>Pacotes</code> serve como um agregador ou "fachada" para as outras classes. 
              Ela facilita o uso, permitindo criar uma única instância que inicializa todas as outras classes automaticamente.
            </p>

            <div className="microbotpy-alert microbotpy-alert-info">
              <div className="microbotpy-alert-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="microbotpy-alert-content">
                <h3>Padrão de Design Fachada</h3>
                <p>
                  O uso da classe Pacotes é recomendado para simplificar e agrupar as operações do robô, 
                  fornecendo um ponto de acesso unificado a todos os sensores e funcionalidades.
                </p>
              </div>
            </div>

            <h3>Exemplo de Uso</h3>
            <div className="microbotpy-code-block">
              <div className="microbotpy-code-header">
                <span className="microbotpy-code-lang">Python</span>
                <button 
                  className={`microbotpy-code-copy ${copiedId === 'pacotes' ? 'copied' : ''}`}
                  onClick={() => handleCopy("meu_pacote = Pacote()\n\n# Acessar sensores através da fachada\ndistancia = meu_pacote.infra.calculaDistancia()\nobjeto = meu_pacote.infra_dig.haObjeto()\nvermelho = meu_pacote.sensor_cor.RetornaCorVermelha()", 'pacotes')}
                >
                  <i className={`fas ${copiedId === 'pacotes' ? 'fa-check' : 'fa-copy'}`}></i>
                </button>
              </div>
              <pre><code>{`meu_pacote = Pacote()

# Acessar sensores através da fachada
distancia = meu_pacote.infra.calculaDistancia()
objeto = meu_pacote.infra_dig.haObjeto()
vermelho = meu_pacote.sensor_cor.RetornaCorVermelha()`}</code></pre>
            </div>

            <h3>Executando Rotinas</h3>
            <div className="microbotpy-code-block">
              <div className="microbotpy-code-header">
                <span className="microbotpy-code-lang">Python</span>
                <button 
                  className={`microbotpy-code-copy ${copiedId === 'rotina' ? 'copied' : ''}`}
                  onClick={() => handleCopy("# Executa a rotina por 2 minutos\nPacotes.rotina(2)", 'rotina')}
                >
                  <i className={`fas ${copiedId === 'rotina' ? 'fa-check' : 'fa-copy'}`}></i>
                </button>
              </div>
              <pre><code>{`# Executa a rotina por 2 minutos
Pacotes.rotina(2)`}</code></pre>
            </div>

            <p>
              Durante a rotina, o LED no pino 2 piscará. Quando a rotina terminar, 
              "programa finalizado." será impresso na saída.
            </p>
          </section>

        </main>

        {/* Table of Contents */}
        <aside className="microbotpy-toc">
          <h4>Nesta Página</h4>
          <ul>
            <li><a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}>Introdução</a></li>
            <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Funcionalidades</a></li>
            <li><a href="#requirements" onClick={(e) => { e.preventDefault(); scrollToSection('requirements'); }}>Requisitos</a></li>
            <li><a href="#quickstart" onClick={(e) => { e.preventDefault(); scrollToSection('quickstart'); }}>Quick Start</a></li>
            <li><a href="#installation" onClick={(e) => { e.preventDefault(); scrollToSection('installation'); }}>Instalação</a></li>
            <li><a href="#motors" onClick={(e) => { e.preventDefault(); scrollToSection('motors'); }}>Motores</a></li>
            <li><a href="#sensors" onClick={(e) => { e.preventDefault(); scrollToSection('sensors'); }}>Sensores</a></li>
            <li><a href="#packages" onClick={(e) => { e.preventDefault(); scrollToSection('packages'); }}>Classe Pacotes</a></li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default MicroBotPy;
