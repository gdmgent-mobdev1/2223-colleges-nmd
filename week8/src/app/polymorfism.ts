class Person {
  constructor(){
  }
  presentYourself() {
    return `I'm a person`
  }
}

class Student extends Person {
  presentYourself() {
    return `${super.presentYourself()}, I'm a student.` 
  }
}

class Teacher extends Person {
  presentYourself() {
    return `${super.presentYourself()}, I'm a teacher` 
  }
}

class Coach extends Teacher {
  presentYourself() {
    return `${super.presentYourself()}, I'm a coach.` 
  }
}

class Course {
  private members : Person[];
  setMembers( members: Person[] ){
    this.members = members;
  }
  present(): void { 
    for(let member of this.members) {
      console.log(member.presentYourself());
    }
  }
}

const student1 = new Student();
const student2 = new Student();
const student3 = new Student();
const teacher = new Teacher();
const coach = new Coach();

const class1 = new Course();
class1.setMembers([ student1, student2, student3, teacher, coach] );
class1.present();
// > I'm a person, I'm a student.
// > I'm a person, I'm a student.
// > I'm a person, I'm a student.
// > I'm a person, I'm a teacher.
// > I'm a person, I'm a coach.
