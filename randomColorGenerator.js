let randomHexaColor = () => {
  let colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    console.log(Math.floor(Math.random() * colorArr.length ))
    color += colorArr[Math.floor(Math.random() * colorArr.length)];
  }
  document.body.style.background = color
  return color;

};

console.log(randomHexaColor());
