import React from 'react'
import './Why.scss'
import Block from '../AboutBlocks/Block';
function Why() {
const blocksData = [
    {title: "Przejrzystośc i prostota", description: "Tworzymy treści w sposób, który nie przytłacza, ale prowadzi krok po kroku przez każdy temat"},
    {title: "Przejrzystośc i prostota", description: "Tworzymy treści w sposób, który nie przytłacza, ale prowadzi krok po kroku przez każdy temat"},
    {title: "Przejrzystośc i prostota", description: "Tworzymy treści w sposób, który nie przytłacza, ale prowadzi krok po kroku przez każdy temat"},
    {title: "Przejrzystośc i prostota", description: "Tworzymy treści w sposób, który nie przytłacza, ale prowadzi krok po kroku przez każdy temat"},
]

  return (
    <div className='whyBody'>
        {blocksData.map((block,index) => (
            <Block key={index} title={block.title} description={block.description}></Block>
        ))}
    </div>
  )
}

export default Why
