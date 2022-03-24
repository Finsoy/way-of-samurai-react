import React from "react";
import style from "./Pagination.module.scss";

const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  console.log(currentPage);
  const setNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const setPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className={style.wrapper}>
      {!(pages.slice().shift() === currentPage) && (
        <button className={style.button} onClick={setPrevPage}>
          {"<"}
        </button>
      )}
      {pages.slice(0, 5).map((page) => (
        <span
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`${currentPage === page ? style.selectedPage : null} ${
            style.page
          }`}
        >
          {page}
        </span>
      ))}
      ...
      <span
        onClick={() => setCurrentPage(pages.pop())}
        className={`${
          currentPage === pages.pop() ? style.selectedPage : null
        } ${style.page}`}
      >
        {pages.pop()}
      </span>
      {!(pages.slice().pop() === currentPage) && (
        <button className={style.button} onClick={setNextPage}>
          {">"}
        </button>
      )}
    </div>
  );
};

export default Pagination;
