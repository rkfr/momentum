import React, { useState, useEffect } from 'react';
import './Clock.scss';
import FormattedDate from './FormattedDate';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  let timerId = null;

  useEffect(() => {
    timerId = setInterval(
      () => tick(),
      1000,
    );

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="clock">
      <FormattedDate
        date={date}
        className="clock__time"
      />
    </div>
  );
};

export default Clock;
