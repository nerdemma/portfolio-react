import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navItems = [
  { id: "home", label: "INICIO" },
  { id: "about", label: "PERFIL" },
  { id: "services", label: "SERVICIOS" },
  { id: "mywork", label: "PROYECTOS" },
  { id: "contact", label: "CONTACTO" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // JS PURO: Manejo de Scroll Suave y Observación de Secciones
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Detecta cuando la sección está en el centro
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observar cada sección que coincida con los IDs del nav
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // JS PURO: Función de Scroll Suave manual
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Altura del navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" onClick={(e) => scrollToSection(e, "home")}>
            emmanuelbreyaue<span>.com</span>
          </a>
        </div>

        <button 
          className={`nav-toggle ${isMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <div className="hamburger"></div>
        </button>

        <nav className={`nav-content ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-item ${active === item.id ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-desktop-action">
          <button className="btn-nord" onClick={(e) => scrollToSection(e, "contact")}>
            CONTACTO
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
