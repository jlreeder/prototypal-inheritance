const Book = require("./book.js");
const KidsBook = require("./kidsBook.js");

const mockingbird = new Book("To Kill a Mockingbird", "Harper Lee");
// mockingbird.turnPage();

let that = this;
Function.prototype.inherits = function(SuperClass) {
  let Surrogate = function () {};
  Surrogate.prototype = SuperClass.prototype;
  that.prototype = new Surrogate();
  that.prototype.constructor = that;
  // debugger;
};

KidsBook.inherits(Book);

const caterpillar = new KidsBook("The Very Hungry Caterpillar",
                                 "Eric Carle"
);

caterpillar.showPicture();
caterpillar.turnPage();
