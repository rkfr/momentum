import React, { useState } from 'react';
import './Focus.scss';
import classNames from 'classnames';
import { getRandomPhrase } from '../../helpers';

const Focus = () => {
  const [focus, setFocus] = useState('');

  const onFocusChange = ({ target: { value } }) => {
    setFocus(value);
  };

  const [isFocusSubmited, submitFocus] = useState(false);

  const setFocusSubmit = (e) => {
    e.preventDefault();

    if (!focus) return;

    submitFocus(true);
  };

  const [compliment, setCompliment] = useState('');

  const setRandomCompliment = () => {
    setCompliment(getRandomPhrase());
    setTimeout(() => setCompliment(''), 1200);
  };

  const [isFocusCompleted, completeFocus] = useState(false);

  const toggleFocus = () => {
    completeFocus((prevFocus) => {
      if (!prevFocus) {
        setRandomCompliment();
      }

      return !prevFocus;
    });
  };

  const removeFocus = () => {
    setFocus('');
    submitFocus(false);
  };

  const todayLabelClass = classNames('today__label', {
    'today__label--checked': isFocusCompleted,
  });

  return (
    <div className="focus">
      {!isFocusSubmited ? (
        <div className="get-focus">
          <h3 className="get-focus__title">What is your main focus for today?</h3>
          <form onSubmit={setFocusSubmit}>
            <input
              type="text"
              className="get-focus__input"
              value={focus}
              onChange={onFocusChange}
            />
            <label className="get-focus__label">Press enter to set your focus</label>
          </form>
        </div>
      ) : (
        <div className="today">
          <h3 className="today__title">Today</h3>
          <div className="today__controls">
            <input
              type="checkbox"
              id="today__checkbox"
              className="today__checkbox"
              checked={isFocusCompleted}
              onClick={toggleFocus}
            />
            <label
              htmlFor="today__checkbox"
              className={todayLabelClass}
            >
              {focus}
            </label>
            <button
              type="button"
              className="today__close"
              onClick={removeFocus}
            >
              <input
                type="image"
                src="./images/close.svg"
                alt="close button"
                className="today__close-img"
              />
            </button>
          </div>
          {isFocusCompleted && (
            <p className="compliment">{compliment}</p>
          )}
        </div>
      )}

    </div>
  );
};

export default Focus;
