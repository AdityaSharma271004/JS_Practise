const name = "adi"
const sirName = "sir"
console.log(name + sirName);//

console.log(`hello my name is ${name + sirName}`);//string interpolation

const game = new String('aditya')
console.log(game);

// console.log(game[3]);
// console.log(game.length)
// console.log(game.toLowerCase());
// console.log(game.toUpperCase());
// console.log(game.charAt('4'));
// console.log(game.indexOf('t'));

const newString = game.substring(0,4)
// console.log(newString);


const String_1 = game.slice(-4,4)
console.log(String_1);

const newString1 = "   adi   "
console.log(newString1);
console.log(newString1.trim());

const gameName = "adi-sir-01"
console.log(gameName.split('-'));



