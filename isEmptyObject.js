let isEmptyObject = (obj) => {
  //   for (const key in obj) {
  //     if (obj.hasOwnProperty(key)) {
  //       return "It's not empty";
  //     }
  //   }

  //   return "It's Empty";
  return Object.keys(obj).length === 0 ? "It's  empty " : "It's not empty";
};

console.log(isEmptyObject({}));
