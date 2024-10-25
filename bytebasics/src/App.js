import './style/mainPage.scss';
import Header from './components/header';
import HeroSection from './components/heroSection';
function App() {
  return (
    <div className="wrapper">
      <div className="MainPage">
        <Header></Header>
        <HeroSection></HeroSection>
      </div>
    </div>
  );
}

export default App;
