import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SettingsDropdown.scss';
import classNames from 'classnames';

const SettingsDropdown = ({
  children,
  containerClassName,
  buttonClassName,
  dropdownClassName,
}) => {
  const [isVisible, setVisibility] = useState(false);

  const switchVisibility = () => {
    setVisibility((prevVisibility) => !prevVisibility);
  };

  const rootClass = classNames([containerClassName], {
    'settings-dropdown': true,
  });

  const buttonClass = classNames([buttonClassName], {
    'dropdown-button': true,
  });

  const dropdownClass = classNames([dropdownClassName], {
    'settings-dropdown__dropdown': true,
  });

  return (
    <div className={rootClass}>

      <label className={buttonClass}>
        <span className="dropdown-button__label">...</span>
        <input
          type="button"
          className="dropdown-button__input"
          onClick={switchVisibility}
        />
      </label>

      {isVisible && (
        <div className={dropdownClass}>
          {children}
        </div>
      )}
    </div>
  );
};

SettingsDropdown.propTypes = {
  children: PropTypes.node.isRequired,
  containerClassName: PropTypes.string,
  dropdownClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
};

SettingsDropdown.defaultProps = {
  containerClassName: '',
  dropdownClassName: '',
  buttonClassName: '',
};

export default SettingsDropdown;
