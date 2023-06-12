export default class Book {
  constructor() {
    // book list
    this.bookList = this.bookInit();
    // html element refrence
    this.titleField = document.querySelector('#book-title');
    this.authorField = document.querySelector('#book-author');
    this.bookListEl = document.querySelector('#book-list');
    this.addBtnEl = document.querySelector('#addBtn');
  }

  add() {
    this.addBtnEl.addEventListener('click', (event) => {
      event.preventDefault();
      const book = {
        title: this.titleField.value,
        author: this.authorField.value,
      };
      this.titleField.value = '';
      this.authorField.value = '';
      this.bookList.push(book);
      localStorage.setItem('books', JSON.stringify(this.bookList));
      this.bookListUI();
    });
  }

  remove(bookRef) {
    this.bookList = this.bookList.filter((book) => bookRef.name !== book.name);
    localStorage.setItem('books', JSON.stringify(this.bookList));
  }

  bookInit() {
    if (localStorage.getItem('books')) {
      return JSON.parse(localStorage.getItem('books'));
    } else {
      return [];
    }
  }

  bookListUI() {
    this.bookList.forEach((book) => {
      const bookItemEl = document.createElement('li');
      const bookDetailsEl = document.createElement('p');
      bookDetailsEl.textContent = `"${book.title}" by ${book.author}`;

      const removeBtnEl = document.createElement('button');
      removeBtnEl.classList.add('remove-btn');
      removeBtnEl.textContent = 'Remove';
      removeBtnEl.addEventListener('click', () => {
        this.bookListUI();
      });

      bookItemEl.appendChild(bookDetailsEl);
      bookItemEl.appendChild(removeBtnEl);

      this.bookListEl.appendChild(bookItemEl);
    });
  }
}
