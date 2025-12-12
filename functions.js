function myName(){
    console.log("hello sir");
}
//myName()

function addTwo (number1,number2){
    let result=number1+number2
    return result

}
const result = addTwo(3,5)
//console.log(result);
//addTwo(2,3)//arguments pass in function


function user1(name){
    return `${name} just loggedIn`
}

//console.log(user("adi"))

function calculatePrice(...num1){         //rest operator
    return num1

}

//console.log(calculatePrice(100,200,300,400))


const user = {
    name:"adi",
    prime:123

}

function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and id number is ${anyobject.prime}`);
}

handleObject(user)


const myArr = [100,300,299]

function returnValue(getArray){
    return getArray[1]

}

console.log(returnValue(myArr));