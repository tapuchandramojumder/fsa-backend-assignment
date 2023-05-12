const randomNumber = (start, end) => {
  const randomValue = Math.floor(Math.random() * (end - start + 1)) + start;
  return randomValue;
};

module.exports = randomNumber;
