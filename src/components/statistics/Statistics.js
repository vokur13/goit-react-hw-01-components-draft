import PropTypes from 'prop-types';

function Statistics(props) {
  const { label = 'StatLabel', ratio = null } = props;
  return (
    <div>
      <span className="label">{label}</span>
      <span className="percentage">{ratio}</span>
    </div>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  ratio: PropTypes.number.isRequired,
};

export default Statistics;
