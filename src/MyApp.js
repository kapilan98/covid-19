
import React, { useLayoutEffect, useState } from 'react';
import Pagination from 'react-responsive-pagination';
 
function MyApp({postsPerPage,totalPosts}) {
  const windowWidth = useWindowWidth();
 
  const [currentPage, setCurrentPage] = useState({postsPerPage});
 
  const totalPages = 17;
 
  return (
    <Pagination
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
      maxWidth={windowWidth}
    />
  );
}
 
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
 
  useEffect(() => {
    const resizeHandler = () => {
      setWindowWidth(window.innerWidth);
    };
 
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
 
  return windowWidth;
}
export default MyApp;