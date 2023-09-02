'use client';

import LaunchCampaignLayout from '@components/pagesLayout/launchCampaignLay';
import { useState } from 'react';
import { influencerData } from './influencerData';

const InfluencerMarketing = () => {
  console.log(influencerData);
  const [influencerCamp, setInfluencerCamp] = useState({
    launchCountry: '',
    launchDuration: '',
    selectedInfluencer: [],
  });
  const [isSelected, setIsSelected] = useState(false);
  const handleChange = (e) => {
    e.target.value;
  };
  const handleSelect = () => {
    setIsSelected(true);
  };
  const toggleSelect = () => {
    setIsSelected(!isSelected);
  };

  return (
    <LaunchCampaignLayout pageTitle='Influencer Marketing'>
      <div>
        <form className='w-9/12 flex flex-col gap-y-5 m-auto'>
          <div className='flex justify-between w-full items-center'>
            <label className='text-[#040C5E] font-semibold'>
              Where do you want to launch
            </label>
            <select
              className='bg-white items-center gap-3 w-3/5 p-2 rounded-lg text-gray-300'
              onChange={handleChange}
              id='launchCountry'
              value={influencerCamp.launchCountry}
              name='launchCountry'
            >
              <option value=''>Choose Location to launch camapign</option>
              <option value='angola'>Angola</option>
              <option value='cameroon'>Cameroon</option>
              <option value='egypt'>Egypt</option>
              <option value='ethopia'>Ethopia</option>
              <option value='ghana'>Ghana</option>
              <option value='gabon'>Gabon</option>
              <option value='nigeria'>Nigeria</option>
              <option value='south africa'>South Africa</option>
            </select>
          </div>
          <p className='text-[#040C5E] font-semibold'>
            Choose Preferred Social Media
          </p>
          <div className='flex flex-wrap justify-between w-full'>
            <button className='text-[#040C5E] font-semibold text-sm border-solid bg-transparent border-2 border-[#040C5E] py-2 px-4 rounded-lg active:text-white active:bg-[#040C5E] w-32'>
              Instagram
            </button>
            <button className='text-[#040C5E] font-semibold text-sm border-solid bg-transparent border-2 border-[#040C5E] py-2 px-4 rounded-lg active:text-white active:bg-[#040C5E] w-32'>
              Tiktok
            </button>
            <button className='text-[#040C5E] font-semibold text-sm border-solid bg-transparent border-2 border-[#040C5E] py-2 px-4 rounded-lg active:text-white active:bg-[#040C5E] w-32'>
              Youtube
            </button>
            <button className='text-[#040C5E] font-semibold text-sm border-solid bg-transparent border-2 border-[#040C5E] py-2 px-4 rounded-lg active:text-white active:bg-[#040C5E] w-32'>
              Facebook
            </button>
            <button className='text-[#040C5E] font-semibold text-sm border-solid bg-transparent border-2 border-[#040C5E] py-2 px-4 rounded-lg active:text-white active:bg-[#040C5E] w-32'>
              Twitter
            </button>
          </div>
          <p className='text-[#040C5E] font-semibold'>Select Influencer</p>
          <div className='flex flex-wrap w-full grid-cols-5 gap-5'>
            {influencerData.map((data) => {
              return (
                <div key={data.id}>
                  <div
                    className='flex flex-col bg-[#040C5E] items-center rounded-lg relative '
                    onClick={() => {
                      data.isSelected = !data.isSelected;
                      console.log(data);
                    }}
                  >
                    <div className='absolute right-1 top-1'>
                      {data.isSelected === false ? (
                        <div className='h-4 w-4 rounded-2xl border-white border-2 '></div>
                      ) : (
                        <img src='/select.svg' className='w-4 h-4' />
                      )}
                    </div>
                    <img src={data.image} className='p-2 w-[140px] mt-3' />
                    <div className='p-2'>
                      <p className='text-white font-semibold text-sm'>
                        {data.name}
                      </p>
                      <p className='text-white text-xs'>{data.handle}</p>
                      <p className='text-white text-xs'>
                        {data.followers} Followers
                      </p>
                      <p className='text-white text-xs'>
                        {data.views} views per post{' '}
                        <span className='font-thin'>(est)</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className='flex flex-col w-1/2'>
            <p className='text-[#040C5E] font-semibold'>Duration of campaign</p>
            <select
              id='launchDuration'
              value={influencerCamp.launchDuration}
              name='launchDuration'
              onChange={handleChange}
              className='bg-transparent p-2 my-3 w-4/5 border-solid border-[#040C5E] border-2 text-gray-400'
            >
              <option value=''>select duration</option>
              <option value='1week'>1 Week</option>
              <option value='1month'>1 Month</option>
              <option value='3months'>3 Months</option>
              <option value='6months'>6 Months</option>
            </select>
          </div>
        </form>
      </div>
    </LaunchCampaignLayout>
  );
};

export default InfluencerMarketing;
