import Profile from './Profile';
import PropTypes from 'prop-types';

export default function ProfileMap({ item }) {
  return (
    <Profile
      key={item.username}
      avatar={item.avatar}
      username={item.username}
      tag={item.tag}
      location={item.location}
      followers={item.stats.followers}
      views={item.stats.views}
      likes={item.stats.likes}
    />
  );
}

ProfileMap.propTypes = {
  item: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }),
};
