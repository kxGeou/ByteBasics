import React from 'react'
import data from '../../DataBase/mainData/data.json';
import './About.scss'
function About() {

    const companyEmail = "grzegorz.wfb@gmail.com";
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}`;

    const handleClick = () => {
        window.open(gmailURL, "_blank");
    };
    
  return (
    <div className='aboutWrapper' id='O nas'>
        <div className='aboutText'>
            <h2>O nas</h2>
            <p>{data.HeroDescription}</p>
            <a href='/AboutUs' target='_blank'>Dowiedz sie więcej</a>
        </div>
    </div>
  )
}

export default About
