class Library {
  #books = [];

  constructor(initialBooks = []) {
    // Проверка на дубликаты в начальном списке книг
    const uniqueBooks = new Set(initialBooks);
    if (uniqueBooks.size !== initialBooks.length) {
      throw new Error("Initial book list contains duplicates.");
    }
    this.#books = [...uniqueBooks];
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error(`The book "${title}" already exists in the library.`);
    }
    this.#books.push(title);
  }

  removeBook(title) {
    const index = this.#books.indexOf(title);
    if (index === -1) {
      throw new Error(`The book "${title}" is not found in the library.`);
    }
    this.#books.splice(index, 1);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

// Пример использования
const library = new Library(["1984", "To Kill a Mockingbird"]);
console.log(library.allBooks); // ["1984", "To Kill a Mockingbird"]

library.addBook("The Great Gatsby");
console.log(library.allBooks); // ["1984", "To Kill a Mockingbird", "The Great Gatsby"]

console.log(library.hasBook("1984")); // true
console.log(library.hasBook("Moby Dick")); // false

library.removeBook("1984");
console.log(library.allBooks); // ["To Kill a Mockingbird", "The Great Gatsby"]
