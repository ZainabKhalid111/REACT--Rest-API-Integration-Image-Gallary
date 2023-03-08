import React from 'react';
import './Main.css'
import { NavLink } from 'react-bootstrap';
import Search from '../Search';

const Main = () => {
    return (
        <section id='main'>
            <div className="container-fluid main_page d-flex justify-content-center  align-items-center flex-column ">

                <div className="row pt-5" style={{ marginLeft: '260px', marginRight: '260px', }} >
                    <h1 className='fw-bold pb-3'>Unsplash</h1>
                    <p className='fw-bold' style={{ lineHeight: '1.2rem' }}>The internet’s source for visuals.</p>
                    <p className='fw-bold' style={{ lineHeight: '1rem' }}>Powered by creators everywhere.

                        .</p>

                    {/* <Form>
                        <BsSearch />
                        <Form.Control
                            type="search "
                            placeholder="Search high-resolution images"
                            className="me-2"
                            aria-label="Search"
                            style={{
                                padding: '10px'
                            }}
                        />
                    </Form> */}
                    <Search />

                    <div className=' trending d-flex align-items-center '>

                        <span className='fw-bold fw-italic  d-flex m-1'>Trending:
                        </span>

                        <NavLink className='nav_link mx-1'>flowers</NavLink>
                        <NavLink className='nav_link mx-1'>papers</NavLink>
                        <NavLink className='nav_link mx-1'>wallpapers</NavLink>
                        <NavLink className='nav_link mx-1'>happy</NavLink>
                        <NavLink className='nav_link mx-1'>love</NavLink>

                    </div>
                </div>


                <div className='row '>

                </div>

            </div>
            <div className='bottom_section pb-3'>
                <div className='row d-flex flex-row mx-1'>
                    <div className='col-4 d-flex '>Photo by  <NavLink> Shubham Dhage</NavLink></div>

                    <div className='col-4 d-flex'>Read more about the  <NavLink>Unsplash License</NavLink></div>
                    <div className='col-4 '><NavLink className='ms-5 ps-5'>All you need to create a website.</NavLink></div>
                </div>
            </div>

        </section>
    )
}

export default Main