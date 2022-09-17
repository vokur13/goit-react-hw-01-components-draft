import PropTypes from 'prop-types';
import Statistics from './Statistics';

function StatisticsMap({ dataArr }) {
  return (
    <ul className="stat-list">
      {dataArr.map(dataElement => (
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
