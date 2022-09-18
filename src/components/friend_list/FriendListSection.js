import PropTypes from 'prop-types';

function FriendListSection({ title, children }) {
  return (
    <section className="section">
      {title && <h2 className="title">{title}</h2>}
      {children}
    </section>
  );
}

FriendListSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default FriendListSection;
