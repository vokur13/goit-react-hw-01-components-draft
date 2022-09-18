import Profile from './Profile';
import PropTypes from 'prop-types';

export default function ProfileMap({ data }) {
  return (
    <Profile
      key={data.username}
      avatar={data.avatar}
      username={data.username}
      tag={data.tag}
      location={data.location}
      followers={data.stats.followers}
      views={data.stats.views}
      likes={data.stats.likes}
    />
  );
}

ProfileMap.propTypes = {
  item: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }),
};
