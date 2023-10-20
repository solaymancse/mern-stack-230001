var bottle1 = 'water';
var bottle2 = 'coke';

console.log('before swap:','bottle1 =',bottle1,'bottle2 =',bottle2)

const temp = bottle1;
bottle1 = bottle2;
bottle2 = temp; 

console.log('after swap :','bottel1 =',bottle1,'bottle2',bottle2)

var a = 10;
var b = 5;

console.log('before swap: a = ',a)
console.log('before swap: b =',b)

a = a + b;
b = a - b;
a = a -b;


console.log('after swap: b is',b)
console.log('after swap: a is',a)




