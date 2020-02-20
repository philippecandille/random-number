function randomNumber(min, max) {
  if (typeof (max) !== 'number' && typeof (min) !== 'number') {
    min = 0; max = 1;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = randomNumber;
