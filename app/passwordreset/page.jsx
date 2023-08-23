'use client';

import ForgetPasswordModal from '@components/forgetPasswordModal/forgetPasswordModal';
import Link from 'next/link';
import { useState } from 'react';

export default function Passwordreset() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const loginAction = () => {
    console.log(newPassword, newPassword);
    const userData = { newPassword, confirmPassword };

    localStorage.setItem('token-info', JSON.stringify(userData));
    setNewPassword('');
    setConfirmPassword('');
    setIsLoggedIn(true);
  };

  const logoutAction = (e) => {
    e.preverDefault();
    localStorage.removeItem('token-info');
    setIsLoggedIn(fault);
  };
  return (
    <section>
      <div className='flex flex-col items-center md:flex-row md:h-screen lg:w-full'>
        <div className='flex flex-col items-center justify-center w-full h-full md:w-1/2 bg-[#040C5E] p-4 lg:w-full'>
          <img
            src='/mawhite.png'
            alt='Media Africa Logo'
            width={200}
            height={150}
            className='mb-10'
          />
          <h2 className='text-2xl text-white font-bold mt-2 mb-6'>
            Password Reset
          </h2>

          <form className='mt-6 w-4/6'>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-sm font-normal text-white'
              >
                New Password
              </label>
              <input
                type='password'
                id='password'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder='Enter your password'
                className=' w-full px-4 py-3 mt-1 mb-4'
              />
            </div>
            <div className='mb-2'>
              <label
                htmlFor='password'
                className='block text-sm font-normal text-white'
              >
                Confirm Password
              </label>
              <input
                type='password'
                id='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder='Confirm your password'
                className='w-full px-4 py-3 mt-1'
              />
            </div>

            <div className='mt-16'>
              <button
                type='button'
                onClick={() => {
                  loginAction();
                  handleOpenModal();
                }}
                className='w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-button-color  hover: focus:outline-none focus:bg-gray-600'
              >
                Continue
              </button>
            </div>
          </form>
        </div>
        <div className='bg-theme-colour flex flex-col items-center justify-center w-full h-full md:w-1/2 p-4 lg:w-full relative'>
          <div>
            <img src='/resetpassword.png' className='mb-7' />
          </div>

          <Link href='/support'>
            <img
              src='/support.png'
              className='absolute right-10 bottom-10 rounded-3xl w-16'
            />
          </Link>
        </div>
        <ForgetPasswordModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </section>
  );
}
