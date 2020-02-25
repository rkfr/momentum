import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LinkSettings.scss';
import classNames from 'classnames';

const LinkSettings = (props) => {
  const {
    className,
    buttonText,
    prevName,
    prevUrl,
    onBack,
    onSave,
  } = props;

  const [name, setName] = useState(prevName);
  const [url, setUrl] = useState(prevUrl);

  const onNameChange = ({ target: { value } }) => {
    setName(value);
  };

  const onLinkChange = ({ target: { value } }) => {
    setUrl(value);
  };

  const rootClass = classNames([className], {
    'edit-link': true,
  });

  return (
    <div className={rootClass}>
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
        onClick={onSave({ name, url })}
      >
        {buttonText}
      </button>

    </div>
  );
};

LinkSettings.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  prevName: PropTypes.string,
  prevUrl: PropTypes.string,
  className: PropTypes.string,
};

LinkSettings.defaultProps = {
  prevName: '',
  prevUrl: '',
  className: '',
};

export default LinkSettings;
