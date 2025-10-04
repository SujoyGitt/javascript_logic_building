function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
 return arr1.every((curren, index) => (curren === arr2[index] ? true : false));
}

console.log(arraysAreEqual([8, 8, 9], [8, 8, "9"]));
console.log(arraysAreEqual([], ["9"]));
console.log(arraysAreEqual([], []));
