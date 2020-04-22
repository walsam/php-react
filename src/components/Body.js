import React, { useState } from 'react';
import CardBook from "./Card";
import { Container, Button} from 'react-bootstrap';
import SearchBar from "./Search";


const Body = ({books, onSearch}) => {


    return (
        <body>
        <SearchBar onSearching={onSearch}/>
        <Container fluid>
            <Button variant="primary" size="sm">Add Book</Button>{' '}
            <hr></hr>
            <Container style={styles.containerFlex} >
                {
                    books.map((book, key) => <CardBook key={book.id} book={book}/>)
                }
            </Container>
        </Container>
        </body>
    )
};

const styles = {
    containerFlex: {
        display: 'flex',
        flexWrap: 'wrap',
    }
};

export default Body;
