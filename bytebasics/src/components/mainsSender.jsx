import "../style/sender.scss";
import HTMLicon from '../resources/Icons/htmlIcon.png';
import CSSicon from '../resources/Icons/cssIcons.png';
import JSicon from '../resources/Icons/jsIcon.png';

function IconBox({ src, alt, className}) {
    return (
        <div className={`box ${className}`}>  
            <img src={src} alt={alt} />
        </div>
    );
}


function MainSender() {
   
    return (
        <section className="mainSender-body">
            <h3>Jaka drogą dzisiaj pójdziesz</h3>
            <div className="mainSender-container">
                <IconBox src={HTMLicon} alt="HTML language icon" className="html-box"/>
                <IconBox src={CSSicon} alt="CSS language icon" className="css-box" />
                <IconBox src={JSicon} alt="JavaScript language icon" className="js-box" />
            </div>
        </section>
    );
}

export default MainSender;
