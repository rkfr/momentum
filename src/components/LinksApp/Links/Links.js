import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Links.scss';
import ToggleButton from '../../ToggleButton';
import DropdownWindow from '../../DropdownWindow';
import LinksList from '../LinksList';
import LinkSettings from '../LinkSettings';

const Links = ({ addLink }) => {
  const [isVisible, setVisibility] = useState(false);
  const toggleVisibility = () => {
    setVisibility((prevVisibility) => !prevVisibility);
  };

  const [isCreatingWindowVisible, setCreatingVisibility] = useState(false);
  const showCreating = () => setCreatingVisibility(true);
  const hideCreating = () => setCreatingVisibility(false);


  const createNewLink = ({ name, url }) => () => {
    addLink({ name, url });
    hideCreating();
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
            {isCreatingWindowVisible ? (
              <LinkSettings
                buttonText="Create"
                onSave={createNewLink}
                onBack={hideCreating}
              />
            ) : (
              <LinksList
                createNewLink={showCreating}
              />
            )}

        </DropdownWindow>
      )}

    </div>
  );
};

Links.propTypes = {
  addLink: PropTypes.func.isRequired,
};

export default Links;
