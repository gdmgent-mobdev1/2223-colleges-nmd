// let obj: object = {
//     property1: "value"
// }
// obj.property1 // Error TS2339: Property 'property' does not exist on type 'object'.

let obj1 = {
    property1: "value"
}
obj1.property1 // string


let c: {
    firstName: string,
    lastName: string
  } = {
    firstName: 'Jannes',
    lastName: 'Lambrecht'
  }
  class Person {
    constructor(
      public firstName: string, // public is shorthand for this.firstName = firstName
      public lastName: string
    ) {}
  }
  c = new Person('Leonie', 'Vermeersch') // OK

  let a: {
    b: number, // every object needs to have this property
    c?: string, // every object might have this property, but it is optional
    [key: number]: boolean // every object can have a number of extra numeric properties that are boolean
  }
  
  a = {b: 1};
  a = {b: 1, c: undefined};
  a = {b: 1, c: 'd'};
  a = {b: 1, 10: true};
  a = {b: 1, 10: true, 20: false};
  // a = {10: true}; // Error TS2741: Property 'b' is missing in type '{10: true}'.
  // a = {b: 1, 33: 'red'}; // Error TS2741: Type 'string' is not assignable to type 'boolean'

  let user: {
    readonly totalDiscount: number;
  } = {
    totalDiscount: 350
  }

  // user.totalDiscount = 600000;



  
  
  
