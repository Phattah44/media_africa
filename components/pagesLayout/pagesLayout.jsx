import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';
const PagesLayout = ({ children }) => {
  return (
    <div className='flex flex-row w-full h-full'>
      <Sidebar />
      <div>
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PagesLayout;
