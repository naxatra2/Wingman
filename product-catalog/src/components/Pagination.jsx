import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={'← Previous'}
      nextLabel={'Next →'}
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName={'flex justify-center items-center space-x-4 mt-8'}
      previousLinkClassName={
        'px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all'
      }
      nextLinkClassName={
        'px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all'
      }
      disabledClassName={'opacity-50 cursor-not-allowed'}
      activeClassName={'px-4 py-2 bg-purple-500 text-white rounded-md'}
    />
  );
};

export default Pagination;
