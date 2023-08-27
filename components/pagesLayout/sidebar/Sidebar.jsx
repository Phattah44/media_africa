import SidebarOpt from './SidebarOpt';
import { GrLaunch } from 'react-icons/gr';
import { TiSpannerOutline } from 'react-icons/ti';
import { TbSpeakerphone } from 'react-icons/tb';
import { MdPayments } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { VscSettings } from 'react-icons/vsc';
import { IoMdLogOut } from 'react-icons/io';

export default function Sidebar() {
  return (
    <div className='bg-[#040C5E] w-1/6 h-[100vh] '>
      <img
        src='/mawhite.png'
        width='120px'
        className='mt-12 ml-10 mb-10 items-center'
      />
      <div>
        <SidebarOpt Icon={GrLaunch} text='Launch Campaign' />
        <SidebarOpt Icon={TiSpannerOutline} text='Custom Campaign' />
        <SidebarOpt Icon={TbSpeakerphone} text='My Campaigns' />
        <SidebarOpt Icon={MdPayments} text='Payments' />
        <SidebarOpt Icon={CgProfile} text='Profile' />
        <SidebarOpt Icon={VscSettings} text='Account Settings' />
        <SidebarOpt Icon={IoMdLogOut} text='Log Out' />
      </div>
    </div>
  );
}
