import '../style/mainPage.scss'
import data from '../data.json';
import HeroHuman from '../resources/Humans/human.png'
function HeroSection() {
    return(
        <div className="heroSection">
            <div className="heroText">
                <h1>{data.companyName}</h1>
                <p>{data.HeroDescription}</p>
            </div>
            <img src={HeroHuman} alt="Human on the chair programming"></img>
        </div>
    );
};

export default HeroSection;