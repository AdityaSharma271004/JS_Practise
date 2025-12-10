let myDate = new Date();
console.log(myDate.toString());//gives gmt time
console.log(myDate.toDateString());//gives date 
console.log(myDate.toLocaleString());//gives date and time
console.log(typeof myDate);//object

let my_date = new Date(2025,12,1);
console.log(my_date.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myTimeStamp);
