import React, { useState } from 'react';
import './Search.scss';
import classNames from 'classnames';


const Search = () => {
  const [isFocused, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  const [inputValue, setInputValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    window.location = `https://www.google.com/search?q=${inputValue}`;
  };

  const rootClass = classNames('search', {
    'search--focused': isFocused || !!inputValue,
  });

  const searchEngineClass = classNames('search__search-engine', {
    'search__search-engine--active': isFocused || !!inputValue,
  });

  return (
    <div className={rootClass}>
      <input
        type="image"
        src="./images/search.svg"
        alt="Search"
        className="search__icon"
      />
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="search__input"
          value={inputValue}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </form>
      <img
        src="./images/google-icon.svg"
        alt="Search engine icon"
        className={searchEngineClass}
      />
    </div>
  );
};

export default Search;
