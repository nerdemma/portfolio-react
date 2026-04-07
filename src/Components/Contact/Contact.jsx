import React, { useState, useRef } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import './Contact.css';

const Contact = () => {
    const [result, setResult] = useState("");
    const captchaRef = useRef(null); // Referencia para el captcha

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Verificando...");

        const formData = new FormData(event.target);
        formData.append("access_key", "59d0ac1e-bfdf-4a19-9f54-be7cff051386");

        if (!formData.get("h-captcha-response")) {
            setResult("Por favor, completa el captcha.");
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("¡Socket establecido con éxito!");
                event.target.reset();
                captchaRef.current.resetCaptcha();
            } else {
                setResult("Error en la transmisión.");
            }
        } catch (error) {
            setResult("Error de red.");
        }
    };

    return (
        <section id='contact' className="contact-section">
            <div className="contact-header">
                <h1 className="terminal-cmd">ssh-connect --to "emmanuelbreyaue"</h1>
                <div className="header-underline"></div>
            </div>

            <div className="contact-layout">
                <div className="contact-info">
                    <h2 className="info-title">SOPORTE_Y_CONSULTAS</h2>
                    <p className="info-desc">
                        Actualmente disponible para nuevos desafíos técnicos, despliegues de infraestructura
                        o desarrollo backend. Si tienes un proyecto en mente, abre un socket de comunicación:
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <span className="icon">📧</span>
                            <p><span>MAIL:</span> hello@emmanuelbreyaue.com</p>
                        </div>
                        <div className="contact-item">
                            <span className="icon">📞</span>
                            <p><span>TEL:</span> +54-11-3830-1117</p>
                        </div>
                        <div className="contact-item">
                            <span className="icon">📍</span>
                            <p><span>LOC:</span>Buenos Aires, AR</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className='contact-form'>
                    <div className="input-group">
                        <label htmlFor="name">IDENTIDAD_ORIGEN</label>
                        <input id="name" type="text" placeholder='Tu nombre o empresa' name='name' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">SOCKET_RETORNO</label>
                        <input id="email" type="email" placeholder='tu-email@dominio.com' name='email' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="message">CARGA_UTIL (MESSAGE)</label>
                        <textarea id="message" name="message" rows="6" placeholder="Escribe tu mensaje técnico o propuesta..."></textarea>
                    </div>

                    <div className="captcha-container" style={{ marginBottom: '20px' }}>
                        <HCaptcha
                            sitekey="757451ae-73ca-4ba0-b074-3728f716db4e"
                            onVerify={(token) => console.log("Captcha verificado")}
                            ref={captchaRef}
                            theme="dark"
                        />
                    </div>
                    <button type="submit" className="contact-submit">
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
