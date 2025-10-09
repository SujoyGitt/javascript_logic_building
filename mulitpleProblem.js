let isUpperCase = (elm) => {
  return elm === elm.toUpperCase() ? true : false;
};
console.log(isUpperCase("s"));

let isLowerCase = (elm) => {
  return elm === elm.toLowerCase() ? true : false;
};
console.log(isLowerCase("s"));

const startWith = (str, checkStr) => {
  // return str.startsWith(checkStr);
  let arr = str.trim().split(" ");
  return arr[0].toLowerCase() === checkStr.toLowerCase() ? true : false;
};

console.log(startWith("Sujoy Ghosal", "SuJOy"));

let reverseStr = (str) => {
  // let arr = str.trim().split("");
  // return arr.reverse().join("");

  let stArr = [];
  for (let i = str.length - 1; i >= 0; i--) {
   stArr.push(str[i])
  }
  return stArr.join('')
};

console.log(reverseStr("Hello"));
