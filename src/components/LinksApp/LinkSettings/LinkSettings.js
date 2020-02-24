import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LinkSettings.scss';

const newLink = (name, url) => ({
  name,
  url,
  id: `#${Date.now()}:${name}`,
});

const LinkSettings = (props) => {
  const {
    buttonText,
    onBack,
    onApply,
  } = props;

  const [name, setName] = useState('');
  const onNameChange = ({ target: { value } }) => {
    setName(value);
  };

  const [url, setUrl] = useState('');
  const onLinkChange = ({ target: { value } }) => {
    setUrl(value);
  };

  return (
    <div className="edit-link">
      <div className="edit-link__top">
        <button
          className="edit-link__back-btn"
          type="button"
          onClick={onBack}
        >
          <img
            src="./images/left-arrow.svg"
            alt="back button"
            className="edit-link__btn-img"
          />
        </button>
      </div>


      <form className="edit-link__form">
        <label className="edit-link__label">Name</label>
        <input
          type="text"
          value={name}
          placeholder="example.com"
          onChange={onNameChange}
          className="edit-link__input"
        />
      </form>

      <form className="edit-link__form">
        <label className="edit-link__label">Links</label>
        <input
          type="text"
          placeholder="example.com"
          value={url}
          onChange={onLinkChange}
          className="edit-link__input"
        />
      </form>

      <button
        type="button"
        className="edit-link__btn-save"
        onClick={onApply(newLink(name, url))}
      >
        {buttonText}
      </button>

    </div>
  );
};

LinkSettings.propTypes = {
  buttonText: PropTypes.string,
  onBack: PropTypes.func,
  onApply: PropTypes.func,
};

LinkSettings.defaultProps = {
  buttonText: '',
  onBack: () => {},
  onApply: () => {},
};

export default LinkSettings;
