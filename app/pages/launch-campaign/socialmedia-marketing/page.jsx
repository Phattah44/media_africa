import LaunchCampaignLayout from '@components/pagesLayout/launchCampaignLay';
import SocialMediaOption from './socialMediaOption';

const PressRelease = () => {
  return (
    <LaunchCampaignLayout pageTitle='Social Media Marketing'>
      <div>
        <div>
          <SocialMediaOption image={'/twittertrend.png'} />
        </div>
      </div>
    </LaunchCampaignLayout>
  );
};

export default PressRelease;
