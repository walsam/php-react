import React,{useState,useEffect} from 'react';
import {Container,Form, Button} from 'react-bootstrap';
import { bookService } from '../services/BookService';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";


const EditBookView = () => {

    let {id} = useParams();
    let history = useHistory();
    const [book, setBook] = useState({});


    useEffect(() => {
        const findBook = () => {
            bookService.findBookByID(id)
                .then(function(response){
                    setBook(...response.data);
                });
        };
        findBook();
    },[id]);

    const changeValue = (event) => setBook({
        ...book,
        [event.target.name]: event.target.value
    })

    const editBook = (event) => {
        event.preventDefault();
        bookService.update(book)
            .then(() => {
                history.push('/');
            })
    }

    return (
        <Container style={{marginTop: '20px'}}>
            <Form onSubmit={editBook}>
                <Form.Group >
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control name="title" type="text" placeholder=" Title" defaultValue = {book.title} onChange={changeValue}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Book Author</Form.Label>
                    <Form.Control name="author" type="text" placeholder=" Author" defaultValue={book.author} onChange={changeValue}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Book Publisher</Form.Label>
                    <Form.Control name="publisher" type="text" placeholder=" Publisher" defaultValue={book.publisher} onChange={changeValue}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Number of Pages</Form.Label>
                    <Form.Control name="pages" type="text" placeholder=" Number of Pages" defaultValue={book.numberOfPages} onChange={changeValue}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Book Language</Form.Label>
                    <Form.Control name="language" type="text" placeholder=" Language " defaultValue={book.language} onChange={changeValue}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Book summary</Form.Label>
                    <Form.Control name="summary" as="textarea" rows="3" placeholder="Summary" defaultValue={book.summary} onChange={changeValue}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default EditBookView;