const fs= require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map((e)=>{return parseInt(e)})
let A = input[0], B = input[1], V = input[2];
let day = (V-B-1)/(A-B)+1;
console.log(Math.floor(day));