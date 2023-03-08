import React from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";

const Search = () => {
    return (
       
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" style={{
                    backgroundColor: 'white', borderRight: 'none', padding: '10px'
                }}><BsSearch></BsSearch></InputGroup.Text>
                <Form.Control
                    placeholder="Search high-resolution images"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    style={{
                        borderLeft: 'none',
                        padding: '13px',
                        outline:'none'
                    }}
                />
            </InputGroup>
       
    )
}

export default Search