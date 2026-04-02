import React from 'react';
import './Services.css';

// Simulamos los datos (puedes importarlos de un archivo JS externo si prefieres)

const Services_Data = [
  {
    s_no: "01",
    s_name: "Soporte L2/L3 & SysAdmin",
    s_desc: "Resolución de incidentes críticos y administración avanzada de servidores Unix/Linux y Active Directory. Especialista en hardening de sistemas y gestión de identidades, garantizando la continuidad operativa bajo estándares de alta disponibilidad."
  },
  {
    s_no: "02",
    s_name: "DevOps & Automatización",
    s_desc: "Optimización del ciclo de vida de IT mediante scripting avanzado (Python, Bash, PowerShell). Implementación de microservicios con Docker y automatización de flujos de trabajo para reducir tiempos de respuesta y costos operativos."
  },
  {
    s_no: "03",
    s_name: "Infraestructura de Redes",
    s_desc: "Diseño y diagnóstico de topologías LAN/WAN, switching y routing. Configuración robusta de servicios esenciales (DNS, DHCP, VPN) con un enfoque en seguridad perimetral y optimización del tráfico de datos."
  },
  {
    s_no: "04",
    s_name: "Mesa de Ayuda & App Support",
    s_desc: "Gestión integral de tickets y administración remota de usuarios. Soporte técnico proactivo en capas de aplicación y bases de datos, enfocado en resolver cuellos de botella y minimizar el impacto en la productividad del negocio."
  },
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

            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
