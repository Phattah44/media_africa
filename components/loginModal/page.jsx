'use client';

import { useState } from 'react';

export default function LoginModal({ isOpen, onClose }) {
  const userDataJSON = localStorage.getItem('token-info');
  const userData = JSON.parse(userDataJSON);
  const userEmail = userData.email;

  console.log(localStorage.getItem('token-info'));

  if (!isOpen) {
    return null;
  }
  return (
    <div className=' w-full h-full absolute bg-black bg-opacity-75'>
      <div className='w-1/3 bg-[#040C5E] m-auto items-center absolute top-[25%] left-[32%] flex flex-col p-12'>
        <img src='/mawhite.png' width='150px' className='' />
        <p className='my-4 text-center text-xl font-semibold text-white'>
          Account Verification
        </p>
        <p className='text-center text-xs text-white'>
          please enter the OTP sent to <br />
          <span>{userEmail}</span>
        </p>
      </div>
    </div>
  );
}
