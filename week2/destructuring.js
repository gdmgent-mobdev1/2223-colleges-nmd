const myArray = ["Lenevo", "Mac", "Razer"];

const [a, ...b] = myArray;

console.log(a);
console.log(b);

const me3 = { 
    name3: "Jannes", 
    age3: 27, 
    job3: "web developer" 
};
const { name3, ...rest } = me3;
console.log(name3); // will output "Jannes"
console.log(rest); // will output { age3: 27, job3: "web developer" }

const makeMe = (name, age, job, lastName) => ({ name, age, job, lastName }); // will output { name: "Jannes", age: 27, job: "web developer", lastName: "Lambrecht"}
console.log(makeMe("Jannes", 27, "web developer", "Lambrecht"));

const makeMe2 = ({ name, age, job, lastName }) => ({ name, age, job, lastName });
const newMe = makeMe2({
  name: "Jannes",
  lastName: "Lambrecht",
  job: "web developer",
  age: 27,
});
console.log(newMe); // will output { name: "Jannes", lastName: "Lambrecht", age: 27, job: "web developer"}
