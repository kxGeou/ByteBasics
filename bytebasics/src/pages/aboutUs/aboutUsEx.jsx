import React from 'react'
import './aboutUs.scss'
import HeaderAbout from './components/HeaderAbout/HeaderAbout'
import Why from './components/WhyUs/Why'
import Footer from './components/FooterAbout/AboutFooter'
function aboutUsEx() {
  return (
    <div className='aboutBodyEx'>
        <HeaderAbout></HeaderAbout>
        <Why></Why>
        <Footer></Footer>
    </div>
  )
}

export default aboutUsEx