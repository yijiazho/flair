import React from 'react';
import './pagination.component.css'; 

interface PaginationComponentProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ totalPages, currentPage, onPageChange }) => {
  const handleClick = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={i === currentPage ? 'active' : ''}
          disabled={i === currentPage}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="pagination">
      {renderPageNumbers()}
    </div>
  );
};

export default PaginationComponent;

export {}