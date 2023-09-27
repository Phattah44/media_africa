import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';
import Link from 'next/link';
const PagesLayout = ({ children }) => {
  return (
    <div className='flex flex-row w-full h-full '>
      <Sidebar />
      <div className='bg-[#F4F6FD] w-full h-[100vh] relative overflow-y-scroll'>
        <Navbar />
        <div>{children}</div>
        <Link href='/support'>
          <img
            src='/support.png'
            className='absolute right-10 bottom-10 rounded-3xl w-16'
          />
        </Link>
      </div>
    </div>
  );
};

export default PagesLayout;
