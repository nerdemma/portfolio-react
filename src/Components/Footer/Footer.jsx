import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <div className="footer-logo-text">
                        emmanuelbreyaue<span>.com</span>
                    </div>
                    <p className="footer-bio">
                        Ingeniero en Telecomunicaciones & DevOps basado en Buenos Aires. 
                        +6 años optimizando infraestructura crítica y sistemas Unix para 
                        empresas del sector tecnológico y logística.
                    </p>
                </div>
                
               
            </div>

            <hr className="footer-divider" />

            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <p>© {currentYear} Emmanuel D. Breyaue <span>//</span> STATUS: OPERATIONAL</p>
                </div>
                <div className="footer-bottom-right">
                    <div className="footer-socials">
                        <span className="social-label">CONNECT:</span>
                        <a href="https://linkedin.com/in/emmanueldbreyaue" className="footer-link"> LINKEDIN </a>
                        <a href="https://github.com/nerdemma" className="footer-link"> GITHUB </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
