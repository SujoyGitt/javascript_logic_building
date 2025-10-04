let removeDuplicates = (numArr) => {
  let newArr = [...new Set(numArr)];
  return newArr;
};

console.log(removeDuplicates([1, 2, 3, 2, 1, 4]));
