import React from 'react';
import PropTypes from 'prop-types';
import './LinksList.scss';
import SettingsDropdown from '../../SettingsDropdown';
import LinkSettings from '../LinkSettings';

const LinksList = ({
  links,
  createNewLink,
  cancelEditing,
  saveModifiedList,
  startEditing,
  deleteLink,
}) => {
  const editingLink = links.find(({ editing }) => editing);

  if (editingLink) {
    const { name, url, id } = editingLink;

    return (
      <LinkSettings
        buttonText="Save"
        prevName={name}
        prevUrl={url}
        onBack={cancelEditing}
        onSave={saveModifiedList(id)}
      />
    );
  }

  return (
    <>
      <div className="links-list">
        {links.map(({ id, name, url }) => (

          <div key={id} className="links-list__link-wrapper">
            <a href={url} className="link">

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
                onClick={deleteLink(id)}
              >
                Delete
              </button>
            </SettingsDropdown>
          </div>
        ))}
      </div>
      {!editingLink && (
        <button
          type="button"
          className="add-link"
          onClick={createNewLink}
        >
          <span className="add-link__plus">+</span>
          <span className="add-link__add-btn">
            New Link
          </span>
        </button>
      )}

    </>
  );
};

LinksList.propTypes = {
  createNewLink: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  deleteLink: PropTypes.func.isRequired,
  cancelEditing: PropTypes.func.isRequired,
  saveModifiedList: PropTypes.func.isRequired,
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
