import './header.scss';
import { useCallback } from 'react';

function Header() {
  const links = {
    instagramLink: "https://www.instagram.com/kxgeou/",
    gitHubLink: "https://github.com/kxGeou",
    facebookLink: "https://www.facebook.com/profile.php?id=100073536213869"
  };
  
  const handleLinkClick = useCallback((url) => {
      window.open(url, "_blank");
  }, []);
  return (
    <div className="MainPage">
        <header>
            <div className="iconsBox">
              <i onClick={() => handleLinkClick(links.instagramLink)} className="fa-brands fa-instagram"></i>
              <i onClick={() => handleLinkClick(links.gitHubLink)} className="fa-brands fa-github"></i>
              <i onClick={() => handleLinkClick(links.facebookLink)} className="fa-brands fa-facebook"></i>
            </div>
            <div className="companyLogo"></div>
        </header> 
        
    </div>
  );
}

export default Header;
