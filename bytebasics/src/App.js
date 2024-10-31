import './style/mainPage.scss';
import Home from './mainComponents/Home';
import MainHTML from './pages/HTML/MainHTML';
import ErrorPage from './pages/ErrorPage';
import MainJS from './pages/JS/MainJS';
import MainCSS from './pages/CSS/MainCSS';
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
          <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
