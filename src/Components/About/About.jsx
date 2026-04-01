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
            <p>Emmanuel David Breyaue — Backend Developer & DevOps Engineer</p>
          </section>

          <section className="about-block">
            <h3>SINOPSIS</h3>
            <p>
              Especialista en infraestructura y desarrollo con más de 6 años de experiencia 
              en el sector IT. Estudiante de Ingeniería en Telecomunicaciones (UNSAM) y 
              Programación (UTN). Enfocado en la eficiencia de sistemas Unix-like y 
              arquitecturas backend robustas.
            </p>
          </section>

          <section className="about-block">
            <h3>HISTORIAL_EJECUCION (2020-2026)</h3>
            <div className="experience-log">
              <div className="log-entry">
                <span className="log-date">[2026-PRESENT]</span>
                <span className="log-task">Técnico de Campo @ Nixon Net</span>
                <p>Infraestructura de red y soporte técnico especializado.</p>
              </div>
              <div className="log-entry">
                <span className="log-date">[2024-2026]</span>
                <span className="log-task">IT Support Specialist @ Aprego</span>
                <p>Administración de sistemas y soporte Nivel 1/2.</p>
              </div>
              <div className="log-entry">
                <span className="log-date">[2023-2024]</span>
                <span className="log-task">IT Support @ CAT Technologies</span>
                <p>Gestión de infraestructura para cuentas de Telecom Argentina.</p>
              </div>
            </div>
          </section>

          <section className="about-block">
            <h3>STACK_TECNOLOGICO</h3>
            <div className="stack-grid">
              <div className="stack-col">
                <h4>LANGUAGES</h4>
                <ul>
                  <li>C / C++ (Low-level optimization)</li>
                  <li>Bash / Shell Scripting</li>
                  <li>JavaScript (React / Node.js)</li>
                </ul>
              </div>
              <div className="stack-col">
                <h4>INFRA & OS</h4>
                <ul>
                  <li>OpenBSD / FreeBSD / Debian</li>
                  <li>Docker / CI/CD Pipelines</li>
                  <li>Networking & SysAdmin</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <footer className="about-footer">
          <span>EB_SYS v2.0.26</span>
          <span>Página 1</span>
        </footer>
      </div>
    </section>
  );
};

export default About;