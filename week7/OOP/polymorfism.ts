class Person {
  firstName: string;
  lastName: string;

  constructor(firstName : string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.firstName
  }
}

class Student extends Person {
}

const printName = ( person ) => {
  return person.getFullName();
}

const rhanna = new Person("Rhanna", "Spearfield");
const emiel = new Student("Emiel", "Dujardin");
const jannes = {
  firstName: "Jannes",
  lastName: "Rogiers",
  getFullName: () => null
}
console.log(printName(rhanna));
console.log(printName(emiel));
console.log(printName(jannes));