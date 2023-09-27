import React from 'react';

const WebsiteCard = ({
  website,
  views,
  bounceRate,
  globalRank,
  countryRank,
}) => {
  return (
    <div className=' w-72 rounded-xl'>
      <div className='bg-[#040C5E] text-white w-full text-lg text-center py-4 rounded-t-lg'>
        {website}
      </div>
      <div className='bg-white py-4'>
        <div className='bg-[#DCDFED] w-[90%] mx-auto my-2 p-3 rounded-2xl'>
          <p className='text-[#040C5E] font-bold text-sm mb-1'>
            Monthly Traffic
          </p>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col w-full border-r-4 border-[#040C5E]'>
              <p className='text-[#040C5E] font-bold text-xs'>Total View</p>
              <p className='text-[#040C5E] font-bold text-xs'>{views}</p>
            </div>
            <div className='flex flex-col w-full pl-4'>
              <p className='text-[#040C5E] font-bold text-xs'>Bounce Rate</p>
              <p className='text-[#040C5E] font-bold text-xs'>{bounceRate}</p>
            </div>
          </div>
        </div>
        <div className='bg-[#DCDFED] w-[90%] mx-auto my-3 p-3 rounded-2xl'>
          <p className='text-[#040C5E] font-bold text-sm mb-1'>
            Domain Ranking
          </p>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col w-full border-r-4 border-[#040C5E]'>
              <p className='text-[#040C5E] font-bold text-xs'>Global Rank</p>
              <p className='text-[#040C5E] font-bold text-xs'>{globalRank}</p>
            </div>
            <div className='flex flex-col w-full pl-4'>
              <p className='text-[#040C5E] font-bold text-xs'>Country Rank</p>
              <p className='text-[#040C5E] font-bold text-xs'>{countryRank}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCard;
