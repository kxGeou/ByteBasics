import React, { useState } from 'react';
import LessonData from '../../DataBase/HTMLData/HTMLData.json';
import './SearchBar.scss';
const SearchBar = ({ setLesson }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filteredLessons = LessonData.filter(lesson =>
      lesson.Level && lesson.Level.toLowerCase().includes(value.toLowerCase()) || lesson.Description && lesson.Description.toLowerCase().includes(value.toLowerCase())
    );

    setLesson(filteredLessons);
  };


  return (
    <div className="search-bar">
      <div className='inputBar'>
        <input  
          type="text"
          placeholder="Wyszukaj lekcje..."
          value={searchTerm}
          onChange={handleSearch}>
        </input>
      </div>
    
    </div>
  );
};

export default SearchBar;
