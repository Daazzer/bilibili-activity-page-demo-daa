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
    img: ''
  },
  {
    label: '美食',
    key: 'food',
    img: ''
  },
  {
    label: '电影',
    key: 'movie',
    img: ''
  },
  {
    label: '生活',
    key: 'life',
    img: ''
  }
];

export default function TabBar() {
  return (
    <ul className="tab-bar">
      {tabs.map(tab =>
        <li
          className="tab-bar__tab"
          key={tab.key}
        >{tab.label}</li>
      )}
    </ul>
  );
};
