import React from 'react';
import { Link } from 'react-router-dom';

const ScrollToTopLink = ({ to, children, className, ...props }) => {
  const handleClick = () => {
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <Link 
      to={to} 
      className={className} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ScrollToTopLink;
