import React from 'react';
import CardBook from "./Card";
import { Container, Button} from 'react-bootstrap';
import SearchBar from "./Search";


const Body = () => {
    return (
        <body>
        <SearchBar/>
        <Container fluid>
            <Button variant="primary" size="sm">Add Book</Button>{' '}
            <hr></hr>
            <Container style={styles.containerFlex} >
                <CardBook title= "Book 1" description ="This is a description"/>
                <CardBook title= "Book 2" description ="This is a description"/>
                <CardBook title= "Book 3" description ="This is a description"/>
                <CardBook title= "Book 4" description ="This is a description"/>
                <CardBook title= "Book 5" description ="This is a description"/>
                <CardBook title= "Book 6" description ="This is a description"/>
                <CardBook title= "Book 7" description ="This is a description"/>
                <CardBook title= "Book 8" description ="This is a description"/>
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
