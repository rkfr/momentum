import React, { useState } from 'react';
import './Links.scss';
import ToggleButton from '../ToggleButton';
import DropdownWindow from '../DropdownWindow';
import LinksList from '../LinksList';
import CreateLink from '../CreateLink';

const Links = (props) => {
  const { isEditable } = props;

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
          {isEditable ? (
            <CreateLink />
          ) : (
            <LinksList />
          )}

        </DropdownWindow>
      )}

    </div>
  );
};

export default Links;
