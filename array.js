const myArr = [1,2,3,4,5];
// console.log(myArr[2]);

// array methods

myArr.push(9)
console.log(myArr);
myArr.pop()
// console.log(myArr);
// console.log(myArr.includes(8));
// console.log(myArr.indexOf(4));

const newArr = myArr.join()//convert array into string
// console.log(newArr);

//slice   splice

console.log(myArr.slice(1,3));

console.log(myArr);

console.log(myArr.splice(1,3));//it manipulate the original array
console.log(myArr);



