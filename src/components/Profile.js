import PropTypes from 'prop-types';
import defaultImage from '../img/default.jpg';

export default function Profile({
  avatar = defaultImage,
  username = 'Unknown',
  tag,
  location = 'Somewhere',
  followers,
  views,
  likes,
}) {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar ?? defaultImage} alt="User avatar" class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers: </span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views: </span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes: </span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
