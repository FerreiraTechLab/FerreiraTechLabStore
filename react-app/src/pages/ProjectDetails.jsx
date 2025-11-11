import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import '../ProjectDetails.css';

function ProjectDetails() {
  const { appId } = useParams();
  const [appData, setAppData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  useEffect(() => {
    const fetchAppDetails = async () => {
      if (!appId) {
        console.error('appId não encontrado!');
        return;
      }

      try {
        const appRef = doc(db, 'apps', appId);
        const docSnap = await getDoc(appRef);

        if (docSnap.exists()) {
          setAppData(docSnap.data());
        } else {
          console.error('Documento não encontrado!');
        }
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar detalhes:', error);
        setLoading(false);
      }
    };

    fetchAppDetails();
  }, [appId]);

  const nextScreenshot = () => {
    if (appData?.screenshotsUrls) {
      setCurrentScreenshot((prev) =>
        prev === appData.screenshotsUrls.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevScreenshot = () => {
    if (appData?.screenshotsUrls) {
      setCurrentScreenshot((prev) =>
        prev === 0 ? appData.screenshotsUrls.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return (
      <div className="project-details-loading">
        <div className="project-details-spinner"></div>
        <p style={{ color: '#5f6368', fontSize: '1.1rem' }}>Carregando aplicativo...</p>
      </div>
    );
  }

  if (!appData) {
    return (
      <div className="container text-center py-5">
        <h2 style={{ color: '#202124', fontWeight: '500' }}>Aplicativo não encontrado</h2>
        <p style={{ color: '#5f6368' }}>O aplicativo solicitado não existe ou foi removido.</p>
      </div>
    );
  }

  const funcionalidades = appData.funcionalidades
    ? appData.funcionalidades.split(',')
    : [];
  const requisitos = appData.requisitos ? appData.requisitos.split(',') : [];
  const arquiteturas = Array.isArray(appData.arquiteturaSuportada)
    ? appData.arquiteturaSuportada.join(', ')
    : 'Não especificado';
  
  const changelog = appData.changelog
    ? appData.changelog.split('\n').filter(line => line.trim())
    : [];

  return (
    <div className="container-fluid px-4 my-5">
      {/* Project Header */}
      <section className="project-header">
        <img
          src={appData.logoUrl || '/assets/img/logo.png'}
          alt={appData.nome}
        />
        <div className="project-details">
          <h1>{appData.nome}</h1>
          <p>{appData.descricaoCurta}</p>
          <button
            type="button"
            className="btn btn-primary details-button"
            data-bs-toggle="modal"
            data-bs-target="#downloadModal"
          >
            Obter
          </button>
        </div>
      </section>

      {/* Screenshots */}
      {appData.screenshotsUrls && appData.screenshotsUrls.length > 0 && (
        <section className="screenshots">
          <h2>Imagens do Aplicativo</h2>
          <div id="screenshots-container">
            <span className="arrow left" onClick={prevScreenshot}>
              &#10094;
            </span>
            <div className="screenshot-item" style={{ display: 'block' }}>
              <img
                src={appData.screenshotsUrls[currentScreenshot]}
                alt={`Screenshot ${currentScreenshot + 1}`}
              />
            </div>
            <span className="arrow right" onClick={nextScreenshot}>
              &#10095;
            </span>
          </div>
        </section>
      )}

      {/* Description */}
      <section className="project-description">
        <h2>Sobre o Aplicativo</h2>

        <h3>Funcionalidades</h3>
        <ul>
          {funcionalidades.length > 0 ? (
            funcionalidades.map((func, index) => (
              <li key={index}>{func.trim()}</li>
            ))
          ) : (
            <li>Não há funcionalidades registradas.</li>
          )}
        </ul>

        <h3>Requisitos</h3>
        <ul>
          {requisitos.length > 0 ? (
            requisitos.map((req, index) => <li key={index}>{req.trim()}</li>)
          ) : (
            <li>Não há requisitos registrados.</li>
          )}
        </ul>
      </section>

      {/* App Info Section */}
      <section className="app-info">
        <div className="info-container">
          <div className="info-box">
            <i className="fas fa-shield-alt"></i>
            <p>
              <strong>Seguro</strong>
            </p>
            <p>
              Acesso aos arquivos; Código auditável; Desenvolvedor verificado.
            </p>
            <a
              href={appData.repoLink || appData.repoUrl || '#'}
              className="get-involved"
              target="_blank"
              rel="noopener noreferrer"
            >
              Envolver-se
            </a>
          </div>
          <div className="info-box">
            <i className="fas fa-building"></i>
            <i className="fas fa-balance-scale ms-2"></i>
            <p>
              <strong>
                Desenvolvido pela <strong>FerreiraTechLab</strong>
              </strong>
            </p>
            <p>
              Este app é desenvolvido abertamente pela{' '}
              <strong>FerreiraTechLab</strong> lançado sob a licença{' '}
              <strong>{appData.licenca || 'Apache-2.0 license'}</strong>.
            </p>
          </div>
        </div>

        {/* Technical Details */}
        <div className="details-container">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 mb-3">
                <div className="detail-box">
                  <p>
                    <strong>Arquitetura Suportada</strong>
                  </p>
                  <p>{arquiteturas}</p>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div className="detail-box">
                  <p>
                    <strong>Tamanho do Download</strong>
                  </p>
                  <p>
                    {appData.tamanhoDownload
                      ? `~${appData.tamanhoDownload} MiB`
                      : 'Não especificado'}
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div className="detail-box">
                  <p>
                    <strong>Tamanho Instalado</strong>
                  </p>
                  <p>
                    {appData.tamanhoInstalado
                      ? `~${appData.tamanhoInstalado} MiB`
                      : 'Não especificado'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Changelog */}
      {changelog.length > 0 && (
        <section className="changelog">
          <h3>Changelog</h3>
          <ul id="changelog-list">
            {changelog.map((change, index) => (
              <li key={index}>{change}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Download Modal */}
      <div
        className="modal fade"
        id="downloadModal"
        tabIndex="-1"
        aria-labelledby="downloadModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="downloadModalLabel">
                Baixar o Aplicativo
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fechar"
              ></button>
            </div>
            <div className="modal-body">
              {appData.apkUrl ? (
                <a
                  href={appData.apkUrl}
                  className="btn btn-download w-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Baixar APK
                </a>
              ) : (
                <p>Link de download não disponível</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
