"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, genre, author, read, readDate) {
        if (read === void 0) { read = false; }
        if (readDate === void 0) { readDate = null; }
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }
    return Book;
}());
exports.Book = Book;
