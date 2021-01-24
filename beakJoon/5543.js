const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(e => Number(e));
function min(n1,n2){
    return n1>=n2 ? n2 : n1;
}
let b = min(input[0],input[1]);
b = min(b, input[2]);
let s = min(input[3],input[4])
console.log(b+s-50);