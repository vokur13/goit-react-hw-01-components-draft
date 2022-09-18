import PropTypes from 'prop-types';
import TransactionHistoryBody from './TransactionHistoryBody';

function TransactionHistoryBodyMap({ data }) {
  return (
    <tbody>
      {data.map(item => (
        <TransactionHistoryBody
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}
        />
      ))}
    </tbody>
  );
}

TransactionHistoryBodyMap.propTypes = {
  dataArr: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export default TransactionHistoryBodyMap;
