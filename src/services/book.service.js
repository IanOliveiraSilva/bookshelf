const { BooksRepository } = require("../repositories/book.repository");
const bookRepository = new BooksRepository();

class Booksservices {
    async addBook({
        name,
        description,
        author,
        year,
        publisher,
        image
    }) {
        const book = await bookRepository.addBook({
            name,
            description,
            author,
            year,
            publisher,
            image
        });
        return {
            message: book
        };

    }

    async getBooks({}){
        const books = await bookRepository.getBooks({});

        return books.rows
    }

    async getAddedBookById({id}){
        const books = await bookRepository.getAddedBookById({id});

        return books.rows
    }
}

module.exports = { Booksservices };