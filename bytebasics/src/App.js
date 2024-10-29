import './style/mainPage.scss';
import Header from './components/header';
import HeroSection from './components/heroSection';
import MainSender from './components/mainsSender';
import Footer from './components/footer';

function App() {
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

export default App;
