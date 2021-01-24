const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => Number(num));
 
const T = input.shift();
 
for (let i = 0; i < T; i++) {
const k = input.shift();
const b = input.shift();
const arr = [];
 
for (let i = 0; i <= k; i++) {
    arr.push([1]);
    for (let j = 1; j < b; j++) {
        if (i === 0) {
            arr[i].push(j + 1);
        } else {
            arr[i].push(arr[i][j - 1] + arr[i - 1][j]);
        }
    }
}
 
const f = k;
const r = b - 1;
console.log(arr[f][r]);
}