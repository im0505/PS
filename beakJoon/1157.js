var input = require("fs")
  .readFileSync("./input.txt")
  .toString();
var Alphabet = [];
for (i = 0; i < 26; i++) {
  Alphabet[i] = 0;
}
for (i = 0; i < input.length; i++) {
  var Code = input.charCodeAt(i);
  Code >= 97 ? (Code -= 32) : (Code = Code);
  Alphabet[Code - 65] += 1;
}
var Max = Alphabet.reduce(function(prev, curr) {
  return prev > curr ? prev : curr;
});
if (Alphabet.indexOf(Max) != Alphabet.lastIndexOf(Max)) {
  console.log("?");
} else {
  console.log(String.fromCharCode(Alphabet.indexOf(Max) + 65));
}
console.log(Alphabet);
