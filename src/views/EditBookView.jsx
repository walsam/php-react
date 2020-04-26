import React,{useState,useEffect} from 'react';
import {Container,Form, Button} from 'react-bootstrap';
import { bookService } from '../services/BookService';
import {useHistory, useParams} from "react-router-dom";


const EditBookView = () => {

    let {id} = useParams();
    const [books, setBooks] = useState([]);
    let history = useHistory();

    const changeValue = ({target}) => {
        let newBook = books ;
        newBook[target.name] = target.value;
        setBooks(newBook);
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(JSON.stringify(books));
        bookService.updateBook(books)
            .then(respons => {
                history.push('/');
            })
            .catch(error => {console.error(error)})
    }

    useEffect(() => {
        const findBook = () => {
            bookService.findBookByID(id)
                .then(function(response){
                    setBooks(response.data);
                });
        };
        findBook();
    },[id]);

    return (
        <div className="col">
            {books.map(book =>
                <Container style={{marginTop: '20px'}} key= {book.id}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group >
                            <Form.Label>Book Title</Form.Label>
                            <Form.Control name="title" type="text" placeholder=" Title" value={book.title} onChange={changeValue}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Book Author</Form.Label>
                            <Form.Control name="author" type="text" placeholder=" Author" value={book.author} onChange={changeValue}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Book Publisher</Form.Label>
                            <Form.Control name="publisher" type="text" placeholder=" Publisher" value={book.publisher} onChange={changeValue}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Number of Pages</Form.Label>
                            <Form.Control name="pages" type="text" placeholder=" Number of Pages" value={book.numberOfPages} onChange={changeValue}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Book Language</Form.Label>
                            <Form.Control name="language" type="text" placeholder=" Language " value={book.language} onChange={changeValue}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Book summary</Form.Label>
                            <Form.Control name="summary" as="textarea" rows="3" placeholder="Summary" value={book.summary} onChange={changeValue}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>)}
        </div>
    );
}

export default EditBookView;