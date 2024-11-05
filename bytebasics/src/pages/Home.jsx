import '../style/globalStyles.scss';
import Header from '../components/Header/header';
import HeroSection from '../components/HeroSection/heroSection';
import About from '../components/About/About';
import Footer from '../components/Footer/footer';

function Home() {
  return (
    <div className="wrapper">
      <div className="MainPage">
        <Header></Header>
        <HeroSection></HeroSection>
        <About></About>
        {/* <Footer></Footer> */}
      </div>

     
    </div>
  );
}

export default Home;
