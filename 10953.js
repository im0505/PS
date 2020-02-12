const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
const n = parseInt(input);

var s = 0,
i=1;
while(true){
    if(s >= n){
        s-=i;
        i-=2;
        console.log(s,i);
        break;
    }
    console.log(s,i)
    s +=i;
    i++;
}   //하다가맘