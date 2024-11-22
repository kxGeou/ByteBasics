import React from 'react'
import './HeaderAbout.scss'
import Art from '../../../../resources/Backgrounds/art.png';
function HeaderAbout() {

  const textList = [
    'O nas',
    'ByteBasics to wyjątkowa platforma edukacyjna, która powstała z myśla o początkujących programistach oraz tych którzy chcą odświeżyć swoje umiejętności. Naszym celem jest uczynienie nauki programowania prostą, intuicyjną i satysfakcjonującą'
  ]


  return (
    <div className='aboutUsWrapper'>
        <div className='aboutTextWrapper'>
          <h2>{textList[0]}</h2>
          <hr className='line'></hr>
          <p>{textList[1]}</p>
        </div>

        <img src={Art} alt='guy in tech company' className='aboutUsImg'></img>
    </div>
  )
}

export default HeaderAbout