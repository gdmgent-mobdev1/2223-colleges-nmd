class Person {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() : string {
    return `${this.firstName} ${this.lastName}`
  };
}

class Student extends Person { 

}



const printName = ( person ) => {
  return person instanceof Person ? person.getFullName() : "No Person";
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
