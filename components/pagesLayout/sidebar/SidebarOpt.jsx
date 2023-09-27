export default function SidebarOpt({ Icon, text, Active }) {
  return (
    <div>
      <button
        type='button'
        className='flex flex-row items-center gap-2 p-4 mt-2 w-full text-white rounded-lg text-sm hover:bg-[#95a2d6] focus:outline-none focus:ring-2 focus:ring-gray-200 active:bg-[#95a2d6]'
      >
        <Icon />
        <h2>{text}</h2>
      </button>
    </div>
  );
}
