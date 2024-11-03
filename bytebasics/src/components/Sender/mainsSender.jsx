import "./sender.scss";
import HTMLicon from '../../resources/Icons/htmlIcon.png';
import CSSicon from '../../resources/Icons/cssIcons.png';
import JSicon from '../../resources/Icons/jsIcon.png';

function IconBox({ src, alt, className, href}) {
    return (
        <a href={href} className={`box ${className}`}>  
            <img src={src} alt={alt} />
        </a>
    );
}


function MainSender() {
   
    return (
        <section className="mainSender-body">

            <h3>Jaka drogą dzisiaj pójdziesz</h3>
            <div className="mainSender-container">
                <IconBox href='/HTMLMainPage' src={HTMLicon} alt="HTML language icon" className="html-box"/>
                <IconBox href='/CSSMainPage' src={CSSicon} alt="CSS language icon" className="css-box" />
                <IconBox href='/JSMainPage' src={JSicon} alt="JavaScript language icon" className="js-box" />
            </div>
        </section>
    );
}

export default MainSender;
