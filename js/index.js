function Book(author, title, noPages, read) {
  this.author = author;
  this.title = title;
  this.noPages = noPages;
  this.read = read;
}

let myLibrary = [];

function cleanForm() {
  document.getElementById('book-author').value = '';
  document.getElementById('book-title').value = '';
  document.getElementById('book-no-pages').value = '';
  document.getElementById('book-read').checked = false;
}

function render() {
  myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  const booksContainer = document.getElementById('books-container');
  booksContainer.innerHTML = '';
  myLibrary.forEach((book, idx) => {
    const card = document.createElement('div');
    const read = book.read ? 'Yes' : 'No';
    const bookClass = book.read ? 'btn btn-success' : 'btn btn-danger';

    card.id = `book-${idx}`;
    card.className = 'card mt-3 mb-3 col-xs-12 col-sm-12 col-md-6 col-lg-3';
    card.innerHTML = `<div class='card-body'><h5 class='card-title'>${book.title}</h5> <p class="card-text"><span class="font-weight-bold text-secondary">Written by:</span> ${book.author}</p>
  <p class="card-text"><span class="font-weight-bold text-secondary">Pages:</span> ${book.noPages}</p>
  <p class="card-text"><span class="font-weight-bold text-secondary">Read:</span> <button class="${bookClass}" onclick="changeReadStatus(this, ${idx})">${read}</button></p>
  <div class="btn btn-danger" onclick="removeBookFromLibrary(${idx})" data-toggle="confirmation">Remove</div>
  </div>`;
    booksContainer.appendChild(card);
  });
}

function addBookToLibrary() { // eslint-disable-line no-unused-vars
  const author = document.getElementById('book-author').value;
  const title = document.getElementById('book-title').value;
  const noPages = document.getElementById('book-no-pages').value;
  const read = document.getElementById('book-read').checked;

  const book = new Book(author, title, noPages, read);

  myLibrary.push(book);
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));

  cleanForm();
  render();
}

function removeBookFromLibrary(idx) { // eslint-disable-line no-unused-vars
  const removeBook = window.confirm('Are you sure?'); // eslint-disable-line no-alert

  if (removeBook) {
    const firstPart = myLibrary.slice(0, idx);
    const secondPart = myLibrary.slice(idx + 1, myLibrary.length);

    myLibrary = firstPart.concat(secondPart);
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));

    render();
  }
}

function changeReadStatus(el, idx) { // eslint-disable-line no-unused-vars
  const book = myLibrary[idx];

  book.read = !book.read;
  const bookClass = book.read ? 'btn btn-success' : 'btn btn-danger';
  const buttonContent = book.read ? 'Yes' : 'No';

  el.className = bookClass;
  el.innerHTML = buttonContent;
}

window.onload = function () { // eslint-disable-line func-names
  render();
};