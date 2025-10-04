let isPalindrom = (elem) => {
  return elem.toLowerCase().replace(/\s+/g, '') === elem.split('').reverse().join('').toLowerCase().replace(/\s+/g, '') ? true : false;
};

console.log(isPalindrom(" ad a d a"));