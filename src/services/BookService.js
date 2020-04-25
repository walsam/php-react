import axios from "axios";

class BookService {
    findBooks() {
        return axios.get('/books');
    }

    findBooksByTitle(title) {
        return axios.get(`/books?title=${title}`);
    }
    findBookByIsbn(isbn) {
        return axios.get(`/books?isbn=${isbn}`);
    }
}

export const bookService = new BookService();