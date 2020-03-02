import React from 'react';
import PropTypes from 'prop-types';
import './Loader.scss';
import classNames from 'classnames';


const Loader = ({ className }) => {
  const root = classNames([className], {
    'lds-spinner': true,
  });

  return (
    <div className={root}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

Loader.propTypes = {
  className: PropTypes.string,
};

Loader.defaultProps = {
  className: '',
};

export default Loader;
