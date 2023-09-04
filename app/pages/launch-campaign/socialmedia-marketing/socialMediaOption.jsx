const SocialMediaOption = ({ image, title, description }) => {
  return (
    <div>
      <div>
        <img src={image} />
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SocialMediaOption;
