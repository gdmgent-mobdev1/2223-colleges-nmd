const numbers : string[] = ["zero","one", "two", "three", "four","five"]
const giveNumber = (number: number): string => {
  return numbers[number];
};

console.log(giveNumber(3))