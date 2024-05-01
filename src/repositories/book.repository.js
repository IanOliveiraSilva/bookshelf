const db = require("../config/db");

class BooksRepository {
  async addBook({
    name,
    description,
    author,
    year,
    publisher,
    image
  }) {
    const { rows: [existingBook], } = await db.query(
      `SELECT * FROM books WHERE name = $1 AND author = $2 AND publisher = $3`,
      [name, author, publisher]
    );

    if (existingBook) {
      return 'Este livro já está no banco de dados.';
    }

    const { rows: [book], } = await db.query(
      `INSERT INTO books( name, description, author, year, publisher, image) 
        VALUES ($1, $2, $3, $4, $5, $6) 
        RETURNING *`,
      [
        name,
        description,
        author,
        year,
        publisher,
        image
      ]
    );

    return book;
  }

  async getBooks({ }) {
    const book = await db.query(
      `SELECT id, image
       FROM books`
    );

    return book;
  }

  async getAddedBookById({ id }){
    const book = await db.query(
      `SELECT *
       FROM books WHERE id = $1`,
       [ id ]
    );

    return book;
  }

}

module.exports = { BooksRepository };