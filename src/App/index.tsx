import { useState } from 'react';
import BannerBar from '../BannerBar';
import TabBar from '../TabBar';
import NewsList from '../NewsList';
import FooterBar from '../FooterBar';
import './index.scss';

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="app">
      <BannerBar />
      <TabBar onScroll={isFixed => setIsActive(isFixed)} />
      <NewsList />
      <FooterBar isActive={isActive} />
    </div>
  );
}

export default App;
