import PropTypes from 'prop-types';

function ProfileSection({ title, children }) {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

ProfileSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default ProfileSection;
