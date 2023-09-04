import Sidebar from './sidebar/Sidebar';
import LaunchCamNav from './launchCamNav/page';
import Link from 'next/link';
const LaunchCampaignLayout = ({ children, pageTitle }) => {
  return (
    <div className='flex flex-row w-full h-[100vh]'>
      <Sidebar />
      <div className='bg-[#F4F6FD] w-full h-[100vh] relative overflow-y-scroll'>
        <LaunchCamNav pageTitle={pageTitle} />
        <div className='h-[100vh] overflow-y-scroll'>{children}</div>
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

export default LaunchCampaignLayout;
