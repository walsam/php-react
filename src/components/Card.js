import React, { Component } from 'react';
import {Button, Card, Container} from "react-bootstrap";


const CardBook = ({book}) => {
        return (
            <Card style = {styles.Card}>
                <Card.Header style ={styles.CardHeader}>
                    <a href={'/books/'+ book.id}>{book.title}</a>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {book.summary}
                    </Card.Text>
                    <a href={'/books/edit/'+ book.id}><Button variant="dark" style={{float:'right', marginBottom:'20px'}}>Edit</Button></a>{' '}
                </Card.Body>
            </Card>
        );
}

const styles = {
    CardHeader: {
        backgroundColor: 'rgb(211,211,211)',
    },
    Card: {
        width: '30%', marginTop: '4%', marginLeft: '2%'
    }
};

export default CardBook;