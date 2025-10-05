// function findMin(arr) {
//   return Math.min(...arr);
// }
function findMin(arr) {
  if (arr.length === 0) {
    return false
  }
  return arr.sort((a,b)=>{
    if (a > b) return -1;
  })[0]
}

console.log(findMin([1, 5, 590, 52, 53, 3, 9, 2]));
console.log(findMin([-10, -5, -3, -9, -2]));
console.log(findMin([]));
