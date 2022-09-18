import PropTypes from 'prop-types';
import Statistics from './Statistics';

function StatisticsMap({ data }) {
  return (
    <ul className="stat-list">
      {data.map(item => (
        <li key={item.id} className="item">
          <Statistics label={item.label} ratio={item.percentage} />
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
