import { useState } from 'react';
import classNames from 'classnames';
import cartoonImg from '../assets/cartoon.jpg';
import foodImg from '../assets/food.jpg';
import movieImg from '../assets/movie.png';
import lifeImg from '../assets/life.jpg';
import './index.scss';

type Tab = {
  label: string;
  key: string;
  img: string;
};

const tabs: Tab[] = [
  {
    label: '卡通',
    key: 'cartoon',
    img: cartoonImg
  },
  {
    label: '美食',
    key: 'food',
    img: foodImg
  },
  {
    label: '电影',
    key: 'movie',
    img: movieImg
  },
  {
    label: '生活',
    key: 'life',
    img: lifeImg
  }
];

export default function TabBar() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].key);

  return (
    <div className="tab-bar">
      <ul className="tab-bar-list">
        {tabs.map(item =>
          <li
            className={classNames(
              'tab-bar-list__item',
              { active: activeTab === item.key }
            )}
            key={item.key}
            onClick={() => setActiveTab(item.key)}
          >{item.label}</li>
        )}
      </ul>
      {tabs.map(item =>
        <section key={item.key} className="tab-bar-panel">
          <h2 className="tab-bar-panel__title">{item.label}</h2>
          <img
            className="tab-bar-panel__image"
            src={item.img}
            alt={item.key}
          />
        </section>
      )}
    </div>
  );
};
