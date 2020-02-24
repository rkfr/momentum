import React from 'react';
import PropTypes from 'prop-types';
import LinkSettings from '../LinkSettings';

const WithCreation = ({ finishCreating, createItem }) => (
  <LinkSettings
    buttonText="Create"
    onApply={createItem}
    onBack={finishCreating}
  />
);

WithCreation.propTypes = {
  createItem: PropTypes.func.isRequired,
  finishCreating: PropTypes.func.isRequired,
};

export default WithCreation;
