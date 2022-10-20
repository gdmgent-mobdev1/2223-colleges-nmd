console.log('Hello World');
let number1: number = 5;

let age: string | number = 15;
age = "fifteen";
age = false; // Type 'boolean' is not assignable to type 'string | number'.ts(2322)

type Color = 'red';
type Color = 'blue'; // Error TS2300: Duplicate identifier 'Color'.

let a = [1, 2, 3] // number[]
var b = ['a', 'b'] // string[]
let c: string[] = ['a'] // string[]
let d = [1, 'a'] // (string | number)[]
const e = [2, 'b'] // (string | number)[]
let f = ['red']
f.push('blue')
f.push(true) // Error TS2345: Argument of type 'true' is not
// assignable to parameter of type 'string'.
let g = [] // any[]
g.push(1) // number[]
g.push('red') // (string | number)[]
let h: number[] = [] // number[]
h.push(1) // number[]
h.push('red') // Error TS2345: Argument of type '"red"' is not assignable to parameter of type 'number'.