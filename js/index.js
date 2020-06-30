let myLibrary = [];

function Book(author, title, noPages, read) {
  this.author = author;
  this.title = title;
  this.noPages = noPages;
  this.read = read;
}

function addBookToLibrary() {
  const author = document.getElementById("book-author");
  const title = document.getElementById("book-title");
  const noPages = document.getElementById("book-no-pages");
  const read = document.getElementById("book-read");

  const book = new Book(author, title, noPages, read);

  myLibrary.push(book);

  render();
  console.log("added");
}

function render() {
  let booksContainer = document.getElementById("books-container");

  myLibrary.forEach(book => {

    booksContainer.innerHTML = book;
  });
}

window.onload = function() {
  render();
}