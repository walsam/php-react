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
    findBookByID(id) {
        return axios.get(`/books?id=${id}`);
    }
    save(book) {
        book.isbn = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        return axios.post('/books', book);
    }

    update(book){
        return axios.put(`/books/${book.id}`, book);
    }
}

export const bookService = new BookService();