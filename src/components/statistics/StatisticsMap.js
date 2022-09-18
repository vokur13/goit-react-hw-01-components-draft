import PropTypes from 'prop-types';
import Statistics from './Statistics';

function StatisticsMap({ data }) {
  return (
    <ul className="stat-list">
      {data.map(dataElement => (
        <li key={dataElement.id} className="item">
          <Statistics
            label={dataElement.label}
            ratio={dataElement.percentage}
          />
        </li>
      ))}
    </ul>
  );
}

StatisticsMap.propTypes = {
  dataArr: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export default StatisticsMap;
