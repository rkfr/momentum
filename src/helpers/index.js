export const getGreetingTime = (currentTime = new Date()) => {
  const currentHour = currentTime.getHours();
  const splitAfternoon = 12;
  const splitEvening = 17;

  if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    return 'Good afternoon';
  } if (currentHour >= splitEvening) {
    return 'Good evening';
  }

  return 'Good morning';
};
