type Age = number
type Password = string
type Person1 = {
  name: string,
  age: Age,
}


let age = 22;
let driver: Person1 = {
  name: 'Ansel Elgort',
  age: age
}

let age2: Age = 27;
let passenger: Person1 = {
  name: 'Lily James',
  age: age2
}


let age_extra: string | number = 15;
age_extra = "fifteen";
age_extra = 15;
// age_extra = false; // Error TS2322: Type 'boolean' is not assignable to type 'string | number'

type Cat = {name: string, purrs: boolean};
type Dog = {name: string, barks: boolean, wags: boolean};
type CatOrDogOrBoth = Cat | Dog;

// Cat
  let a1: CatOrDogOrBoth = {
  name: 'Bonkers',
  purrs: true
}
// Dog
a1 = {
  name: 'Domino',
  barks: true,
  wags: true
}
// Both
a1 = {
  name: 'Donkers',
  barks: true,
  purrs: true,
  wags: true
}


type CatAndDog = Cat & Dog;

let b: CatAndDog = {
  name: 'Domino',
  barks: true,
  purrs: true,
  wags: true
}

