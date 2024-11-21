import React from 'react'
import './Select.scss'
import Selection from './Selection/Selection'
import jsArt from '../../resources/Backgrounds/jsArtt.png'
import HTMLArt from '../../resources/Backgrounds/html.png'
import CSSArt from '../../resources/Backgrounds/css.png'

function Select() {
  return (
    <div className='selectBody' id="Nauka">
        <Selection  img={jsArt} title="JavaScript" desc="JavaScript to język programowania umożliwiający interaktywność i dynamikę na stronach internetowych"></Selection>
        <Selection href="/HTMLMainPage" img={HTMLArt} title="HTML" desc="HTML to język znaczników służący do tworzenia struktury i treści stron internetowych."></Selection>
        <Selection img={CSSArt} title="CSS" desc="CSS to język stylów używany do nadawania wyglądu i układu elementom stron internetowych."></Selection>
    </div>
  )
}

export default Select
