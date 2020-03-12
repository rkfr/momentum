import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FormattedDate = ({ date, className }) => {
  const dateToShow = date.toLocaleTimeString().split(' ')[0];

  const rootClass = classNames('', {
    [className]: !!className,
  });

  return (
    <h2 className={rootClass}>{dateToShow}</h2>
  );
};

FormattedDate.propTypes = {
  date: PropTypes.instanceOf(Date),
  className: PropTypes.string,
};

FormattedDate.defaultProps = {
  date: '0:00',
  className: '',
};

export default FormattedDate;
