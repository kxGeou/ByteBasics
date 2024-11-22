import './style/globalStyles.scss';
import Home from './pages/Home';
import MainHTML from './pages/HTML/MainHTML/MainHTML';
import ErrorPage from './pages/ErrorPage';
import MainJS from './pages/JS/JSMain/MainJS';
import MainCSS from './pages/CSS/MainCSS/MainCSS';
import Introduction from './pages/HTML/HTMLpages/Introduction/Introduction';
import AboutUsEx from './pages/aboutUs/aboutUsEx';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/HTMLMainPage" element={<MainHTML/>}></Route>
          <Route path="/CSSMainPage" element={<MainCSS/>}></Route>
          <Route path="/JSMainPage" element={<MainJS/>}></Route>
          <Route path="/Introduction" element={<Introduction/>}></Route>
          <Route path="/AboutUs" element={<AboutUsEx/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
