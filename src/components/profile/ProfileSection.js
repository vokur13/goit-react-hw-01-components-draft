import PropTypes from 'prop-types';

function ProfileSection({ title, children }) {
  return (
    <section className="section">
      <div className="container">
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
}

ProfileSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default ProfileSection;
