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

function removeBookFromLibrary(idx) {
  const removeBook = confirm("Are you sure?");

  if(removeBook) {
    const firstPart = myLibrary.slice(0, idx);
    const secondPart = myLibrary.slice(idx + 1, myLibrary.length);

    myLibrary = firstPart.concat(secondPart);

    render();
  }
}

function cleanForm() {
  document.getElementById("book-author").value = "";
  document.getElementById("book-title").value = "";
  document.getElementById("book-no-pages").value = "";
  document.getElementById("book-read").value = "";
}

function render() {
  let booksContainer = document.getElementById("books-container");
  booksContainer.innerHTML = "";
  myLibrary.forEach((book, idx) => {
  let card = document.createElement('div');
  const read = book.read == "on" ? "Yes" : "No";
  const bookClass = book.read == "on" ? "btn btn-success" : "btn btn-danger";

  card.id = `book-${idx}`;
  card.className = "card mt-3 mb-3 col-sm-12 col-md-3";
  card.innerHTML = `<div class='card-body'><h5 class='card-title'>${book.title}</h5> <p class="card-text">Written by: ${book.author}</p>
  <p class="card-text">Pages: ${book.noPages}</p>
  <p class="card-text">Read: <button class="${bookClass}" onclick="changeReadStatus(this, ${idx})">${read}</button></p>
  <div class="btn btn-danger" onclick="removeBookFromLibrary(${idx})" data-confirm="Are you sure?">Remove</div>
  </div>`;
  booksContainer.appendChild(card);
  });
}

function changeReadStatus(el, idx) {
  let book = myLibrary[idx];

  book.read = book.read == "on" ? "off" : "on";
  const bookClass = book.read == "on" ? "btn btn-success" : "btn btn-danger";
  const buttonContent = book.read == "on" ? "Yes" : "No";
  

  el.className = bookClass;
  el.innerHTML = buttonContent;
}

window.onload = function() {
  render();
}