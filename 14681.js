var [x,y] = require('fs').readFileSync('./input.txt')
.toString()
.split('\n')
.map(e=>Number(e));
if(x>0){
    if(y>0)
        console.log(1);
    if(y<0)
        console.log(4);
}else{
    if(y>0)
        console.log(2);
    if(y<0)
        console.log(3);
}