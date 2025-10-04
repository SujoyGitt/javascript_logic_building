let factorial = (number) => {
  let arr = [];
  for (let i = number; i >= 1; i--) {
    arr.push(i);
  }
  let total = arr.reduce((initialVal, currentVal) => {
    return initialVal * currentVal;
  },1);

  return total;
};

console.log(factorial(3));

let recursivefactorial = (n)=>{
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * recursivefactorial(n - 1);
}


console.log(recursivefactorial(4));
    