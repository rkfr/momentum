import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Name.scss';
import AutosizeInput from 'react-input-autosize';
import { getGreetingTime } from '../../helpers';
import DropdownWindow from '../DropdownWindow';
import ToggleButton from '../ToggleButton';

const Name = ({ isLogged, setLogin }) => {
  const [name, setName] = useState('');

  const onNameChange = ({ target: { value } }) => {
    setName(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setLogin();
  };

  const [settingsVisibility, setSettingsVisibility] = useState(false);

  const toggleVisibility = () => {
    setSettingsVisibility((prevState) => !prevState);
  };

  const [isNameEditing, setNameEditing] = useState(false);

  const toggleNameEditing = () => {
    setNameEditing((prevState) => !prevState);
  };

  return (
    <div className="name">
      {!isLogged ? (
        <>
          <h3 className="name__ask">
            Hello, what&apos;s your name?
          </h3>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="name__ask-input"
              value={name}
              onChange={onNameChange}
            />
            <button
              type="submit"
              className="name__continue-btn"
            >
              Continue
            </button>
          </form>
        </>
      ) : (
        <div className="name__greeting">
          <div className="name__greeting-title">

            <div className="name__greeting-phrase">
              {`${getGreetingTime()}, `}
            </div>
            {isNameEditing ? (
              <form
                className="name__greeting-edit-form"
                onSubmit={toggleNameEditing}
              >

                <AutosizeInput
                  name="form-field-name"
                  value={name}
                  onChange={onNameChange}
                  className="name__greeting-edit-input"
                  autoFocus
                />

              </form>

            ) : (
              <span className="name__name">
                {name}
              </span>
            )}
            .
          </div>
          <div className="name__settings">
            <ToggleButton
              className="name__settings-btn"
              onClick={toggleVisibility}
            >
              ...
            </ToggleButton>
            <DropdownWindow
              arrow="top-left"
              isActive={settingsVisibility}
              className="name__edit-window"
            >
              <button
                type="button"
                className="name__edit-btn"
                onClick={toggleNameEditing}
              >
                Edit your name
              </button>
            </DropdownWindow>
          </div>

        </div>
      )}
    </div>
  );
};

Name.propTypes = {
  setLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Name;
