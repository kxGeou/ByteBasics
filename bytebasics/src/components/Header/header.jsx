import './header.scss';
import { useCallback } from 'react';
import data from '../../DataBase/mainData/data.json';
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
    <div className='wrapper'>
      <header>
        <nav className='navigation'>
          <div className='logoVector'></div>
          <div className='navigationTab'>
          <div className='logoVectorV'></div>
            <a href='#'>Home</a>
            <a href='#'>O nas</a>
            <a href='#'>Nauka</a>
            <a href='#'>Kontakt</a>
          </div>
        </nav>

        <div className='HeroSection'>
          <h1>{data.companyName}</h1>
          <hr className='lineHero'></hr>
          <p>{data.HeaderText}</p>
          <div className='logoVectorHero'>
          </div>
        </div>

        <div className='arrowSection'>
          <div className='arrow'>
            <i class="fa-solid fa-arrow-down"></i>
          </div>
        </div>
      </header>

    </div>
  );
}

export default Header;
