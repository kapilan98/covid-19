import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <div className="container">
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;