let findMode = (arr) => {
  let obj = {};
  for (const element of arr) {
    obj[element] = (obj[element] || 0) + 1;
  }

  return Object.keys(obj).reduce((accum, elm) =>
    obj[elm] < obj[accum] ? accum : elm
  );
};

console.log(findMode([1, 2, 2, 3,3,3, 1, 4,4,4,4, 2]));
