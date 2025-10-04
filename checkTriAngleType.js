let checkTriAngleType = (a, b, c) => {
  if (a + b <= c || b + c <= a || a + c <= b) {
    return "Not a valid triangle";
  }

  if (a === b && b === c) {
    return "equilateral";
  } else if (a === b || b === c || a === c) {
    return "isosceles";
  } else {
    return "scalene";
  }
};

console.log(checkTriAngleType(2, 2, 2));
