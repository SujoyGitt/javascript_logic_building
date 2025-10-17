const trunckate = (str,leng)=>{
 if (leng <= 0) return str;
 return str.length > leng ? str.slice(0,leng) + "..." : str;
}
console.log(trunckate("A Quick Brown fox jumps over the lazy dog",0))