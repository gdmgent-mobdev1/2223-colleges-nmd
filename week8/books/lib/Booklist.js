"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.Booklist = void 0;
var Book_1 = require("./Book");
var Booklist = /** @class */ (function () {
    function Booklist(booklist) {
        this.bookList = booklist;
        if (booklist[0] instanceof Book_1.Book) {
            this.currBook = 0;
        }
        if (booklist[1] instanceof Book_1.Book) {
            this.nextBook = 1;
        }
    }
    Booklist.prototype.calcUnreadBooks = function () {
        this.bookList.filter(function (book) { return !book.read; }).length;
    };
    Booklist.prototype.calcReadBooks = function () {
        this.bookList.filter(function (book) { return book.read; }).length;
    };
    Booklist.prototype.add = function (book) {
        this.bookList = __spreadArray(__spreadArray([], this.bookList, true), [book], false);
    };
    Booklist.prototype.finishCurrentBook = function () {
        this.bookList[this.currBook].read = true;
        this.bookList[this.currBook].readDate = new Date(Date.now());
        this.prevBook = this.currBook;
        this.currBook = this.nextBook;
        this.nextBook = -1;
    };
    return Booklist;
}());
exports.Booklist = Booklist;
