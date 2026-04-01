import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <div className="footer-logo-text">
                        EB<span>_</span>SYS<span>.</span>LOG
                    </div>
                    <p className="footer-bio">
                        Ingeniero en Telecomunicaciones & DevOps basado en Buenos Aires. 
                        +6 años optimizando infraestructura crítica y sistemas Unix para 
                        empresas del sector tecnológico y logística.
                    </p>
                </div>
                
                <div className="footer-top-right">
                    <div className="footer-subscribe-box">
                        <span className="prompt"># subscribe_to_newsletter:</span>
                        <div className="footer-input-wrapper">
                            <span className="user-prefix">guest@</span>
                            <input type="email" placeholder="tu-email.com" aria-label="Email address" />
                        </div>
                        <button type="button" className="footer-subscribe-btn">EXEC --SUB</button>
                    </div>
                </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <p>© {currentYear} Emmanuel D. Breyaue <span>//</span> STATUS: OPERATIONAL</p>
                </div>
                <div className="footer-bottom-right">
                    <a href="#about" className="footer-link">DOCUMENTATION</a>
                    <a href="#privacy" className="footer-link">PRIVACY_POLICY</a>
                    <div className="footer-socials">
                        <span className="social-label">CONNECT:</span>
                        <a href="https://linkedin.com" className="footer-link">LINKEDIN</a>
                        <a href="https://github.com" className="footer-link">GITHUB</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;