import React from 'react';
import PropTypes from 'prop-types';
import LinkSettings from '../LinkSettings';

const LinkSettingsWithEditing = ({
  finishEditing,
  saveEditedItem,
}) => (
  <LinkSettings
    buttonText="Save"
    onBack={finishEditing}
    onApply={saveEditedItem}
  />
);

LinkSettingsWithEditing.propTypes = {
  finishEditing: PropTypes.func.isRequired,
  saveEditedItem: PropTypes.func.isRequired,
};

export default LinkSettingsWithEditing;
