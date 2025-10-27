import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {
    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>
                        Im currently available to take on a new projects, so feel free to send me a mesage about anything
                        that you want me to work on. You can contact anytime.

                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>hello@emmanuelbreyaue.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+54-911-3830-1117</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Buenos Aires, Argentina</p>
                        </div>

                    </div>
                </div>

                <form action="" className='contact-right'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />

                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='Enter your email' name='email' />

                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                    <button className="contact-submit">Submit Now</button>

                </form>
            </div>
        </div>

    )

}
export default Contact