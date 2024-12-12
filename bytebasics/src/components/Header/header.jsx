import './header.scss';
import data from '../../DataBase/mainData/data.json';
import Logo from '../../resources/logo.png';
import Arrow from '../../resources/icons/arrowdown.svg';
function Header() {
  return (
    <div className='wrapper' >
      <header>
        <nav className='navigation'>
          <div className='logoVector'>
            <img src={Logo} alt="logo of company" />
          </div>
          <div className='navigationTab' >
            <a href='/home'>Home</a>
            <a href='#O nas'>O nas</a>
            <a href='#Nauka'>Nauka</a>
            <a href='#'>Kontakt</a>
          </div>
        </nav>

        <div className='HeroSection'>
          <h1>{data.companyName}</h1>
          <hr className='lineHero'></hr>
          <p>{data.HeaderText}</p>
            
        </div>

        <div className='arrowSection'>
          <div className='arrow'>
            <a href="#O nas">
              <img src={Arrow} alt="Arrow pointing down"/>
            </a>
          </div>
        </div>
      </header>

    </div>
  );
}

export default Header;
