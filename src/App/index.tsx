import BannerBar from '../BannerBar';
import TabBar from '../TabBar';
import NewsList from '../NewsList';
import './index.scss';

function App() {
  return (
    <div className="app">
      <BannerBar />
      <TabBar />
      <NewsList />
    </div>
  );
}

export default App;
