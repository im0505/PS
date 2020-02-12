const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const b1 = BigInt(input[0])
const b2 = BigInt(input[1])
console.log((b1 +b2).toString());