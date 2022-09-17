// import logo from './logo.svg';
import ProfileMap from './components/profile/ProfileMap';
import ProfileSection from './components/profile/ProfileSection';
import StatisticsMap from './components/statistics/StatisticsMap';
import StatisticsSection from './components/statistics/StatisticsSection';
import FriendListMap from './components/friend_list/FriendListMap';
import FriendListSection from './components/friend_list/FriendListSection';
import TransactionHistory from './components/transaction_history/TransactionHistory';
import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';
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
      <FriendListSection title="Friends List">
        <FriendListMap friends={friends} />
      </FriendListSection>
    </div>
  );
}

export default App;
