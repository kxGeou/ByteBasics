import './footer.scss';
import { useCallback } from 'react';

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
    <footer className="mainFooter">
      <div className="socialMedia">
        <h2>Social Media</h2>
        
        <div className="socialBox">
          <i onClick={() => handleOpenLink(links.instagram)} className="fa-brands fa-instagram"></i>
          <i onClick={() => handleOpenLink(links.facebook)} className="fa-brands fa-facebook"></i>
          <i onClick={() => handleOpenLink(links.github)} className="fa-brands fa-github"></i>
        </div>
     
      </div>
    </footer>
  );
}

export default Footer;
