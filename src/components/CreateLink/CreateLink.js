import React from 'react';
import LinkSettings from '../LinkSettings';

const CreateLink = ({
  name,
  url,
  setName,
  setUrl,
  back,
  add,
}) => (
  <LinkSettings
    buttonText="Create"
    name={name}
    link={url}
    onNameChange={setName}
    onLinkChange={setUrl}
    onBack={back}
    onApply={add}
  />
);

export default CreateLink;
