import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.jpg'
import { Form, InputGroup } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
// import { NavLink } from 'react-bootstrap';
import { useState } from 'react';


const Nav_bar = ({setData}) => {
    console.log('Hello from navbar with result', setData)
    const [Value, setValue] = useState("")
    // const [results, setResults] = useState([])

    const handleKeyDown = () => {
        fetch(`https://api.unsplash.com/search/photos?client_id=LI0OM5DbQPpfJet9LsjvsA53dhBPkCgWqeXUAigNyx8&query=${Value}&per_page=300&orientation=squarish`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setData(data.results)
                console.log('Hello from fetch function', setData)
                // console.log(results)
            })
    }

    return (
        <Navbar bg="white" expand="lg" fixed="top" >
            <Container className='d-flex align-items-center' fluid >
                <Navbar.Brand href="#"><img src={logo} alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 d-flex align-items-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <div className='d-flex align-items-center'>
                            <InputGroup >
                                <InputGroup.Text id="basic-addon1" style={{
                                    backgroundColor: '#EEEEEE', borderRight: 'none', padding: '10px', borderRadius: '50px 0 0 50px'
                                }}><BsSearch></BsSearch></InputGroup.Text>
                                <Form.Control
                                    placeholder="Search high-resolution images"
                                    aria-label="Search"
                                    aria-describedby="basic-addon1"
                                    style={{
                                        width: '500px',
                                        borderLeft: 'none',
                                        padding: '8px',
                                        outline: 'none',
                                        borderRadius: '0 50px 50px 0',
                                        backgroundColor: '#EEEEEE'
                                    }}

                                    value={Value} onChange={(e) => {
                                        setValue
                                            (e.target.value)
                                    }}
                                    onKeyDown={handleKeyDown}

                                />
                            </InputGroup>
                            <Nav.Link href="#action1">Explore</Nav.Link>
                            <Nav.Link href="#action2">Advertise</Nav.Link>
                            <Nav.Link href="#action2">Unsplash+</Nav.Link>
                            <span style={{
                                backgroundColor: '#d1d1d1',
                                height: ' 32px',
                                width: ' 1px'
                            }}></span>
                            <Nav.Link href="#action2">Login</Nav.Link>
                            <Nav.Link href="#action2">Login</Nav.Link>
                            <Nav.Link href="#action2">Sign Up</Nav.Link>

                            <Button variant="outline-secondary" >Sumbit a photo</Button>
                        </div>


                    </Nav>

                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}

export default Nav_bar