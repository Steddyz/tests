const delay = (callback, ms) => {
  return new Promise((resolve) => {
    resolve(callback());
  }, ms);
};

module.exports = delay;
