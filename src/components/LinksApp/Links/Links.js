import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Links.scss';
import ToggleButton from '../../ToggleButton';
import DropdownWindow from '../../DropdownWindow';
import LinksList from '../LinksList';
import LinkSettingsWithCreation from '../LinkSettingsWithCreation';
import LinkSettingsWithEditing from '../LinkSettingsWithEditing';

const Links = ({ isCreating, isEditing }) => {
  const [isVisible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility((prevVisibility) => !prevVisibility);
  };

  return (
    <div className="links">

      <div className="links__main">
        <ToggleButton onClick={toggleVisibility}>
          Links
        </ToggleButton>
      </div>

      {isVisible && (
        <DropdownWindow
          arrow="top-left"
          isActive={isVisible}
          className="links__dropdown"
        >
            {
              // eslint-disable-next-line no-nested-ternary
              isCreating ? <LinkSettingsWithCreation />
                : isEditing ? <LinkSettingsWithEditing />
                  : <LinksList />
            }

        </DropdownWindow>
      )}

    </div>
  );
};

Links.propTypes = {
  isCreating: PropTypes.bool,
  isEditing: PropTypes.bool,
};

Links.defaultProps = {
  isCreating: false,
  isEditing: false,
};

export default Links;
