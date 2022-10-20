"use strict";
// let obj: object = {
//     property1: "value"
// }
// obj.property1 // Error TS2339: Property 'property' does not exist on type 'object'.
let obj1 = {
    property1: "value"
};
obj1.property1; // string
let c = {
    firstName: 'Jannes',
    lastName: 'Lambrecht'
};
class Person {
    constructor(firstName, // public is shorthand for this.firstName = firstName
    lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
c = new Person('Leonie', 'Vermeersch'); // OK
let a;
a = { b: 1 };
a = { b: 1, c: undefined };
a = { b: 1, c: 'd' };
a = { b: 1, 10: true };
a = { b: 1, 10: true, 20: false };
// a = {10: true}; // Error TS2741: Property 'b' is missing in type '{10: true}'.
// a = {b: 1, 33: 'red'}; // Error TS2741: Type 'string' is not assignable to type 'boolean'
let user = {
    totalDiscount: 350
};
// user.totalDiscount = 600000;
//# sourceMappingURL=objects.js.map