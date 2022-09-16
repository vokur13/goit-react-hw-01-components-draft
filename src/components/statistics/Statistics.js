import PropTypes from 'prop-types';

// function Statistics({ title = 'Upload stats', stats }) {
//   return (
//     <section class="statistics">
//       {title && <h2 class="title">{title}</h2>}

//       <ul class="stat-list">
//         <li class="item">
//           <span class="label">{stats.label}</span>
//           <span class="percentage">{stats.percentage}</span>
//         </li>
//       </ul>
//     </section>
//   );
// }

function Statistics({ title = 'Upload stats', stats }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(element => (
          <li key={element.id} class="item">
            <span class="label">{element.label}</span>
            <span class="percentage">{element.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape(),
};

export default Statistics;
