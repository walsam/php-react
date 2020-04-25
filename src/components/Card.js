import React, { Component } from 'react';
import {Card} from "react-bootstrap";


const CardBook = (props) => {
        return (
            <Card style = {styles.Card}>
                <Card.Header style ={styles.CardHeader}><a href="{#}">{props.book.title}</a>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {props.book.summary}
                    </Card.Text>
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