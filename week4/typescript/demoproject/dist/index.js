"use strict";
let number = 5;
// number = false;
let word = "word";
let boolean = false;
let maaktNietUit = "fada";
maaktNietUit = 25;
maaktNietUit += 14;
let unknown = 14;
// unknown += 14;
// grote nummers 
let bigNumber = 10000;
let number3 = 3;
let array = ["word", 13];
// let array2 : [string, number, ...number[]] = ["word", 14,11331,31311, "213"];
let friends = ["Friend1", "Friend2", "Friend3"];
var Course;
(function (Course) {
    Course[Course["Mobdev1"] = 0] = "Mobdev1";
    Course[Course["Webdesign"] = 1] = "Webdesign";
    Course[Course["UX_UI"] = 2] = "UX_UI";
})(Course || (Course = {}));
(function (Course) {
    Course[Course["Tekenen"] = 0] = "Tekenen";
})(Course || (Course = {}));
let myFirstCourse = Course.Tekenen;
let mySecondCourse = Course.Webdesign;
console.log(myFirstCourse);
console.log(mySecondCourse);
//# sourceMappingURL=index.js.map