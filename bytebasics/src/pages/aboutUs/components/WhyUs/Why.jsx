import React from 'react'
import './Why.scss'
import Block from '../AboutBlocks/Block';
function Why() {
const firstRowData = [
    {title: "Przejrzystośc i prostota", description: "Tworzymy treści w sposób, który nie przytłacza, ale prowadzi krok po kroku przez każdy temat"},
    {title: "Praktyczne podejście", description: "Skupiamy się na realnych przykładach i zastosowaniach, które pozwalają zrozumieć, jak wykorzystać zdobytą wiedzę w rzeczywistych projektach"},
]
const secondRowData = [
    {title: "Aktualność materiałów", description: "Nasze treści są stale aktualizowane, aby odpowiadać na zmieniające się trendy i wymagania w świecie technologi"},
    {title: "Kompleksowość", description: "Niezależnie od tego, czy chcesz się nauczyć podstaw, czy pogłębić wiedzę, znajdziesz tu materiały dostosowane do twojego poziomu"},
]

  return (
    <div className='whyBody'>
      <h2 className='slogan'>Tworzymy z myślą o Tobie</h2>
      <div className='firstRow'>
        {firstRowData.map((block,index) => (
              <Block key={index} title={block.title} description={block.description}></Block>
          ))}
      </div>
      <div className='secondRow'>
       {secondRowData.map((block,index) => (
              <Block key={index} title={block.title} description={block.description}></Block>
          ))}
      </div>
    </div>
  )
}

export default Why
