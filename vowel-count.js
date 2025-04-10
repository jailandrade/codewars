function getCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (includes(str.charAt(i))) {
      count++;
    }
  }
  return count;
}

function includes(ch) {
  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    return true;
  } else {
    return false;
  }
}

console.log(getCount("abracadabra"));
