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
// import {
//   TransactionHistoryHeadMap,
//   TransactionHistoryBodyMap,
//   TransactionHistoryTable,
//   TransactionHistorySection,
// } from './/components/transaction_history/';
import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';
import './App.css';

function App() {
  return (
    <>
      <ProfileSection title="User Profile">
        <ProfileMap data={user} />
      </ProfileSection>
      <StatisticsSection title={'Statistics'}>
        <StatisticsMap data={data} />
      </StatisticsSection>
      <FriendListSection title="Friends List">
        <FriendListMap data={friends} />
      </FriendListSection>
      <TransactionHistorySection title="Transactions History">
        <TransactionHistoryTable>
          <TransactionHistoryHeadMap />
          <TransactionHistoryBodyMap data={transactions} />
        </TransactionHistoryTable>
      </TransactionHistorySection>
    </>
  );
}

export default App;
