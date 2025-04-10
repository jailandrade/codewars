function removeChar(str){
  return str.replace(str.substring(0,1),"").slice(0, -1);  
};

console.log(removeChar("eloquent"));
console.log(removeChar("country"));
console.log(removeChar("person"));
console.log(removeChar("place"));
console.log(removeChar("ooopsss"));
console.log(removeChar("casa"));
console.log(removeChar("t1d1"));



