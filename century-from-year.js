function century(year) {
  return (Number(year) / 100) % 1 === 0
    ? Math.floor(Number(year) / 100)
    : Math.floor(Number(year) / 100) + 1;
}

console.log("1705 ", century(1705), "should be ", 18);
console.log("1900 ", century(1900), "should be ", 19);
console.log("1600 ", century(1600), "should be ", 17);
console.log("2000 ", century(2000), "should be ", 20);
console.log("100 ", century(100), "should be ", 1);
console.log("89 ", century(89), "should be ", 1);
console.log("1 ", century(89), "should be ", 1);
