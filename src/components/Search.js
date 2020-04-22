import React, {useState} from "react";
import { InputGroup, FormControl, Button,  Form} from 'react-bootstrap';

const SearchBar = ({onSearching}) => {
    const [searchValue, setSearchValue] = useState('');

    const changeTitle = (event) => {
        setSearchValue(event.target.value);
    }

    const searchBook = () => {
        onSearching(searchValue);
    }
    return (
        <div style = {{ marginTop: '50px'}}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Book Title" aria-label="Book Title" aria-describedby="button-addon2" value={searchValue} onChange={changeTitle}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={searchBook}>Search</button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;