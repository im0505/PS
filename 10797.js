let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0])
let c = input[1].split(' ');
let cnt = 0;
for(v of c){
    let arr = v.split('');
    if(Number(arr[arr.length-1])===n) cnt++;
}
console.log(cnt)