import React from 'react'
import data from '../DataBase/mainData/data.json';
import './ErrorPage.scss'
function ErrorPage() {
  return (
    <div className='wrapper'>
      <div className='errorBody'>
        <h2>{data.ErrorTitle}</h2>
        <p>{data.ErrorDesc}</p>
        <a  href="/home">Zabierz mnie stąd</a>
      </div>
    </div>
  )
}

export default ErrorPage