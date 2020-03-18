const phrases = [
  'Good job!',
  'Nice',
  'Great work!',
  'Way to go!',
];

export const getRandomPhrase = () => (
  phrases[Math.floor(Math.random() * phrases.length)]
);
