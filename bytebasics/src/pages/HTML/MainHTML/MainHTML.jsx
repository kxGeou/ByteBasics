// src/pages/MainHTML.js
import React, { useState } from 'react';
import './mainHTML.scss';
import '../../../style/globalStyles.scss';
import ReactPaginate from 'react-paginate';
import Header from '../../../components/Header/header';
import Footer from '../../../components/Footer/footer';
import LessonData from '../../../DataBase/HTMLData/HTMLData.json';
import SearchBar from '../../../components/SearchBar/searchBar';

function MainHTML() {
  const [lessons, setLesson] = useState(LessonData.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);

  const lessonPerPage = 5;
  const pagesVisited = pageNumber * lessonPerPage;

  const displayLessons = lessons
    .slice(pagesVisited, pagesVisited + lessonPerPage)
    .map((lesson) => {
      return (
        <a key={lesson.id} className="lesson" href={lesson.LinkTo}>
          <h3 className="title">{lesson.Level}</h3>
          <p className="desc">{lesson.Description}</p>
        </a>
      );
    });

  const pageCount = Math.ceil(lessons.length / lessonPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="wrapper">
      <div className="mainContainer">
        <Header />
        <SearchBar setLesson={setLesson} />
        <div className="paginationWrapper mt-16">
          {displayLessons}
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtn"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"disabledBtn"}
            activeClassName={"activeBtn"}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MainHTML;
