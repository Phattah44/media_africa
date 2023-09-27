'use client';

import LoginModal from '@components/loginModal/page';
import Link from 'next/link';
import { useState } from 'react';

const Login = () => {
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
      <div className='flex flex-col items-center md:flex-row md:h-screen lg:w-full relative'>
        <div className='flex flex-col items-center justify-center w-full h-full md:w-1/2 bg-[#040C5E] p-4 lg:w-full'>
          <img
            src='/mawhite.png'
            alt='Media Africa Logo'
            width={200}
            height={150}
            className='mb-10'
          />
          <h2 className='text-xl text-white font-semibold mt-2'>
            Hi, Welcome back!
          </h2>

          <form className='mt-6 w-4/6'>
            <h1 className='text-2xl text-white text-start font-semibold my-4'>
              Log In
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
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                Log In
              </button>
            </div>
          </form>
          <p className='mt-10 text-xs text-white '>
            You don't have an account yet?{' '}
            <Link
              href='/signup'
              className='mt-10 text-xs text-white hover:underline'
            >
              Sign Up
            </Link>
          </p>
        </div>
        <div className='bg-theme-colour flex flex-col items-center justify-center w-full h-full md:w-1/2 p-4 lg:w-full relative'>
          <div>
            <img src='/rocket.png' className='mb-7' />
          </div>
          <p className='text-[#040C5E] w-5/12 text-2xl font-semibold text-center'>
            Get ready to lunch into the African market with our world class
            campaigns
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
};

export default Login;
