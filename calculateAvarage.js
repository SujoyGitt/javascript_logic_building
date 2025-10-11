let calculateAvarage = (arr) => {
  if (arr.length === 0) {
   return 0; 
  }
  let total = arr.reduce((initalVal, elem) => {
    return initalVal + elem;
  }, 0);
  return total / arr.length;
};

console.log(calculateAvarage([]));
           