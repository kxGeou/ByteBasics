import './hero.scss'
import data from '../../DataBase/mainData/data.json'

function HeroSection() {
  

    return(
        <div className="heroSection">
            <div className='headerText'>
                <h1 className='companyName'>{data.companyName}</h1>
                <p className='companyText'>{data.HeaderText}</p>
            </div>
            <div className='arrowDown'>
                <i className="fa-solid fa-arrow-down arrowDownVector"></i>
            </div>
        </div>
    );
};

export default HeroSection;