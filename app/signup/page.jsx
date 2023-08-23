'use client';

import LoginModal from '@components/loginModal/page';
import Link from 'next/link';
import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const loginAction = () => {
    console.log(email, password);
    const userData = { email, password };

    localStorage.setItem('token-info', JSON.stringify(userData));
    setEmail('');
    setPassword('');
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
          <h2 className='text-xl text-white font-semibold mt-2'>
            Hi, Create your account!
          </h2>

          <form className='mt-6 w-4/6'>
            <h1 className='text-2xl text-white text-start font-semibold my-4'>
              Sign Up
            </h1>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-sm font-normal text-white'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                className=' w-full px-4 py-3 mt-1 mb-4'
              />
            </div>
            <div className='mb-2'>
              <label
                htmlFor='password'
                className='block text-sm font-normal text-white'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your password'
                className='w-full px-4 py-3 mt-1'
              />
            </div>
            <Link
              href='/passwordreset'
              className='text-xs mt-2 text-white hover:underline text-right'
            >
              Forgot Password?
            </Link>
            <div className='mt-5'>
              <button
                type='button'
                onClick={() => {
                  loginAction();
                  handleOpenModal();
                }}
                className='w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-button-color  hover: focus:outline-none focus:bg-gray-600'
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className='mt-10 text-xs text-white text-center'>
            By clicking the "Sign Up" button, you agree to the <br />
            <Link
              href='/privacy_policy'
              className='mt-10 text-xs text-white hover:underline'
            >
              Terms of service and Privacy Policy of Media Africa
            </Link>
          </p>
          <p className='mt-10 text-xs text-white '>
            Already have an account?{' '}
            <Link href='/' className='mt-10 text-xs text-white hover:underline'>
              Log in
            </Link>
          </p>
        </div>
        <div className='bg-theme-colour flex flex-col items-center justify-center w-full h-full md:w-1/2 p-4 lg:w-full relative'>
          <div>
            <img src='/signup.png' className='mb-7' />
          </div>
          <p className='text-[#040C5E] w-3/5 text-2xl font-semibold text-center'>
            Your business can penetrate the African market by just choosing your
            preferred campaign. Start now!
          </p>
          <Link href='/support'>
            <img
              src='/support.png'
              className='absolute right-10 bottom-10 rounded-3xl w-16'
            />
          </Link>
        </div>
        <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </section>
  );
}
