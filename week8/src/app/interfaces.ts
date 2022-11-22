// class Person {
//   doWork() {
//     console.log("Working");
//   }
// }

// class Student extends Person {
//   doWork() {
//     super.doWork();
//     console.log("& doing homework.")
//   }
// }

// const rhanna = new Person();
// const emiel = new Student();

// // console.log(emiel instanceof Person); // > true

// rhanna.doWork();
// emiel.doWork();

const greet = (person: {name: string, age: number}) =>{ 
  return `Hello ${person.name}`;
}

interface Person {
  name: string;
  age: number;
}

const greet2 = (person: Person) =>{ 
  return `Hello ${person.name}`;
}

type Person_2 = {
  name: string;
  age: number;
}

const greet3 = (person: Person_2) =>{ 
  return `Hello ${person.name}`;
}

abstract class Character {
  hunger: number;
  health: number;

  abstract eat(): void;
}
interface Hero extends Character {
  heroId: number;
}

interface Enemy extends Character {
  enemyId: number;
}

class Spy implements Hero, Enemy {
  hunger: number;
  health: number;
  heroId: number;
  enemyId: number;

  eat() {
    console.log("The spy eats");
    this.hunger -= 1;
  }
}