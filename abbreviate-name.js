/**
* Function that converts a name into initials.
* This example only takes two words with one space in between
*/
function abbrevName(name) {
  return name.split(" ").map(n => n.charAt(0).toUpperCase()).join(".");
}

console.log(abbrevName("Sam Harris"));
