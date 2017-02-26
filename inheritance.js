function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.turnPage = function() {
    console.log(`Page has been turned in ${this.title}.`);
};

const mockingbird = new Book("To Kill a Mockingbird", "Harper Lee");
// mockingbird.turnPage();

Function.prototype.inherits = function(SuperClass) {
  function Surrogate () {}
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
  // debugger;
};

function KidsBook(title, author) {
    this.title = title;
    this.author = author;
}

KidsBook.inherits(Book);

KidsBook.prototype.showPicture = function() {
    console.log(`Picture shown from ${this.title}.`);
};

const caterpillar = new KidsBook("The Very Hungry Caterpillar",
                                 "Eric Carle"
);

caterpillar.showPicture();
caterpillar.turnPage();
