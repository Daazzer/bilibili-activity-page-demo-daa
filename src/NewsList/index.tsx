import header1Img from '../assets/title1.jpg';
import header2Img from '../assets/title2.jpg';
import contentImg from '../assets/comment.jpg';
import './index.scss';

const newsList = [
  {
    key: 'live',
    headerImg: header1Img,
    contentImg: contentImg
  },
  {
    key: 'concert',
    headerImg: header2Img,
    contentImg: contentImg
  }
];

export default function NewsList() {
  return (
    <ul className="news-list">
      {newsList.map(item =>
        <li key={item.key} className="news-list__item">
          <img
            className="header-img"
            src={item.headerImg}
            alt={item.key + '-header'}
          />
          <img
            className="content-img"
            src={item.contentImg}
            alt={item.key + '-content'}
          />
        </li>
      )}
    </ul>
  );
};
