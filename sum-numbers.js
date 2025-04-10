function getSum(a, b) {
  if (a === b) {
    return a;
  } else {
    let c = 0;
    const max = a > b ? a : b;
    const min = a > b ? b : a;
    for (let i = min; i <= max; i++) {
      c+=i;
    }
    return c;
  }
}


console.log("suma de 0,-1", getSum(0, -1));
console.log("suma de 0,1", getSum(0, 1));
console.log("suma de 2,2", getSum(2, 2));
