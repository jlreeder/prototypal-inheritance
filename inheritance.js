const Book = require("./book.js");
const KidsBook = require("./kidsBook.js");
const inherits = require("./surrogate.js");

KidsBook.inherits(Book);

// TODO: This code does not work if `showPicture` is defined in the KidsBook
// file. Does this mean that it has to be defined _after_ inheritance?
KidsBook.prototype.showPicture = function() {
    console.log(`Picture shown from ${this.title}.`);
};

const mockingbird = new Book("To Kill a Mockingbird", "Harper Lee");
const caterpillar = new KidsBook("The Very Hungry Caterpillar", "Eric Carle");

mockingbird.turnPage();
caterpillar.showPicture();
caterpillar.turnPage();
