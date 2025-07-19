//Primitive - call by value 

// 7 types : String, Number, Boolean, Null, Undefined, BigInt, Symbol

const score = 100
const scoreValue = 100.3


const isLogged = false
const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false

const bigNumber = 3456789n//typeof (undefined)

//Non - Primitive (reference type)
//Array, Objects, Functions

const hero = ["adi", "avi"]

let obj = {
    name:"adi",
    age:18,
}

const myFunction = function(){
    console.log("namaste adi sir");
}

