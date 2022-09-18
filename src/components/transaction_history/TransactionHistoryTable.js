import PropTypes from 'prop-types';

function TransactionHistoryTable({ children }) {
  return <table className="transaction-history">{children}</table>;
}

TransactionHistoryTable.propTypes = {
  children: PropTypes.node,
};

export default TransactionHistoryTable;
