const Book = require("./book.js");
const KidsBook = require("./kidsBook.js");

const mockingbird = new Book("To Kill a Mockingbird", "Harper Lee");
mockingbird.turnPage();

const caterpillar = new KidsBook("The Very Hungry Caterpillar",
                                 "Eric Carle"
);

caterpillar.showPicture();
caterpillar.turnPage();
