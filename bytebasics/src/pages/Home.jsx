import '../style/globalStyles.scss';
import Header from '../components/Header/header';
import HeroSection from '../components/HeroSection/heroSection';
import MainSender from '../components/Sender/mainsSender';
import Footer from '../components/Footer/footer';

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
