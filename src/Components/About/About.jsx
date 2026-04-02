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
            <h3>NOMBRE</h3>
            <p>Emmanuel David Breyaue — Infrastructure Analyst & DevOps Engineer</p>
          </section>

          <section className="about-block">
            <h3>SINOPSIS</h3>
            <p>
  Infrastructure Analyst & Unix Specialist. +6 años gestionando entornos críticos, redes y automatización de sistemas para maximizar la eficiencia operativa
            </p>
          </section>

	<section className="about-block">
  <h3>EXPERIENCIA LABORAL (2018-2026)</h3>
  <div className="experience-log">

    <div className="log-entry">
      <span className="log-date">[2024-PRESENTE]</span>
      <span className="log-task">Infrastructure Support @ Aprego</span>
      <p>Soporte L2 en entornos Microsoft 365 y networking.</p>
      <p>Automatización de despliegues con PowerShell y optimización de SLAs empresariales.</p>
    </div>

    <div className="log-entry">
      <span className="log-date">[2019-2024]</span>
      <span className="log-task">IT Support Specialist (L2/L3) @ Contractor</span>
      <p>Administración de Active Directory y resolución de incidentes complejos en ServiceNow.</p>
      <p>Logro: Reducción del 40% en tiempos operativos mediante scripting en Python.</p>
    </div>

    <div className="log-entry">
      <span className="log-date">[2018-2019]</span>
      <span className="log-task">NOC Operator @ Antena Delta</span>
      <p>Monitoreo de infraestructura crítica y gestión de redes TCP/IP[cite: 31, 35, 58].</p>
      <p>Administración de virtualización y escalamiento de incidentes de alta severidad.</p>
    </div>

  </div>
</section>

          <section className="about-block">
            <h3>STACK_TECNOLOGICO</h3>
            <div className="stack-grid">
              <div className="stack-col">
                <h4>LENGUAJES DE PROGRAMACION</h4>
                <ul>
                  <li>Python (FastApi / Flask)</li>
                  <li>Bash / Shell Scripting / Perl</li>
                  <li>JavaScript (React / Node.js)</li>
                </ul>
              </div>
              <div className="stack-col">
                <h4>INFRA & OS</h4>
                <ul>
                  <li>OpenBSD / FreeBSD / Debian</li>
                  <li>Docker / CI/CD Pipelines</li>
                  <li>AWS / GCP / Azure</li>
                  <li>Networking & SysAdmin</li>
                  
                </ul>
              </div>
            </div>
          </section>
        </div>

        <footer className="about-footer">
          <span>Emmanuel_D_Breyaue_Porfolio v2.0.26</span>
          <span>Página 1</span>
        </footer>
      </div>
    </section>
  );
};

export default About;
