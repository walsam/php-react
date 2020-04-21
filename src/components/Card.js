import React, { Component } from 'react';
import * as rbs from 'react-bootstrap';
import {Card} from "react-bootstrap";

const CardBook = (props) => {
        return (
            <Card style = {styles.Card}>
                <Card.Header style ={styles.CardHeader}><a href="{#}">{props.title}</a>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {props.description}
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