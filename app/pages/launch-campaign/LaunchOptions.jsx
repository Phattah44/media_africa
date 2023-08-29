'use client';
import Link from 'next/link';
import { useState } from 'react';

const LaunchOptions = ({ image, title, description, link, action }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelect = () => {
    setIsSelected(true);
  };
  const toggleSelect = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`flex flex-col mt-10 bg-[#040C5E] text-white w-2/12 p-4 rounded-xl relative`}
      onClick={() => {
        handleSelect();
        toggleSelect();
        action();
      }}
    >
      <div className='relative'>
        <div className='absolute right-0'>
          {!isSelected && (
            <div className='h-5 w-5 rounded-2xl border-white border-2 '></div>
          )}
          {isSelected && <img src='/select.svg' />}
        </div>

        <img className='m-auto p-3' src={image} />
        <h4 className='my-3'>{title}</h4>
        <p className='text-xs mb-1'>{description}</p>
        <Link href={link}></Link>
      </div>
    </div>
  );
};

export default LaunchOptions;
