// import logo from './logo.svg';
import ProfileMap from './components/profile/ProfileMap';
import ProfileSection from './components/profile/ProfileSection';
import StatisticsMap from './components/statistics/StatisticsMap';
import StatisticsSection from './components/statistics/StatisticsSection';
import user from './json/user.json';
import data from './json/data.json';
import './App.css';

function App() {
  return (
    <div>
      <ProfileSection title="User Profile">
        <ProfileMap item={user} />
      </ProfileSection>
      <StatisticsSection title={'Upload stats'}>
        <StatisticsMap dataArr={data} />
      </StatisticsSection>
    </div>
  );
}

export default App;
