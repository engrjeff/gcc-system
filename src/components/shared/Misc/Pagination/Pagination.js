import React from "react";
import { range } from "../../../../helpers/utils";
import "./pagination.css";

const Pagination = ({
  pageSize,
  itemsCount,
  currentPage,
  onPageChange,
  isFiltering,
  isSearching,
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
    const begin = pageSize * currentPage - pageSize + 1;
    const end =
      pageSize * currentPage > itemsCount ? itemsCount : pageSize * currentPage;

    let suffix = itemsCount > 1 ? "entries" : "entry";
    if (isFiltering)
      suffix = itemsCount > 1 ? "filter results" : "filter result";
    if (isSearching)
      suffix = itemsCount > 1 ? "search results" : "search result";
    const message =
      itemsCount > 0
        ? `Showing ${begin} to ${end} of ${itemsCount} ${suffix}`
        : "No entries found.";

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
