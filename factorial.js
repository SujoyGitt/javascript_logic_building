let factorial = (number) => {
  let arr = [];
  for (let i = number; i >= 1; i--) {
    arr.push(i);
  }
  let total = arr.reduce((initialVal, currentVal) => {
    return initialVal * currentVal;
  }, 1);

  return total;
};

console.log(factorial(3));

const factorialRecursive = (number) => {
  if (number === 1 || number < 1) {
    return 1;
  }else{
    return number * factorialRecursive(number - 1);
  }
};

console.log(factorialRecursive(4));
