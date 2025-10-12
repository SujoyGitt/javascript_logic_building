
const findMedian = (arr) => {
  let nwArr = arr.sort((a, b) => a - b);
  let mid = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return (nwArr[mid] + nwArr[mid - 1]) / 2;
  } else {
    return nwArr[mid];
  }
};

console.log(findMedian([8, 3, 2, 9, 7]));
console.log(findMedian([5, 4, 9, 2]));
