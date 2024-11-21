import React from 'react'
import '../Select.scss'
import './HTMLsection.scss'
function Selection({img, title, desc, href}) {
  
  return (
    <div className='selectBox' style={{backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <div className='selectBgc'></div>
      <div className='textBox'>
        <h2>{title}</h2>
        <p>{desc}</p>
        <a href={href} target='_blank'>Przejdź do nauki</a>
      </div>
    </div>
  )
}

export default Selection
