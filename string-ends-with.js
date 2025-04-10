function solution(str, ending) {
  return str.endsWith(ending); 
}


console.log(solution("abcde", "cde"), true);
console.log(solution("abcde", "abc"), false);
console.log(solution("jail", "il"), true);
console.log(solution("mantecada", "ada"), false);
