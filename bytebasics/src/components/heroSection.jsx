import '../style/mainPage.scss'
import '../style/hero.scss'
import data from '../data.json';
import HeroHuman from '../resources/Humans/human.png'

function HeroSection() {
    const companyEmail = "grzegorz.wfb@gmail.com";
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}`;

    const handleClick = () => {
        window.open(gmailURL, "_blank");
    };

    return(
        <div className="heroSection">
            <div className="heroText">
                <h1>{data.companyName}</h1>
                <p>{data.HeroDescription}</p>
                <button onClick={handleClick}>Masz jakieś pytania?</button>
            </div>
            <img src={HeroHuman} className='human' alt="Human on the chair programming"></img>
        </div>
    );
};

export default HeroSection;