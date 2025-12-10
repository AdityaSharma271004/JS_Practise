const score = 100;
// console.log(score);


const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));//concise the precision value in given arguments.


const other_number  = 123.444;
// console.log(other_number.toPrecision(3));//it precise the value in given arguments.

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));


//   MATHS

console.log(Math);
console.log(Math.abs(-4));//it convert the negative to positive
console.log(Math.round(4.56));//it roundoff the values
console.log(Math.ceil(4.3));//it takes always top value
console.log(Math.floor(4.55));//it takes always lower value

console.log(Math.random());
console.log((Math.random()*10)+1);

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)+min))//important
