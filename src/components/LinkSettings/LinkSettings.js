import React from 'react';
import PropTypes from 'prop-types';
import './LinkSettings.scss';

const LinkSettings = (props) => {
  const {
    buttonText,
    name,
    link,
    onBack,
    onNameChange,
    onLinkChange,
    onApply,
  } = props;

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
          value={link}
          onChange={onLinkChange}
          className="edit-link__input"
        />
      </form>

      <button
        type="button"
        className="edit-link__btn-save"
        onClick={onApply}
      >
        {buttonText}
      </button>

    </div>
  );
};

LinkSettings.propTypes = {
  buttonText: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
  onBack: PropTypes.func,
  onNameChange: PropTypes.func,
  onLinkChange: PropTypes.func,
  onApply: PropTypes.func,
};

LinkSettings.defaultProps = {
  buttonText: '',
  name: '',
  link: '',
  onBack: () => {},
  onNameChange: () => {},
  onLinkChange: () => {},
  onApply: () => {},
};

export default LinkSettings;
