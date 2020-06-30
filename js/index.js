let myLibrary = [];

function Book(author, title, noPages, read) {
  this.author = author;
  this.title = title;
  this.noPages = noPages;
  this.read = read;
}

function addBookToLibrary() {
  const author = document.getElementById("book-author").value;
  const title = document.getElementById("book-title").value;
  const noPages = document.getElementById("book-no-pages").value;
  const read = document.getElementById("book-read").value;

  const book = new Book(author, title, noPages, read);

  myLibrary.push(book);
  cleanForm();
  render();
}

function cleanForm() {
  document.getElementById("book-author").value = "";
  document.getElementById("book-title").value = "";
  document.getElementById("book-no-pages").value = "";
  document.getElementById("book-read").value = "off";
}

function render() {
  let booksContainer = document.getElementById("books-container");
  booksContainer.innerHTML = "";
  myLibrary.forEach(book => {
    let card = document.createElement('div');
    card.className = "card mt-3 mb-3";
    card.innerHTML = `<div class='card-body'><h5 class='card-title'>${book.title}</h5> <p class="card-text">Written by: ${book.author}</p>
    <p class="card-text">Pages: ${book.noPages}</p>
    <p class="card-text">Read: ${book.read}</p></div>`;
    booksContainer.appendChild(card);
  });
}

window.onload = function() {
  render();
}