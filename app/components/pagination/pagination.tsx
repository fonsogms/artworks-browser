import React, { useMemo } from "react";
import "./pagination.css";
type IPaginationProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages?: number;
};

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalPages = 1,
}) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = useMemo(
    () => (page: number) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );
  const renderPageNumbers = useMemo(() => {
    const pages = [];
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(currentPage + 2, totalPages);

    if (currentPage <= 3) {
      startPage = 1;
      endPage = Math.min(5, totalPages);
    }

    if (currentPage >= totalPages - 2) {
      startPage = Math.max(totalPages - 4, 1);
      endPage = totalPages;
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          data-testid={"page-number-" + i}
          key={i}
          onClick={() => handlePageClick(i)}
          className={`page-number ${i === currentPage ? "active" : ""}`}
        >
          {i}
        </button>
      );
    }

    return pages;
  }, [currentPage, totalPages, handlePageClick]);

  return (
    <div data-testid="pagination" className="pagination">
      <button
        data-testid="prev-button"
        className="nav-button"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {renderPageNumbers}
      <button
        data-testid="next-button"
        className="nav-button"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
