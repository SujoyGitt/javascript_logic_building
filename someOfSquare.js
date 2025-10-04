let someOfSquare = (arr) => {
  return arr.reduce((accum, elem) => {
    return accum + elem * elem;
  }, 0);
};

console.log(someOfSquare([1, 2, 3, 4]));
