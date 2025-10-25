let obj = {
  name: "Sujoy",
  age: 24,
  city: "Pune",
};

let arr = Object.entries(obj);

let ob2 = arr.reduce((accum, elem, index) => {
  accum[index] = elem;
  return accum;
}, {});

console.log(arr.flat());
console.log(ob2);
console.log(Object.fromEntries(arr));
