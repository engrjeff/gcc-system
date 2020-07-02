import React from "react";
import { range } from "../../../../helpers/utils";
import "./pagination.css";

const Pagination = ({
  pageSize,
  itemsCount,
  currentPage,
  onPageChange,
  isFiltering,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = range(1, pagesCount);

  const changePage = (page) => {
    if (page > pagesCount) return onPageChange(1);
    onPageChange(page);
  };

  const renderPreviousButton = () => {
    return (
      <li
        className={`app-pagination-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => changePage(currentPage - 1)}
      >
        <span className="fas fa-chevron-left"></span>
      </li>
    );
  };

  const renderNextButton = () => {
    return (
      <li
        className={`app-pagination-item ${
          currentPage === pagesCount ? "disabled" : ""
        }`}
        onClick={() => changePage(currentPage + 1)}
      >
        <span className="fas fa-chevron-right"></span>
      </li>
    );
  };

  const renderPagination = () => {
    if (pagesCount === 1) return null;
    return (
      <ul className="app-pagination">
        {renderPreviousButton()}
        {pages.map((page) => (
          <li
            className={`app-pagination-item ${
              page === currentPage ? "active" : ""
            }`}
            key={page}
            onClick={() => changePage(page)}
          >
            {page}
          </li>
        ))}
        {renderNextButton()}
      </ul>
    );
  };

  const renderEntriesCounter = () => {
    const message = `Showing ${pageSize * currentPage - pageSize + 1} to 
        ${
          pageSize * currentPage > itemsCount
            ? itemsCount
            : pageSize * currentPage
        }
        of ${itemsCount} ${isFiltering ? "filter results" : "entries"}.`;

    return <p className="app-entries-count">{message}</p>;
  };

  return (
    <div className="app-pagination-wrapper">
      {renderEntriesCounter()}
      {renderPagination()}
    </div>
  );
};

export default Pagination;
