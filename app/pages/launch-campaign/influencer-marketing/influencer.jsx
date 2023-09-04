'use client';

import { influencerData } from './influencerData';
import { useState } from 'react';

const Influencer = (props) => {
  const [isSelected, setIsSelected] = useState(props.isSelected || false);

  const handleSelect = () => {
    if (isSelected) {
      props.setSelectedInfluencers((prevSelected) =>
        prevSelected.filter((id) => id !== props.id)
      );
    } else {
      props.setSelectedInfluencers((prevSelected) => [
        ...prevSelected,
        props.id,
      ]);
    }
    setIsSelected(!isSelected);
  };
  return (
    <div>
      <div
        className={`flex flex-col bg-[#040C5E] items-center rounded-lg relative ${
          isSelected ? 'border-1 border-blue-500' : ''
        }`}
        onClick={handleSelect}
      >
        <div className='absolute right-1 top-1'>
          {isSelected === false ? (
            <div className='h-4 w-4 rounded-2xl border-white border-2 '></div>
          ) : (
            <img src='/select.svg' className='w-4 h-4' />
          )}
        </div>
        <img src={props.image} className='p-2 w-[140px] mt-3' />
        <div className='p-2'>
          <p className='text-white font-semibold text-sm'>{props.name}</p>
          <p className='text-white text-xs'>{props.handle}</p>
          <p className='text-white text-xs'>{props.followers} Followers</p>
          <p className='text-white text-xs'>
            {props.views} views per post{' '}
            <span className='font-thin'>(est)</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Influencer;
