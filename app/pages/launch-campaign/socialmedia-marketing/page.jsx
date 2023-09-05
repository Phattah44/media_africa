'use client';

import LaunchCampaignLayout from '@components/pagesLayout/launchCampaignLay';
import SocialMediaOption from './socialMediaOption';
import { useState } from 'react';
import { RiUpload2Fill } from 'react-icons/ri';

const PressRelease = () => {
  const [socialMediaMarketing, setSocialMediaMarketing] = useState({
    launchCountry: '',
    launchDuration: '',
  });

  const handleChange = (e) => {
    e.target.value;
  };

  return (
    <LaunchCampaignLayout pageTitle='Social Media Marketing'>
      <div>
        <form className='w-9/12 flex flex-col gap-y-5 m-auto'>
          <div className='flex justify-between w-full items-center'>
            <label className='text-[#040C5E] font-semibold'>
              Where do you want to launch
            </label>
            <select
              id='launchCountry'
              value={socialMediaMarketing.launchCountry}
              onChange={handleChange}
              name='launchCountry'
              className='bg-white items-center gap-3 w-3/5 p-2 rounded-lg text-gray-300'
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
            Choose Social Media Campaign
          </p>
          <div className='flex flex-grow justify-between mb-5'>
            <SocialMediaOption
              image={'/twittertrend.png'}
              title='Twitter Trend Campaign'
              description='Your project will trend on twitter with our framework embedded in this campaign. Launch it now!'
            />
            <SocialMediaOption
              image={'/twitterfollower.png'}
              title='Twitter Followers Campaign'
              description='We can give you your desired number of followers in a short period of time to get you visibility'
            />
            <SocialMediaOption
              image={'/telegramcommunity.png'}
              title='Telegram Community Management'
              description='We are also specialized in managing telegram community. Your projects will be properly communicated.'
            />
            <SocialMediaOption
              image={'/discordcommunity.png'}
              title='Discord Community Management'
              description='We understand how perculiar the discord server is and we are professionals in managing discord community'
            />
            <SocialMediaOption
              image={'/faceebookseeding.png'}
              title='Facebook Seeding'
              description='We will creat quality contents and distribute all around facebook in order to promote your projects.'
            />
          </div>
          <p className='text-[#040C5E] font-bold text-lg'>
            Selected Social Media Campaign
          </p>
          <div className='w-[80%]'>
            <div className='w-full'>
              <p className='text-[#040C5E] font-bold bg-[#DCDFED] text-center p-1 rounded-2xl w-[50%] mb-3'>
                Twitter Trend Campaign
              </p>
              <div className='flex flex-row gap-x-5'>
                <div className='flex flex-col w-1/2'>
                  <div className='w-full'>
                    <label className='text-[#040C5E] font-semibold'>
                      Twitter Urls
                    </label>
                    <input
                      type='url'
                      placeholder='paste your preferred tweet link'
                      className='block text-[#040C5E] bg-transparent p-1 my-3  border-solid border-[#040C5E] border-2 w-full'
                    />
                  </div>
                  <div>
                    <p className='text-[#040C5E] font-semibold'>
                      Your Media Content
                    </p>
                    <div className='flex items-center '>
                      <input
                        type='file'
                        placeholder='Choose file'
                        id=''
                        name=''
                        className='block text-[#040C5E] bg-transparent p-1 my-3  border-dashed border-[#040C5E] border-2 file:mr-4 file:px-6  file:text-md file:font-bold file:border-0 file:bg-transparent file:text-[#040C5E] hover:file:cursor-pointer'
                      />
                      <button className='bg-[#040C5E] h-10 w-14'>
                        <RiUpload2Fill className=' text-white m-auto' />
                      </button>
                    </div>
                    <p className='text-[#040C5E] font-thin text-xs'>
                      (Doc, PDF, Max size 10mb)
                    </p>
                  </div>
                </div>
                <div className='flex flex-col w-full'>
                  <div>
                    <p className='text-[#040C5E] font-semibold'>
                      Your Hashtag or Keyword?
                    </p>
                    <input
                      type='text'
                      className='block text-[#040C5E] bg-transparent p-1 my-3  border-solid border-[#040C5E] border-2 w-full'
                    />
                  </div>
                  <div className='flex flex-col w-full'>
                    <p className='text-[#040C5E] font-semibold'>
                      Duration of campaign
                    </p>
                    <select
                      id='launchDuration'
                      value={socialMediaMarketing.launchDuration}
                      name='launchDuration'
                      onChange={handleChange}
                      className='bg-transparent p-2 my-3 w-full border-solid border-[#040C5E] border-2 text-gray-400'
                    >
                      <option value=''>select duration</option>
                      <option value='1week'>1 Week</option>
                      <option value='1month'>1 Month</option>
                      <option value='3months'>3 Months</option>
                      <option value='6months'>6 Months</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full'>
              <p className='text-[#040C5E] font-bold bg-[#DCDFED] text-center p-1 rounded-2xl w-[50%] mt-10 mb-3'>
                Twitter Followers Campaign
              </p>
            </div>
          </div>
        </form>
      </div>
    </LaunchCampaignLayout>
  );
};

export default PressRelease;
