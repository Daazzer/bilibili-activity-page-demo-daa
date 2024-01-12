import bannerImg from '../assets/banner.jpg';
import './index.scss';

export default function BannerBar() {
  return (
    <img
      className="banner-bar"
      src={bannerImg}
      alt="banner"
    />
  );
};
