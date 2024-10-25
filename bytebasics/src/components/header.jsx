import '../style/mainPage.scss';
function Header() {
  const instagramLink = "https://www.instagram.com/kxgeou/"
  const gitHubLink = "https://github.com/kxGeou"
  const facebookLink = "https://www.facebook.com/profile.php?id=100073536213869"

  const igHandle = () => {
    window.open(instagramLink, "_blank");
  }

  const gitHandle = () => {
    window.open(gitHubLink, "_blank");
  }

  const facebookHandle = () => {
    window.open(facebookLink, "_blank");
  }

  return (
    <div className="MainPage">
        <header>
            <div className="iconsBox">
              <i onClick={igHandle} className="fa-brands fa-instagram"></i>
              <i onClick={gitHandle} className="fa-brands fa-github"></i>
              <i onClick={facebookHandle} className="fa-brands fa-facebook"></i>
            </div>
            <div className="companyLogo"></div>
        </header> 
        
    </div>
  );
}

export default Header;
