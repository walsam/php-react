import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Body from './components/Body';
import { bookService } from './services/BookService';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import BookDetailsView from './views/BookDetailsView';
import CreateBookView from './views/CreateBookView';
import EditBookView from "./views/EditBookView";



function App() {

    const [books, setBooks] = useState([]);
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
        const findBooks = () => {
            bookService.findBooks()
                .then(function (response) {
                    setBooks(response.data);
                });
        };

        const findByTitle = () => {
            bookService.findBooksByTitle(searchValue)
                .then(function (response) {
                    setBooks(response.data);
                });
        };
        const searchBook = (bookName) => {
            if(searchValue.length === 0) {
                findBooks();
            } else {
                findByTitle(searchBook);
            }
        };
        searchBook();
    }, [searchValue]);


  return (

      <Router>
          <Container fluid>
              <Row>
                  <Col>
                      <Header/>
                  </Col>
              </Row>
              <Row>
                  <Col>
                      <Container>
                          <Switch>
                              <Route path="/books/new">
                                  <CreateBookView />
                              </Route>
                              <Route path="/books/edit/:id">
                                  <EditBookView />
                              </Route>
                              <Route path="/books/:id">
                                  <BookDetailsView />
                              </Route>
                              <Route path="/">
                                  <Body  books={books} onSearch={(bookName) => setSearchValue(bookName)}/>
                              </Route>
                          </Switch>
                      </Container>
                  </Col>
              </Row>
          </Container>
      </Router>
  );
}

export default App;
