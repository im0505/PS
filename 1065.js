const fs = require('fs')
let input = fs.readFileSync('./input.txt')
.toString();
input = parseInt(input);
if(input<=110) {
    console.log(input);
    return;
}
let sum =99;

for(let i = 110; i <= input; i++){
    let arr = i.toString().split('').map((e)=>{return parseInt(e)})
    let gap = arr[0]-arr[1]
    for(let j = 1; j < arr.length;j++){
        if(arr[j-1]-arr[j]===gap){
            if(j+1 === arr.length){
                sum++;
            }
        }else{break;}
    }
}
console.log(sum);