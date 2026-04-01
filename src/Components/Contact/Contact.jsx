import React from 'react';
import './Contact.css';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        // Aquí iría tu lógica de envío a la API
        console.log("Enviando paquete a la API...");
    };

    return (
        <section id='contact' className="contact-section">
            <div className="contact-header">
                <h1 className="terminal-cmd">ssh-connect --to "ebreyaue"</h1>
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
                            <p><span>MAIL:</span> hello@ebreyaue.sys</p>
                        </div>
                        <div className="contact-item">
                            <span className="icon">📞</span>
                            <p><span>TEL:</span> +54-11-3830-1117</p>
                        </div>
                        <div className="contact-item">
                            <span className="icon">📍</span>
                            <p><span>LOC:</span> Buenos Aires, AR</p>
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
                    
                    <button type="submit" className="contact-submit">
                        POST /send_message HTTP/1.1
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;