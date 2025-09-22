const countChar = (elem, char) => {
  if (elem.trim().length === 0) {
    return false;
  } else {
    let arr = elem.replace(/\s+/g, "").split("");
    let totalChar = arr.filter((elm) => elm.toLowerCase() === char.toLowerCase());
    return totalChar.length === 0 ? false : totalChar.length;
  }
};

console.log(  countChar("                       hi                    my                          name s                          sujoy ghosal                                 ","I"));       