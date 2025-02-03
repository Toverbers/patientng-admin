import React from 'react';

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  /* const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) onPageChange(page);
  }; */


  const handlePageChange = (page) => {
    console.log("Attempting to change to page:", page);
    if (page >= 1 && page <= totalPages) {
      onPageChange(page); // This should call the store's `setPage`
    }
  };

  return (
    <>
    {/* <div className="flex justify-center items-center mt-4 space-x-2">
      <button
        className={`px-4 py-2 rounded-lg border ${currentPage === 1
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
          : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white'
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`px-3 py-2 rounded-lg border ${currentPage === index + 1
            ? 'bg-blue-500 text-white'
            : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white'
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={`px-4 py-2 rounded-lg border ${currentPage === totalPages
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
          : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white'
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div> */}

    <div className="flex justify-between items-center space-x-2 my-5">
    <button
      //onClick={() => onPageChange(currentPage - 1)}
      className={`px-4 py-2 flex items-center ${currentPage === 1 ? 'bg-transparent text-gray-400 cursor-not-allowed' : 'bg-transparent '}`}
      //disabled={currentPage === 1}
      onClick={() => handlePageChange(currentPage - 1)}
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
      //onClick={() => onPageChange(currentPage + 1)}
      className={`px-4 py-2 flex items-center ${currentPage === totalPages ? 'bg-transparent text-gray-400 cursor-not-allowed' : 'bg-transparent'}`}
      //disabled={currentPage === totalPages}
      onClick={() => handlePageChange(currentPage + 1)}
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
    
    
    </>
  );
};

export default PaginationComponent;
