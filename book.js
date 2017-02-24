function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.turnPage = function() {
  console.log(`Page has been turned in ${this.title}.`);
};

module.exports = Book;
