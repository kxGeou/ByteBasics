import React from 'react'
import darkBackground from '../../resources/Backgrounds/grayBackground.png';
import data from '../../DataBase/mainData/data.json';
import './About.scss'
function About() {

    const companyEmail = "grzegorz.wfb@gmail.com";
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}`;

    const handleClick = () => {
        window.open(gmailURL, "_blank");
    };
    
  return (
    <div className='aboutWrapper'>
        <div className='aboutText'>
            <h2>Czym jest Bytebasics?</h2>
            <p>{data.HeroDescription}</p>
            <button onClick={handleClick}>Masz jakieś pytania?</button> 
        </div>
        <img src={darkBackground} alt="Słup z namalowanym białym graffiti" />
    </div>
  )
}

export default About
