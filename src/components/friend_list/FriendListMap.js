import PropTypes from 'prop-types';
import FriendList from './FriendList';

function FriendListMap({ data }) {
  return (
    <ul className="friend-list">
      {data.map(item => (
        <li key={item.id} className="item">
          <FriendList
            isOnline={item.isOnline}
            avatar={item.avatar}
            name={item.name}
          />
          <p className="name"></p>
        </li>
      ))}
    </ul>
  );
}

FriendListMap.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ),
};

export default FriendListMap;
