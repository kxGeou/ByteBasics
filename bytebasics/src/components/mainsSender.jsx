import "../style/sender.scss"
import HTMLicon from '../resources/Icons/htmlIcon.png'
import CSSicon from '../resources/Icons/cssIcons.png'
import JSicon from '../resources/Icons/jsIcon.png'
function mainSender() {
    return(
        <div className="body">
            <h3>Jaka drogą dzisiaj pójdziesz</h3>
            <div className="box HTML">
                <img src={HTMLicon} alt="white vector icon of html language"></img>
            </div>
            <div className="box CSS">
                <img src={CSSicon} alt="white vector icon of CSS language"></img>
            </div>
            <div className="box JS">
                <img src={JSicon} alt="white vector icon of JavaScript language"></img>
            </div>
        </div>
    );
}

export default mainSender