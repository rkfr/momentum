import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './DropdownWindow.scss';
import classNames from 'classnames';

const DropdownWindow = ({
  children,
  arrow,
  className,
  isActive,
}) => {
  const [shouldRender, setRender] = useState(isActive);

  useEffect(() => {
    if (isActive) setRender(true);
  }, [isActive]);

  const onAnimationEnd = () => {
    if (!isActive) setRender(false);
  };

  const rootClass = classNames(([className] || ''), {
    'dropdown-window': true,
    'animation-fade-in': isActive,
    'animation-fade-out': !isActive,
    [arrow]: !!arrow,
  });

  return (
    <>
      {shouldRender && (
        <div
          className={rootClass}
          onAnimationEnd={onAnimationEnd}
        >
          {children}
        </div>
      )}
    </>
  );
};

DropdownWindow.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  arrow: PropTypes.string,
  className: PropTypes.string,
};

DropdownWindow.defaultProps = {
  arrow: '',
  className: '',
};

export default DropdownWindow;
