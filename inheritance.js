const Book = require("./book.js");
const KidsBook = require("./kidsBook.js");
const inherits = require("./surrogate.js");

KidsBook.inherits(Book);

const mockingbird = new Book("To Kill a Mockingbird", "Harper Lee");
const caterpillar = new KidsBook("The Very Hungry Caterpillar", "Eric Carle");

mockingbird.turnPage();
caterpillar.showPicture();
caterpillar.turnPage();
