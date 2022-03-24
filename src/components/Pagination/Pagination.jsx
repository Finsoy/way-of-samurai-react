import React from "react";
import style from "./Pagination.module.scss";

const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  const indexOfCurrentPage = pages.indexOf(currentPage) + 1;
  let visiblePages;
  if (
    indexOfCurrentPage >= 3 &&
    indexOfCurrentPage <= pages[pages.length - 3]
  ) {
    visiblePages = pages.slice(indexOfCurrentPage - 3, indexOfCurrentPage + 2);
  } else if (indexOfCurrentPage < 3) {
    visiblePages = pages.slice(0, indexOfCurrentPage + 3);
  } else if (indexOfCurrentPage === pages[pages.length - 2]) {
    visiblePages = pages.slice(indexOfCurrentPage - 3, indexOfCurrentPage + 1);
  } else if (indexOfCurrentPage === pages[pages.length - 1]) {
    visiblePages = pages.slice(indexOfCurrentPage - 3, indexOfCurrentPage);
  }

  const setNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const setPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className={style.wrapper}>
      {!(pages[0] === currentPage) && (
        <button className={style.button} onClick={setPrevPage}>
          {"<"}
        </button>
      )}
      {visiblePages.map((page) => (
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
      {currentPage !== pages[pages.length - 1] &&
        currentPage !== pages[pages.length - 2] &&
        currentPage !== pages[pages.length - 3] && (
          <>
            ...
            <span
              onClick={() => setCurrentPage(pages[pages.length - 1])}
              className={`${
                currentPage === pages[pages.length - 1]
                  ? style.selectedPage
                  : null
              } ${style.page}`}
            >
              {pages[pages.length - 1]}
            </span>
          </>
        )}
      {!(pages[pages.length - 1] === currentPage) && (
        <button className={style.button} onClick={setNextPage}>
          {">"}
        </button>
      )}
    </div>
  );
};

export default Pagination;
