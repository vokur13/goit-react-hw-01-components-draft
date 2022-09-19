import PropTypes from 'prop-types';
import defaultImage from '../../img/default.jpg';
import css from './Profile.module.css';

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
    <div className={css.profile}>
      <div className="description">
        <img
          src={avatar ?? defaultImage}
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers: </span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views: </span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes: </span>
          <span className="quantity">{likes}</span>
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
