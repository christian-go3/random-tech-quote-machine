import PropTypes from 'prop-types';

NetworkStatusAlert.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onCloseButtonClick: PropTypes.func.isRequired,
};

export default function NetworkStatusAlert({
  isOnline,
  isVisible,
  onCloseButtonClick,
}) {
  const appName = 'Random Tech Quote Machine';

  const alertText = isOnline
    ? `Yay, ${appName} is back online!`
    : `Uh-oh, ${appName} went offline...`;

  const alertClass = isOnline
    ? 'network-status-success'
    : 'network-status-warning';

  const visibilityClass = isVisible ? ' show' : ' hide';

  return (
    <div className={alertClass + visibilityClass}>
      <p className="network-status-text">{alertText}</p>
      <i
        className="fa-solid fa-rectangle-xmark close-icon"
        onClick={onCloseButtonClick}
      ></i>
    </div>
  );
}

