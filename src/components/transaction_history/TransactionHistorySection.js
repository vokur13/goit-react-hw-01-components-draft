import PropTypes from 'prop-types';

function TransactionHistorySection({ title, children }) {
  return (
    <section className="section">
      {title && <h2 className="title">{title}</h2>}
      {children}
    </section>
  );
}

TransactionHistorySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default TransactionHistorySection;
