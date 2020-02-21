import React from 'react';
import './LinksList.scss';
import SettingsDropdown from '../SettingsDropdown';

// const links = [
//   {
//     id: '1',
//     name: 'YT',
//     link: 'https://www.youtube.com/',
//     edited: false,
//   },
//   {
//     id: '2',
//     name: '4pda',
//     link: 'https://4pda.ru/',
//     edited: false,
//   },
//   {
//     id: '3',
//     name: 'overclockers',
//     link: 'https://www.overclockers.ua/',
//     edited: false,
//   },
// ];

const LinksList = (props) => {
  const { links, createItem } = props;

  return (
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
              >
                Modify
              </button>
              <button
                type="button"
                className="link__btn"
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
        onClick={createItem}
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
};

export default LinksList;
