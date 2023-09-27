'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MdOutlineArrowBackIos } from 'react-icons/md';

const LaunchCamNav = ({ pageTitle }) => {
  const router = useRouter();

  return (
    <div className='flex flex-row justify-around mt-10 mb-10 bg-[#DCDFED] p-3 items-center'>
      <div className='p-4 rounded-xl'>
        <button onClick={() => router.back()}>
          <MdOutlineArrowBackIos />
        </button>
      </div>
      <h2 className='items-center text-center text-2xl text-[#040C5E]  font-bold '>
        {pageTitle}
      </h2>
      <div className='flex gap-6 '>
        <button>
          <img src='/cart.svg' />
        </button>
        <button>
          <img src='/notification.svg' />
        </button>
      </div>
    </div>
  );
};

export default LaunchCamNav;
