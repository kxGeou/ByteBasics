import '../style/mainPage.scss'
import '../style/hero.scss'
import data from '../data.json';
import HeroHuman from '../resources/Humans/human.png'
function HeroSection() {
    return(
        <div className="heroSection">
            <div className="heroText">
                <h1>{data.companyName}</h1>
                <p>{data.HeroDescription}</p>
                <button href="google.com">Masz jakieś pytania?</button>
            </div>
            <img src={HeroHuman} alt="Human on the chair programming"></img>
        </div>
    );
};

export default HeroSection;