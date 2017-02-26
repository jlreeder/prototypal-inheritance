const Book = require("./book.js");

const mockingbird = new Book("To Kill a Mockingbird", "Harper Lee");

Function.prototype.inherits = function(SuperClass) {
  function Surrogate () {}
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

const KidsBook = require("./kidsBook.js");

KidsBook.inherits(Book);

KidsBook.prototype.showPicture = function() {
    console.log(`Picture shown from ${this.title}.`);
};

const caterpillar = new KidsBook("The Very Hungry Caterpillar",
                                 "Eric Carle"
);

mockingbird.turnPage();
caterpillar.showPicture();
caterpillar.turnPage();
