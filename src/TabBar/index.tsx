import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import cartoonImg from '../assets/cartoon.jpg';
import foodImg from '../assets/food.jpg';
import movieImg from '../assets/movie.png';
import lifeImg from '../assets/life.jpg';
import './index.scss';

type P = {
  onScroll: (isFixed: boolean) => void
};

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

export default function TabBar(props: P) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].key);
  const [isFixed, setIsFixed] = useState(false);
  const tabBarRef = useRef<HTMLDivElement>(null);
  const tabBarPanelRefs: Array<HTMLElement | null> = [];

  const onScroll = () => {
    const tabBar = tabBarRef.current as HTMLDivElement;
    const tabBarRect = tabBar.getBoundingClientRect();
    const tabBarTop = tabBarRect.top;
    const isFixed = tabBarTop <= 0;
    setIsFixed(isFixed);
    props.onScroll(isFixed);

    const tabBarPanel = (tabBarPanelRefs as any).findLast((item: HTMLElement) => {
      const { top } = item.getBoundingClientRect() || {};
      return top <= 67;
    });

    const activeTab = tabBarPanel?.dataset.key || '';

    if (activeTab) {
      setActiveTab(activeTab);
    }
  };

  const onTabBarListItemClick = (key: string) => {
    const tabBarPanel = (tabBarPanelRefs as HTMLElement[]).find((item: HTMLElement) => item.dataset.key === key);
    if (tabBarPanel) {
      tabBarPanel.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <div
      ref={tabBarRef}
      className={classNames('tab-bar', { fixed: isFixed })}
    >
      <ul className="tab-bar-list">
        {tabs.map(item =>
          <li
            className={classNames(
              'tab-bar-list__item',
              { active: activeTab === item.key }
            )}
            key={item.key}
            onClick={() => onTabBarListItemClick(item.key)}
          >{item.label}</li>
        )}
      </ul>
      {tabs.map(item =>
        <section
          key={item.key}
          className="tab-bar-panel"
          data-key={item.key}
          ref={el => tabBarPanelRefs.push(el)}
        >
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
