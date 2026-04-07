import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">
        <header className="about-header">
          <span className="man-cmd">MAN(7)</span>
          <span className="man-title">PERFIL PROFESIONAL</span>
          <span className="man-cmd">MAN(7)</span>
        </header>

        <div className="about-content">

          <section className="about-block">
            <h3>SINOPSIS</h3>
            <p>
              Especialista en Soporte Técnico con +6 años de experiencia en resolución de incidencias de hardware y software en diversos entornos. Experto en soporte on-site, configuración de infraestructura Windows/Linux y gestión de activos IT en plantas industriales. Sólida trayectoria garantizando continuidad operativa y soporte eficiente a usuarios finales bajo SLAs exigentes.
            </p>
          </section>

          <section className="about-block">
            <h3>EXPERIENCIA LABORAL (2018-2026)</h3>
            <div className="experience-log">

              <div className="log-entry">
                <span className="log-date">[2024-PRESENTE]</span>
                <span className="log-task">Analista de Infraestructura IT @ Aprego</span>
                <p>Soporte técnico presencial y remoto para usuarios finales en entornos empresariales bajo SLAs exigentes.</p>
                <p>Administración y soporte de Windows 10/11, Microsoft 365, Outlook, VPN y herramientas corporativas.</p>
                <p>Diagnóstico y resolución de incidentes de hardware, software, conectividad y acceso remoto.</p>
                <p>Mantenimiento preventivo y correctivo de PCs, notebooks, impresoras y periféricos.</p>
                <p>Gestión de usuarios, permisos y documentación técnica para optimizar tiempos de resolución.</p>
              </div>

              <div className="log-entry">
                <span className="log-date">[2019-2024]</span>
                <span className="log-task">IT Support Specialist (L2/L3) @ Contractor </span>
                <p>Soporte técnico avanzado on-site y remoto para usuarios finales, supervisores y perfiles VIP en diversos entornos.</p>
                <p>Resolución de incidentes críticos de hardware, software, conectividad e infraestructura Windows/Linux.</p>
                <p>Administración de usuarios, grupos y permisos en Active Directory.</p>
                <p>Gestión e inventario de más de 600 activos IT, incluyendo PCs, notebooks e impresoras.</p>
                <p>Automatización de tareas repetitivas mediante PowerShell, Bash y Python.</p>
                <p>Seguimiento de tickets, cumplimiento de SLAs y documentación de procedimientos.</p>
              </div>

              <div className="log-entry">
                <span className="log-date">[2018-2019]</span>
                <span className="log-task">Operador NOC Jr @ Antena Delta SRL</span>
                <p>Monitoreo y soporte de infraestructura de red en entornos ISP y corporativos.</p>
                <p>Supervisión proactiva de enlaces, conectividad y performance de red.</p>
                <p>Configuración básica de routers, switches, access points y enlaces WiFi.</p>
                <p>Diagnóstico, escalamiento y seguimiento de incidentes de red.</p>
                <p>Soporte técnico de primer nivel para usuarios y clientes.</p>
              </div>

            </div>
          </section>

          <section className="about-block">
            <h3>EDUCACION</h3>
            <div className="experience-log">
              <div className="log-entry">
                <span className="log-date">[2024 - ACTUALIDAD]</span>
                <span className="log-task">Ingeniería en Telecomunicaciones — UNSAM</span>
                <p><strong>Formación en:</strong> Redes, Electrónica y Sistemas.</p>
              </div>
              <div className="log-entry">
                <span className="log-date">[COMPLETADO]</span>
                <span className="log-task">Técnico en Informática Personal y Profesional</span>
                <p><strong>Escuela de Educación Técnica N°3 - Benavídez</strong></p>
              </div>
            </div>
          </section>

          <section className="about-block">
            <h3>STACK_TECNOLOGICO</h3>

            <div className="stack-grid">

              <div className="stack-col">
                <h4>LENGUAJES Y BACKEND</h4>
                <ul>
                  <li>Python (FastAPI / Flask)</li>
                  <li>JavaScript (Node.js / React)</li>
                  <li>Bash / Shell Scripting / PowerShell</li>
                  <li>REST APIs / JSON</li>
                  <li>SQL / PostgreSQL / MySQL</li>
                  <li>Git / GitHub</li>
                </ul>
              </div>

              <div className="stack-col">
                <h4>DEVOPS, CLOUD & INFRA</h4>
                <ul>
                  <li>Docker / Containers</li>
                  <li>CI/CD Pipelines</li>
                  <li>AWS / GCP / Azure</li>
                  <li>Linux (Debian / OpenBSD / FreeBSD)</li>
                  <li>Windows Server / Linux Administration</li>
                  <li>Virtualization / SysAdmin</li>
                </ul>
              </div>

              <div className="stack-col">
                <h4>SOPORTE Y REDES</h4>
                <ul>
                  <li>Active Directory</li>
                  <li>Microsoft 365 / Outlook</li>
                  <li>Networking & Troubleshooting</li>
                  <li>Routers / Switches / WiFi</li>
                  <li>VPN / Remote Access</li>
                  <li>Soporte L2 / L3</li>
                  <li>Gestión de activos IT</li>
                  <li>Monitoreo y documentación técnica</li>
                </ul>
              </div>

              <div className="stack-col">
                <h4>IDIOMAS</h4>
                <ul>
                  <li>🇬🇧 Inglés (B1)</li>
                  <li>🇩🇪 Alemán (A2)</li>
                </ul>
              </div>
            </div>

              <a href="https://drive.google.com/file/d/1HCERz3vFl9QRlL4ly9-Nbu4mNOTLq2UI/view?usp=sharing" target="_blank" className="getcvresume">Ver CV En Español</a>
    </section>


        </div >

  <footer className="about-footer">
    <span>Emmanuel_D_Breyaue_Porfolio v2.0.26</span>
    <span>Página 1</span>
  </footer>
      </div >
    </section >
  );
};

export default About;
