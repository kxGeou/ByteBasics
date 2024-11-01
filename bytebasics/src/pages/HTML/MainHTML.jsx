import React from 'react'
import { useState } from 'react';
// import Header from '../../components/mainPage/header'
// import Footer from '../../assets/footer'
import LessonData from '../../HTMLData.json';
function MainHTML() {
  const [lessons, setLesson] = useState(LessonData.slice(0,3));

  return (
    <div>
      {lessons.map((lesson) => {
        return(
          <div className='lesson'>
            <h3>{lesson.id}</h3>
            <h3>{lesson.Name}</h3>
            <h3>{lesson.Description}</h3>
          </div>
        )
      })}

    </div>
  )
}   

export default MainHTML