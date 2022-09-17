import PropTypes from 'prop-types';
import defaultImage from '../../img/default.jpg';

function FriendList({
  isOnline = false,
  avatar = defaultImage,
  name = 'Unknown',
}) {
  return (
    <div>
      <span className="status">
        {isOnline ? 'Online: Green Color' : 'Offline: Red Color'}
      </span>
      <img
        className="avatar"
        src={avatar ?? defaultImage}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </div>
  );
}

FriendList.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendList;
