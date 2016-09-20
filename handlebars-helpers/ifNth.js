module.exports = function (nr, v, options) {
  if (nr % v === 0 && nr !== 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};
