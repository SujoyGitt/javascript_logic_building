function toCamelCase(str) {
  let arr = str.replace(/\s+/g, " ").split(" ");
  let newArr = arr.map((elem) => {
    return elem[0].toUpperCase() + elem.slice(1).toLowerCase();
  });
  newArr = newArr.join("");
  return newArr[0].toLowerCase() + newArr.slice(1);
}

console.log(toCamelCase("hello world suJoY"));
   