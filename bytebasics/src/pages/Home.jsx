import '../style/globalStyles.scss';
import Header from '../components/Header/header';
import HeroSection from '../components/HeroSection/heroSection';
import About from '../components/About/About';
import Footer from '../components/Footer/footer';
import HTMLsection from '../components/HTMLsection/HTMLsection';
function Home() {
  return (
    <div className="wrapper">
      <div className="MainPage">
        <Header></Header>
        <HeroSection></HeroSection>
        <About></About>
        <HTMLsection></HTMLsection>
        {/* <Footer></Footer> */}
      </div>

     
    </div>
  );
}

export default Home;
