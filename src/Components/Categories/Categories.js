import React from 'react';
import { NavLink } from 'react-bootstrap';
import './categories.css';


const Categories = () => {
    return (
        <div className='d-flex pb-3 px-3' style={{ position: ' fixed', top: '80px', left: '0', zIndex: '999', width: '100%', backgroundColor: 'white', }} >
            <div className='d-flex align-items-center'>
                <NavLink className='navlink  me-3'>Editorial</NavLink>
                <span style={{
                    backgroundColor: '#d1d1d1',
                    height: ' 32px',
                    width: ' 1px'
                }}></span>
            </div>
            <div className='d-flex align-items-center ' style={{ overflowX: 'auto' }} >
                <ul className='categories_list  list-unstyled d-flex '>
                    <li> <NavLink className='navlink ms-3  '>wallpapers</NavLink></li>

                    <li> <NavLink className='navlink ms-3'>3D Renders</NavLink></li>

                    <li> <NavLink className='navlink ms-3'>Travel</NavLink></li>

                    <li><NavLink className='navlink ms-3'>Nature</NavLink></li>

                    <li> <NavLink className='navlink ms-3 '>Street Photos</NavLink></li>

                    <li> <NavLink className='navlink ms-3'>Experimental</NavLink></li>

                    <li>  <NavLink className='navlink ms-3'>Textures & Patterns</NavLink></li>

                    <li>  <NavLink className='navlink ms-3'>Animals</NavLink></li>

                    <li>  <NavLink className='navlink ms-3'>Architecture</NavLink></li>

                    <li> <NavLink className='navlink ms-3'>Fashion & Beauty</NavLink></li>

                    <li> <NavLink className='navlink ms-3'>Film</NavLink></li>

                    <li> <NavLink className='navlink ms-3'>Food & Drinks</NavLink></li>

                    <li> <NavLink className='navlink ms-3'>Artistic</NavLink></li>

                    <li>  <NavLink className='navlink ms-3'>Aesthetics</NavLink></li>

                    <li>  <NavLink className='navlink ms-3'>People</NavLink></li>

                    <li> <NavLink className='navlink ms-3'>Business and work</NavLink></li>

                    <li> <NavLink className='navlink ms-3'>Health</NavLink></li>
                </ul>
            </div>
            {/* <HorizontalScroll>
                {category.map((item, index) => (
                    <NavLink key={index}>{item}</NavLink>
                ))}
            </HorizontalScroll> */}
        </div>
    )
}

export default Categories