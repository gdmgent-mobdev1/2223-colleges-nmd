let number : number = 5;
// number = false;

let word : string = "word";

let boolean : boolean = false;

let maaktNietUit : any = "fada";

maaktNietUit = 25;

maaktNietUit += 14;

let unknown : unknown = 14;

// unknown += 14;

// grote nummers 

let bigNumber : number = 10_000;

let number3 = 3;


let array : [string, number] = ["word", 13];
// let array2 : [string, number, ...number[]] = ["word", 14,11331,31311, "213"];

let friends: [string, ...string[]] = ["Friend1", "Friend2","Friend3"];

enum Course {
  Mobdev1 = 0,
  Webdesign = 1,
  UX_UI = 2
}

enum Course {
  Tekenen
}

let myFirstCourse = Course.Tekenen;
let mySecondCourse = Course.Webdesign;
console.log(myFirstCourse);
console.log(mySecondCourse);
