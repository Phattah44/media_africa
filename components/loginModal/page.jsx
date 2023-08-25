'use client';

import { useEffect, useState } from 'react';
import useVerification from './useVerification';

export default function LoginModal({ isOpen, onClose }) {
  const { code, inputStates, inputClass, handleChange, handleKeyDown } =
    useVerification(4);

  const userDataJSON = localStorage.getItem('token-info');
  const userData = JSON.parse(userDataJSON);
  const userEmail = userData.email;
  const [page, setPage] = useState('otp-page');
  const [countdown, setCountdown] = useState(45);

  useEffect(() => {
    if (countdown > 0) {
      setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setCountdown('Pin Expired');
    }
  });
  console.log(localStorage.getItem('token-info'));

  if (!isOpen) {
    return null;
  }

  return (
    <div className=' w-full h-full absolute bg-black bg-opacity-75'>
      <div>
        {page === 'otp-page' && (
          <div className='w-1/3 bg-[#040C5E] m-auto items-center absolute top-[25%] left-[32%] flex flex-col p-12'>
            <img src='/mawhite.png' width='150px' className='' />
            <p className='my-4 text-center text-xl font-semibold text-white'>
              Account Verification
            </p>
            <p className='text-center text-xs text-white'>
              please enter the OTP sent to <br />
              <span>{userEmail}</span>
            </p>
            <div className='my-16 flex flex-row gap-6'>
              {inputStates.map((state, index) => {
                return (
                  <input
                    className={`${inputClass} w-14 h-14 p-4 rounded-md bg-[#040C5E] bg-opacity-75  border-2 border-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-2xl text-white active:bg-slate-50 text-center`}
                    type='number'
                    maxLength='1'
                    value={inputStates.digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={handleKeyDown}
                  />
                );
              })}
            </div>
            <p className='bg-white rounded-md text-xs p-2 m-4'>
              Resend OTP [<span className='text-red-500'>{countdown}</span>]
            </p>
            <button
              className='text-xs px-3 py-4 text-white bg-button-color w-10/12 rounded-md'
              onClick={() => setPage('confirm-page')}
            >
              Confirm
            </button>
          </div>
        )}
      </div>
      {page === 'confirm-page' && (
        <div className='w-1/3 bg-[#040C5E] m-auto items-center absolute top-[25%] left-[32%] flex flex-col p-12'>
          <p className='my-4 text-center text-xl font-semibold text-white'>
            Account Verification
          </p>
          <p className='text-white text-center w-2/3'>
            Congratulations your account has been successfully verified!
          </p>
          <img src='/success.png' className='mx-6' width='250px' />

          <button
            onClick={() => onClose()}
            className='text-xs px-3 py-4 text-white bg-button-color w-10/12 rounded-md'
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
}
