import PropTypes from 'prop-types';

function TransactionHistoryHead(props) {
  //   const { headKey } = props;
  //   for (let index = 1; index < headKey.length; index++) {
  //     const element = headKey[index];
  //     <th>{element}</th>;
  //     console.log(element);
  //   }
  return (
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  );
}

// TransactionHistoryHead.propTypes = {
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.string.isRequired,
//   currency: PropTypes.string.isRequired,
// };

export default TransactionHistoryHead;
