import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-between items-center space-x-2 my-5">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      className={`px-4 py-2 flex items-center ${currentPage === 1 ? 'bg-transparent text-gray-400 cursor-not-allowed' : 'bg-transparent'}`}
      disabled={currentPage === 1}
    >
      <svg
          className="w-3.5 h-3.5 me-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        Previous
    </button>
    <div className="text-center">
      Page {currentPage} of {totalPages}
    </div>
    <button
      onClick={() => onPageChange(currentPage + 1)}
      className={`px-4 py-2 flex items-center ${currentPage === totalPages ? 'bg-transparent text-gray-400 cursor-not-allowed' : 'bg-transparent'}`}
      disabled={currentPage === totalPages}
    >
      Next
        <svg
          className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
    </button>
  </div>
);

export default Pagination;