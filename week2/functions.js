/* 
* Functions
*/

// Function declaration
console.log(sayHi());
function sayHi() {
    console.log("Hi!");
}

sayHi();

// Function expression
// console.log(sayHi2());
const sayHi2 = function () {
    console.log("Say hi!");
}

// functie maken die we niet moeten declareren
// createHelloWorld(function () {
//     console.log("Hello World");
// });

// met callback
const workerFunction = function(callback) {
    callback();
}

workerFunction(function () {
    console.log("Hello World");
});

const SayHi3 = function sayHi3(){
    console.log("Hi");
}


// arrow function
const helloWorld2 = () => {
    return "Hello World!";
}

const helloWorld3 = () =>  "Hello World!";

const helloWorldObject = () => ({firstName: "Hello", lastName: "World!"});

// object destructuring bij functie

const sum = ({x = 0,y = 0}) => {
    return x + y;
} 

const sum2 = function ({x = 0,y = 0}) {
    return x + y;
} 


console.log(sum({x: 5, y: 6}));
console.log(sum2({x: 6}));