import React, { useState } from 'react';
import LessonData from '../../DataBase/HTMLData/HTMLData.json';
import Experience from '../../DataBase/HTMLData/Experience.json';
import './SearchBar.scss';
const SearchBar = ({ setLesson }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [experiences, setExperience] = useState(Experience.slice(0, 5));

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filteredLessons = LessonData.filter(lesson =>
      lesson.Level && lesson.Level.toLowerCase().includes(value.toLowerCase()) || lesson.Description && lesson.Description.toLowerCase().includes(value.toLowerCase())
    );

    setLesson(filteredLessons);
  };


  const ExperienceDisplay = experiences.map((exp) => {
    return (
      <div className='experienceBody' >
        <p className='level'>{exp.Experience}</p>
      </div>
    );
  })


  return (
    <div className="search-bar">
      <div className='inputBar'>
        <input  
          type="text"
          placeholder="Wyszukaj lekcje..."
          value={searchTerm}
          onChange={handleSearch}>
        </input>
        <i class="fa-solid fa-magnifying-glass search"></i>
      </div>
      <div className='experienceBar'>
        {ExperienceDisplay}
      </div>
    </div>
  );
};

export default SearchBar;
