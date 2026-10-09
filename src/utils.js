// Your code here
//export function pointsForWord(word) {
  //let points = 0;
  //for (const char of word) {
    //points += /[aeiou]/.test(char) ? 1 : 2;
  //}
  //return points;
//}


export function pointsForWord(word) {
  return [...word].reduce((points, char) => {
    if (!/[a-z]/i.test(char)) return points;
    return points + (/[aeiou]/i.test(char) ? 1 : 2);
  }, 0);
}

console.log("Testing cat :", pointsForWord("cAt"))
console.log("Testing test :", pointsForWord("test"))
console.log("Testing school :", pointsForWord("School!"))
console.log("Testing vowels :", pointsForWord("aeioU"))

