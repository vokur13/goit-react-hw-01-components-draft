// import logo from './logo.svg';
import ProfileMap from './components/profile/ProfileMap';
import ProfileSection from './components/profile/ProfileSection';
import Statistics from './components/statistics/Statistics';
import user from './json/user.json';
import data from './json/data.json';
import './App.css';

function App() {
  return (
    <div>
      {/* <ProfileSection title="User Profile">
        <ProfileMap item={user} />
      </ProfileSection> */}
      <Statistics stats={data} />
    </div>
  );
}

export default App;
