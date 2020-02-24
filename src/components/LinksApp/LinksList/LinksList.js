import React from 'react';
import PropTypes from 'prop-types';
import './LinksList.scss';
import SettingsDropdown from '../../SettingsDropdown';

const LinksList = ({
  links,
  startCreating,
  startEditing,
  deleteItem,
}) => (
  <>
    <ul className="links-list">
      {links.map(({ id, name, link }) => (
        <li key={id} className="links-list__link-wrapper">
          <a href={link} className="link">

            <input
              className="link__img-btn"
              type="image"
              src="./images/right-arrow.svg"
              alt="search"
            />
            <span className="link__text">{name}</span>

          </a>
          <SettingsDropdown
            className="link__settings"
            dropdownClassName="link__settings-drodown"
          >
            <button
              type="button"
              className="link__btn"
              onClick={startEditing(id)}
            >
              Modify
            </button>
            <button
              type="button"
              className="link__btn"
              onClick={deleteItem(id)}
            >
              Delete
            </button>
          </SettingsDropdown>
        </li>
      ))}
    </ul>
    <button
      type="button"
      className="add-link"
      onClick={startCreating}
    >
      <span className="add-link__plus">+</span>
      <span

        className="add-link__add-btn"
      >
        New Link
      </span>
    </button>
  </>
);

LinksList.propTypes = {
  startCreating: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
};

LinksList.defaultProps = {
  links: [],
};

export default LinksList;
