import '../style/mainPage.scss';
import Header from '../components/mainPage/header';
import HeroSection from '../components/mainPage/heroSection';
import MainSender from '../components/mainPage/mainsSender';
import Footer from '../assets/footer';

function Home() {
  return (
    <div className="wrapper">
      <div className="MainPage">
        <Header></Header>
        <HeroSection></HeroSection>
        <MainSender></MainSender>
        <Footer></Footer>
      </div>

     
    </div>
  );
}

export default Home;
