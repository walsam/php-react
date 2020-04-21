import React from "react";
import { InputGroup, FormControl, Button} from 'react-bootstrap';

const SearchBar = () => {
    return (
        <div style = {{ marginTop: '50px'}}>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Book Title"
                    aria-label="Book Title"
                />
                <InputGroup.Append>
                    <Button variant="primary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
}

export default SearchBar;