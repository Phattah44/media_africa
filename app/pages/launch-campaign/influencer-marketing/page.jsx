'use client';

import LaunchCampaignLayout from '@components/pagesLayout/launchCampaignLay';
import { useState } from 'react';
import { influencerData } from './influencerData';
import Influencer from './influencer';

const InfluencerMarketing = () => {
  console.log(influencerData);
  const [influencerCamp, setInfluencerCamp] = useState({
    launchCountry: '',
    launchDuration: '',
  });
  const [selectedInfluencers, setSelectedInfluencers] = useState([]);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState(null);
  const handleChange = (e) => {
    e.target.value;
  };
  const taggedInfluencer = (socialMedia) => {
    setSelectedSocialMedia(socialMedia);
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
            <button
              type='button'
              className={`text-[#040C5E] font-semibold text-sm border-solid bg-transparent border-2 border-[#040C5E] py-2 px-4 rounded-lg active:text-white active:bg-[#040C5E] w-32 ${
                selectedSocialMedia === 'instagram'
                  ? 'bg-[#040C5E] text-white'
                  : ''
              }`}
              onClick={() => taggedInfluencer('instagram')}
            >
              Instagram
            </button>
            <button
              type='button'
              className={`text-[#040C5E] font-semibold text-sm border-solid bg-transparent border-2 border-[#040C5E] py-2 px-4 rounded-lg active:text-white active:bg-[#040C5E] w-32 ${
                selectedSocialMedia === 'tiktok'
                  ? 'bg-[#040C5E] text-white'
                  : ''
              }`}
              onClick={() => taggedInfluencer('tiktok')}
            >
              Tiktok
            </button>
            <button
              type='button'
              className={`text-[#040C5E] font-semibold text-sm border-solid bg-transparent border-2 border-[#040C5E] py-2 px-4 rounded-lg active:text-white active:bg-[#040C5E] w-32 ${
                selectedSocialMedia === 'youtube'
                  ? 'bg-[#040C5E] text-white'
                  : ''
              }`}
              onClick={() => taggedInfluencer('youtube')}
            >
              Youtube
            </button>
            <button
              type='button'
              className={`text-[#040C5E] font-semibold text-sm border-solid bg-transparent border-2 border-[#040C5E] py-2 px-4 rounded-lg active:text-white active:bg-[#040C5E] w-32 ${
                selectedSocialMedia === 'facebook'
                  ? 'bg-[#040C5E] text-white'
                  : ''
              }`}
              onClick={() => taggedInfluencer('facebook')}
            >
              Facebook
            </button>
            <button
              type='button'
              className={`text-[#040C5E] font-semibold text-sm border-solid bg-transparent border-2 border-[#040C5E] py-2 px-4 rounded-lg active:text-white active:bg-[#040C5E] w-32 ${
                selectedSocialMedia === 'twitter'
                  ? 'bg-[#040C5E] text-white'
                  : ''
              }`}
              onClick={() => taggedInfluencer('twitter')}
            >
              Twitter
            </button>
          </div>
          <p className='text-[#040C5E] font-semibold'>Select Influencer</p>
          <div className='flex flex-wrap w-full grid-cols-5 gap-5'>
            {influencerData
              .filter((data) => {
                // Filter influencers based on the selected social media
                return selectedSocialMedia
                  ? data.social === selectedSocialMedia
                  : true;
              })
              .map((data) => {
                return (
                  <Influencer
                    key={data.id}
                    image={data.image}
                    id={data.id}
                    followers={data.followers}
                    social={data.social}
                    isSelected={data.isSelected}
                    isCard={data.isCart}
                    views={data.views}
                    setSelectedInfluencers={setSelectedInfluencers}
                  />
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
