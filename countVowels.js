let countVowels = (str) => {
  let arr = str.split("");
  let newTxt = arr.filter((elm) => {
    elm = elm.toLowerCase();
    if (elm === "a" || elm === "e" || elm === "i" || elm === "o" || elm === "u")
      return elm;
  });

  return [...new Set(newTxt)].length;
};

console.log(countVowels("thE quIck ioI"));
console.log(countVowels("fjhkhk"));

let countVowels2 = (str) => {
  let arr = str.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let k = arr.filter((element) => {
    if (vowels.includes(element.toLowerCase())) return element;
  });

  return k;
};

console.log(countVowels2("sujoy ghoSAL"));
