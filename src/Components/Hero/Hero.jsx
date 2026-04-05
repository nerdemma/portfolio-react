import React, { useState, useEffect } from 'react';
import './Hero.css';
import fotoPerfil from '../../assets/emmanueldbreyaue.png';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "whoami --professional-profile";
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setIsTypingDone(true), 200);
      }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="terminal-container">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="close"></span>
            <span className="minimize"></span>
            <span className="maximize"></span>
          </div>
          <div className="terminal-title">guest@emmanuelbreyaue.com: ~</div>
        </div>

        <div className="terminal-body">
          <div className="terminal-line">
            <span className="prompt">guest@emmanuelbreyaue:~$</span>
            <span className="typing-text"> {text}</span>
            {!isTypingDone && <span className="cursor">|</span>}
          </div>

          {isTypingDone && (
            <div className="terminal-content">
              {/* Contenedor de la Foto con efecto 90s */}
              <div className="profile-photo-container">
                <img src={fotoPerfil} alt="Emmanuel D. Breyaue" className="pixel-to-clear" />
                <div className="scanlines"></div>
              </div>

              <div className="terminal-text">
                <h1>EMMANUEL D. BREYAUE</h1>
                <h2 className="role">Especialista en Soporte Técnico & Infraestructura IT</h2>

                <div className="stats">
                  <div className="stats">
                    <p><span>EXPERIENCIA:</span> +6 años en infraestructura IT, mesa de ayuda y asistencia on-site/remota.</p>
                    <p><span>ESPECIALIDAD:</span> Windows/Linux, soporte L2/L3, troubleshooting y administración de hardware/software.</p>
                    <p><span>ENTORNOS:</span> Plantas industriales y oficinas corporativas con más de 600 activos IT bajo gestión.</p>
                    <p><span>STACK TÉCNICO:</span> Windows Server, Active Directory, Microsoft 365, PowerShell, Bash, redes LAN/WiFi y VPN.</p>
                  </div>
                </div>

                <div className="terminal-actions">
                  <a href="#contact" className="btn-nord">./contacto.sh</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;