const numberRange = (a, b, arr = []) => {
  //   while (a <= b) {
  //     a++;
  //     arr.push(a);
  //   }
  if (a <= b) {
    arr.push(a);
    return numberRange(a + 1, b, arr);
  }
  return arr;
};
console.log(numberRange(1, 9));
