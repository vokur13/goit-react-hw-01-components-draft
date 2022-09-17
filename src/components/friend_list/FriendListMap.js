import PropTypes from 'prop-types';
import FriendList from './FriendList';

function FriendListMap({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="item">
          <FriendList
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
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
