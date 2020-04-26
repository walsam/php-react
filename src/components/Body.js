import React, { useState } from 'react';
import CardBook from "./Card";
import {Container, Button, Col} from 'react-bootstrap';
import SearchBar from "./Search";


const Body = ({books, onSearch}) => {


    return (
        <body>
        <SearchBar onSearching={onSearch}/>
        <Container fluid>
            <a href="/books/new"><Button variant="primary" size="sm">Add Book</Button></a>{' '}
            <hr></hr>
            <Container style={styles.containerFlex} >
                {
                    books.map((book) => <CardBook  key={book.id} book={book}/>)
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
