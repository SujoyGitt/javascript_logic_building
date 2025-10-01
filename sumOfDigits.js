let sumOfDigits = (num) => {
  let arr = [];
  while (num > 0) {
    arr.push(num % 10); 
    num = Math.floor(num / 10); 
  }
  return arr.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumOfDigits(8765)); 
