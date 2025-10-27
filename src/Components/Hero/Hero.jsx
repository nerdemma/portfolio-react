import react from 'react'
import './Hero.css'
import profile_img from '../../assets/emmanueldbreyaue.png'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="Emmanuel D. Breyaue" />
            <h1><span>I'm Emmanuel D. Breyaue,</span> Software Engineer based in Argentina.</h1>
            <p>I'm Engineer from Buenos Aires, with more than 5 years of experiencie in multiples companies like Sanofi, SCJohnson, Atos and Symrise.</p>

            <div className="hero-action">
                
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My Resume</div>
            </div>

        </div>
    )

}

export default Hero
