function toSnakeCase(str) {
  let arr = str.replace(/\s+/g, " ").split(" ");
  return arr.join("_").toLowerCase();
}

console.log(toSnakeCase("hello world suJoY"));
