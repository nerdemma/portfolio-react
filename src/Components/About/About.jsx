import React from 'react';
import './About.css'
import theme_patern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/emmanueldbreyaue.png'

const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About me</h1><img src={theme_patern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Im an experienced Software Engineer with over 5 years</p>
                        <p>My passion with the hight technology, is only improve my potencital to found the best solution for their buissnes.</p>
                    </div>
                    <div className="about-skills">

                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>React</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Java</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Docker</p><hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>Spring</p><hr style={{ width: "65%" }} /></div>
                        <div className="about-skill"><p>SQL</p><hr style={{ width: "55%" }} /></div>


                    </div>


                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achivement">
                    <h1>5+</h1>
                    <p>YEARS OF EXPERIENCIE</p>
                </div>
                <hr />

                <div className="about-achivement">
                    <h1>30+</h1>
                    <p>PROYECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>20+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>


        </div >
    )

}
export default About