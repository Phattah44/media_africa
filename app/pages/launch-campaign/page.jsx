'use client';

import PagesLayout from '@components/pagesLayout/pagesLayout';
import Link from 'next/link';
import { useState } from 'react';
import LaunchOptions from './LaunchOptions';

const Page = ({}) => {
  const [linkTo, setLinkTo] = useState('');
  const handleLinkTo = (link) => {
    setLinkTo(link);
  };

  return (
    <PagesLayout>
      <div className='w-full'>
        <h2 className='text-[#040C5E] text-2xl font-bold bg-[#DCDFED] w-full p-4 indent-6'>
          Launch Campaign
        </h2>
        <h3 className='ml-10 mt-12 mb-6 text-[#040C5E] text-xl'>
          select campaign category{' '}
        </h3>
        <div className='flex flex-row gap-x-8 ml-10 mb-24'>
          <LaunchOptions
            image={'/press-release.png'}
            title='Press releases and Sponsored articles'
            description='We assist with the publication of your press release and articles to give your maximum publicity.'
            link='/pages/launch-campaign/press-release'
            action={() => handleLinkTo('/pages/launch-campaign/press-release')}
          />
          <LaunchOptions
            image={'/influencer.png'}
            title='Influencer Marketing'
            description='We manage the largest network of tech, crypto & blockchain influencers in Africa. Get access to them.'
            link='/pages/launch-campaign/influencer-marketing'
            action={() =>
              handleLinkTo('/pages/launch-campaign/influencer-marketing')
            }
          />
          <LaunchOptions
            image={'/social-media.png'}
            title='Social Media Marketing'
            description='With our specialized social media campaigns, your project is ertain to get the widest audience.'
            link='/pages/launch-campaign/socialmedia-marketing'
            action={() =>
              handleLinkTo('/pages/launch-campaign/socialmedia-marketing')
            }
          />
          <LaunchOptions
            image={'/banner-advertisement.png'}
            title='Banner Advertisement '
            description='Our team of creatives creates aatractive banners to be sent to high authority sites to gain massive impressions'
            link='/pages/launch-campaign/banner-advertisement'
            action={() =>
              handleLinkTo('/pages/launch-campaign/banner-advertisement')
            }
          />
          <LaunchOptions
            image={'/offline-promotion.png'}
            title='Offline Promotion'
            description='We can help you reach millions of people every week through offline advertising in Africa.'
            link='/pages/launch-campaign/offline-promotion'
            action={() =>
              handleLinkTo('/pages/launch-campaign/offline-promotion')
            }
          />
        </div>
        <Link href={linkTo}>
          <button className='text-white bg-button-color w-1/3 rounded-lg ml-10 px-4 py-3 font-bold text-lg'>
            Continue
          </button>
        </Link>
      </div>
    </PagesLayout>
  );
};

export default Page;
