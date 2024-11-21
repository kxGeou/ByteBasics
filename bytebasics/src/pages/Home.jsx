import '../style/globalStyles.scss';
import Header from '../components/Header/header';
import About from '../components/About/About';
import Footer from '../components/Footer/footer';
import Select from '../components/Select/Select';
function Home() {
  return (
      <div className="MainPage">
        <Header></Header>
        <About></About>
        <Select></Select>
        <Footer></Footer>
      </div>

     
  );
}

export default Home;
