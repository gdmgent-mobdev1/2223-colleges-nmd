"use strict";
function addExplicit(a, b = 2) {
    return a + b;
}
addExplicit(3, 4);
addExplicit(3);
function sumVariadicSafe(...numbers) {
    // let sum = 0;
    // for(let index = 0; index < numbers.length; index++){
    //     sum += numbers[index];
    // }
    // return sum;
    return numbers.reduce((total, n) => total + n, 0);
}
sumVariadicSafe(1, 2, 3); // evaluates to 6
const returnParameter = (waarde) => {
    return waarde;
};
const result = returnParameter("a");
const result2 = returnParameter(1);
let reserve = (from, toOrDestination, destination) => {
    // schrijf hier de code om dit uit te voeren
    // je moet eerst een onderscheid maken tussen een retour of een enkele reis
};
function call(f, ...args) {
    return f(...args);
}
function fill(length, value) {
    return Array.from({ length }, () => value);
}
call(fill, 10, "a"); // evaluates to an array of 10 'a's
//# sourceMappingURL=functions.js.map