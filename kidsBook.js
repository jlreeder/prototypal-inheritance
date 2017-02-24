function KidsBook(title, author) {
  this.title = title;
  this.author = author;
}

KidsBook.prototype.showPicture = function() {
  console.log(`Picture shown from ${this.title}.`);
};

module.exports = KidsBook;
