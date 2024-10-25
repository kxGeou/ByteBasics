import '../style/mainPage.scss';
import InstagramLogo from '../resources/Icons/instagramVector.jpg';
import GitHubIcon from '../resources/Icons/gitVector.jpg';
import FacebookIcon from '../resources/Icons/facebookVector.jpg';
function Header() {
  return (
    <div className="MainPage">
        <header>
            <div className="iconsBox">
              <img src={InstagramLogo} alt="instagram logo" className="h-8"></img>
              <img src={GitHubIcon} alt="github logo" className="h-8"></img>
              <img src={FacebookIcon} alt="facebook logo" className="h-10"></img>
            </div>
            <div className="companyLogo"></div>
        </header> 
        
    </div>
  );
}

export default Header;
