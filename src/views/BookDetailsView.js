import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    useParams
} from "react-router-dom";
import {Card, Button, Container} from 'react-bootstrap';
import { bookService } from '../services/BookService';

const BookDetailsView = () => {
    let {isbn} = useParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const findBook = () => {
            bookService.findBookByIsbn(isbn)
                .then(function(response){
                    setBooks(response.data);
                });
        };
        findBook();
    },[]);

    return (
        <div className="col">
            {books.map(book =>
                <Container style={{marginTop: '20px'}}>
                    <Button variant="dark" style={{float:'right', marginBottom:'20px'}}>Edit</Button>{' '}
                    <Card border="dark" style={{ width: '70rem'}}>
                        <Card.Body>
                            <Card.Title><b>{book.title}</b>( {book.publisher}{book.publicationDate} )</Card.Title>
                            <Card.Text>
                                {book.summary}
                            </Card.Text>
                            <Card.Footer>
                                <p>Language : {book.language}</p>
                                <p>{book.author}</p>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Container>)}
        </div>
    );
}

export default BookDetailsView;