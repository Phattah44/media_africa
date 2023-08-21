import Link from 'next/link';

export default function Passwordreset() {
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
                placeholder='Confirm your password'
                className='w-full px-4 py-3 mt-1'
              />
            </div>

            <div className='mt-16'>
              <button className='w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-button-color  hover: focus:outline-none focus:bg-gray-600'>
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
      </div>
    </section>
  );
}
