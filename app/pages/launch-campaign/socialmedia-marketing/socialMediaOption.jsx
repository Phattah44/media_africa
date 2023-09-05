const SocialMediaOption = ({ image, title, description }) => {
  return (
    <div className='w-[170px] bg-[#040C5E] text-white rounded-lg p-3 '>
      <div className='flex flex-col p-1'>
        <img src={image} className='p-2 w-36 h-32' />
        <p className='text-sm font-semibold mb-2'>{title}</p>
        <p className='text-xs'>{description}</p>
      </div>
    </div>
  );
};

export default SocialMediaOption;
