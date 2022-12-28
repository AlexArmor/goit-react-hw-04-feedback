import PropTypes from 'prop-types';
import css from './Notification.module.css';
export const Notification = ({ message }) => {
  return <p className={css.notification}>{message}</p>;
};

Notification.propTypes = {
  options: PropTypes.arrayOf({
    option: PropTypes.string.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
