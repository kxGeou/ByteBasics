import { useCallback } from 'react';
import Facebook from '../../../../resources/icons/facebook.svg'
import Github from '../../../../resources/icons/github.svg'
import Instagram from '../../../../resources/icons/instagram.svg'
import './AboutFooter.scss'
function Footer() {
  const links = {
    instagram: "https://www.instagram.com/kxgeou/",
    github: "https://github.com/kxGeou",
    facebook: "https://www.facebook.com/profile.php?id=100073536213869",
  };

  const handleOpenLink = useCallback((url) => {
    window.open(url, "_blank");
  }, []);

  return (
    <footer className="mainFooterAbout">
      <div className="socialMedia">
        <h2>Social Media</h2>
        
        <div className="socialBox">
          <p onClick={() => handleOpenLink(links.facebook)}><img src={Facebook} alt="qwe" />Grzegorz M</p>
          <p onClick={() => handleOpenLink(links.github)} ><img src={Github} alt="qwe" />kxGeou</p>
          <p onClick={() => handleOpenLink(links.instagram)}><img src={Instagram} alt="qwe" />kxGeou</p>
        </div>
     
      </div>
    </footer>
  );
}

export default Footer;
