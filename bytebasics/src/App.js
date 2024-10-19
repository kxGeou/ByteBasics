import './style/mainPage.scss';
import InstagramLogo from './resources/Icons/instagramVector.jpg';
import GitHubIcon from './resources/Icons/gitVector.jpg';
import FacebookIcon from './resources/Icons/facebookVector.jpg';
import UserIcon from './resources/Icons/userIcon.png';
function App() {
  return (
    <div className="MainPage">
        <header>
            <div className="iconsBox">
              <img src={InstagramLogo} alt="instagram logo"></img>
              <img src={GitHubIcon} alt="github logo"></img>
              <img src={FacebookIcon} alt="facebook logo"></img>
            </div>
            <div className="companyLogo"></div>
            <div className="userIcon">
              <img src={UserIcon} alt="user icon"></img>
            </div>
        </header> 
        
    </div>
  );
}

export default App;
