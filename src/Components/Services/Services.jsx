import React from 'react';
import './Services.css';

// Simulamos los datos (puedes importarlos de un archivo JS externo si prefieres)
const Services_Data = [
  { s_no: "01", s_name: "DevOps & CI/CD", s_desc: "Automatización de despliegues, gestión de contenedores Docker y configuración de pipelines eficientes." },
  { s_no: "02", s_name: "Backend Development", s_desc: "Arquitecturas robustas en C++ y Node.js, enfocadas en el alto rendimiento y la seguridad del lado del servidor." },
  { s_no: "03", s_name: "SysAdmin & Unix", s_desc: "Administración avanzada de sistemas OpenBSD, FreeBSD y Linux. Hardening de infraestructura y redes." },
  { s_no: "04", s_name: "Testing & QA", s_desc: "Pruebas unitarias, de integración y auditoría de seguridad para garantizar la integridad del código." }
];

const Services = () => {
  return (
    <section id='services' className="services-section">
      <div className="services-header">
        <h1 className="terminal-cmd">systemctl --list-services</h1>

        <div className="title-underline"></div>
      </div>

      <div className="services-grid">
        {Services_Data.map((service, index) => (
          <article key={index} className="service-card">
            <div className="service-id">{service.s_no}</div>
            <h2 className="service-name">{service.s_name}</h2>
            <p className="service-description">{service.s_desc}</p>
            
            <div className="service-footer">
              <span className="status-indicator"></span>
              <p>EXECUTE_DETAILS</p>
              <span className="arrow">→</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;