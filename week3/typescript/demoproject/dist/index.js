"use strict";
console.log('Hello World');
let number1 = 5;
let age = 15;
age = "fifteen";
// age = false; // Type 'boolean' is not assignable to type 'string | number'.ts(2322)
// type Color = 'red';
// type Color = 'blue'; // Error TS2300: Duplicate identifier 'Color'.
let a = [1, 2, 3]; // number[]
var b = ['a', 'b']; // string[]
let c = ['a']; // string[]
let d = [1, 'a']; // (string | number)[]
const e = [2, 'b']; // (string | number)[]
let f = ['red'];
f.push('blue');
// f.push(true) // Error TS2345: Argument of type 'true' is not
// assignable to parameter of type 'string'.
let g = []; // any[]
g.push(1); // number[]
g.push('red'); // (string | number)[]
let h = []; // number[]
h.push(1); // number[]
// h.push('red') // Error TS2345: Argument of type '"red"' is not assignable to parameter of type 'number'.
// function thisIsWeird(this: string){
//     console.log(this.toUpperCase());
//   }
// thisIsWeird.call(); // Uncaught TypeError: this.toUpperCase is not a function
const returnParameter = (val) => {
    return val;
};
const result = returnParameter("a");
const returnParameter1 = (val) => {
    return val;
};
const result1 = returnParameter1("a");
const result2 = returnParameter1(1);
function fill(length, value) {
    return Array.from({ length }, () => value);
}
function call(f, ...args) {
    console.log(f, args);
    return f(...args);
}
console.log(call(fill, 10, 'a')); // string[]
//# sourceMappingURL=index.js.map