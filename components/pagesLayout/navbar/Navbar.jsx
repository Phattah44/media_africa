import { CgSearch } from 'react-icons/cg';

const Navbar = () => {
  return (
    <div className='flex flex-row justify-around mt-10 mb-10'>
      <div className='flex justify-between bg-white items-center gap-3 w-3/6 p-4 rounded-xl'>
        <input
          placeholder='search what you are looking for'
          className='w-full h-8'
        />
        <button>
          <CgSearch />
        </button>
      </div>
      <div className='flex gap-6'>
        <button>
          <img src='/cart.svg' />
        </button>
        <button>
          <img src='/notification.svg' />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
