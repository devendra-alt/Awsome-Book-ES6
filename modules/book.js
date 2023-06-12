export default class Book {
  constructor() {
    // book list
    this.bookList = this.bookInit();
    this.bookCounter = this.bookList.length;
    // html element refrence
    this.titleField = document.querySelector('#book-title');
    this.authorField = document.querySelector('#book-author');
    this.bookListEl = document.querySelector('#book-list');
    this.addBtnEl = document.querySelector('#addBtn');
  }

  add() {
    this.addBtnEl.addEventListener('click', (event) => {
      event.preventDefault();

      if (this.bookList.length === 0) this.bookCounter = 0;

      const book = {
        id: (this.bookCounter += 1),
        title: this.titleField.value,
        author: this.authorField.value,
      };

      this.titleField.value = '';
      this.authorField.value = '';
      this.bookList.push(book);
      this.setBookList(this.bookList);
      this.bookListUI();
    });
  }

  remove(bookRef) {
    const bookRefIdNumber = parseInt(bookRef, 10);
    const updatedBookList = this.bookList.filter(
      (book) => book.id !== bookRefIdNumber,
    );
    this.setBookList(updatedBookList);
    this.bookList = updatedBookList;
  }

  bookInit() {
    if (localStorage.getItem('books')) {
      return this.getBookList();
    }
    return [];
  }

  bookListUI() {
    this.bookListEl.innerHTML = '';
    this.bookList = this.bookInit();
    this.bookList.forEach((book) => {
      const bookItemEl = document.createElement('li');
      const bookDetailsEl = document.createElement('p');
      bookDetailsEl.textContent = `"${book.title}" by ${book.author}`;

      const removeBtnEl = document.createElement('button');
      removeBtnEl.classList.add('remove-btn');
      removeBtnEl.id = book.id;
      removeBtnEl.textContent = 'Remove';
      removeBtnEl.addEventListener('click', () => {
        this.remove(removeBtnEl.id);
        this.bookListUI();
      });

      bookItemEl.appendChild(bookDetailsEl);
      bookItemEl.appendChild(removeBtnEl);

      this.bookListEl.appendChild(bookItemEl);
    });
  }

  getBookList = () => JSON.parse(localStorage.getItem('books'));

  setBookList = (books) => localStorage.setItem('books', JSON.stringify(books));
}
