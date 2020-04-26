import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    useParams
} from "react-router-dom";
import {Card, Button, Container} from 'react-bootstrap';
import { bookService } from '../services/BookService';

const BookDetailsView = () => {
    let {id} = useParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const findBook = () => {
            bookService.findBookByID(id)
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
                    <a href={'/books/edit/'+ book.id}><Button variant="dark" style={{float:'right', marginBottom:'20px'}}>Edit</Button></a>{' '}
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