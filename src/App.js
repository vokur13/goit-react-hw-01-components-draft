// import logo from './logo.svg';
import ProfileMap from './components/profile/ProfileMap';
import ProfileSection from './components/profile/ProfileSection';
import StatisticsMap from './components/statistics/StatisticsMap';
import StatisticsSection from './components/statistics/StatisticsSection';
import FriendListMap from './components/friend_list/FriendListMap';
import FriendListSection from './components/friend_list/FriendListSection';
import TransactionHistoryHeadMap from './components/transaction_history/TransactionHistoryHeadMap';
import TransactionHistoryBodyMap from './components/transaction_history/TransactionHistoryBodyMap';
import TransactionHistoryTable from './components/transaction_history/TransactionHistoryTable';
import TransactionHistorySection from './components/transaction_history/TransactionHistorySection';
import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';
import './App.css';

function App() {
  return (
    <div>
      <ProfileSection title="User Profile">
        <ProfileMap item={user} />
      </ProfileSection>
      <StatisticsSection title={'Upload stats'}>
        <StatisticsMap data={data} />
      </StatisticsSection>
      <FriendListSection title="Friends List">
        <FriendListMap friends={friends} />
      </FriendListSection>
      <TransactionHistorySection title="Transactions History">
        <TransactionHistoryTable>
          <TransactionHistoryHeadMap />
          <TransactionHistoryBodyMap transactionsData={transactions} />
        </TransactionHistoryTable>
      </TransactionHistorySection>
    </div>
  );
}

export default App;
