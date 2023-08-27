'use client';
import Link from 'next/link';
import { useState } from 'react';

const LaunchOptions = ({ image, title, description, link }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelect = () => {
    setIsSelected(true);
  };

  return (
    <div
      className={`flex flex-col mt-10 bg-[#040C5E] text-white w-2/12 p-4 rounded-xl `}
      onClick={handleSelect}
    >
      <div>
        <img className='m-auto p-3'>{image}</img>
        <h4 className='my-3'>{title}</h4>
        <p className='text-xs mb-1'>{description}</p>
        {isSelected && (
          <Link href={link}>
            <input type='radio' id={link} name={link} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default LaunchOptions;
