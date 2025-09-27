let calculateAvarage = (arr) => {
  let total = arr.reduce((initalVal, elem) => {
    return initalVal + elem;
  }, 0);
  return total / arr.length;
};

console.log(calculateAvarage([35, 25, 32, 87, 97, 63]));
