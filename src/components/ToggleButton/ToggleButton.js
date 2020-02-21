import React from 'react';
import PropTypes from 'prop-types';
import './ToggleButton.scss';
import classNames from 'classnames';

const ToggleButton = ({ className, onClick, children }) => {
  const rootClass = classNames([className], {
    'toggle-button': true,
  });

  return (
    <button
      type="button"
      className={rootClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

ToggleButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

ToggleButton.defaultProps = {
  children: '',
  className: '',
  onClick: () => {},
};

export default ToggleButton;
