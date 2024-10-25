import './style/mainPage.scss';
import Header from './components/header';
import HeroSection from './components/heroSection';
import MainSender from './components/mainsSender';
function App() {
  return (
    <div className="wrapper">
      <div className="MainPage">
        <Header></Header>
        <HeroSection></HeroSection>
        <MainSender></MainSender>
      </div>
    </div>
  );
}

export default App;
