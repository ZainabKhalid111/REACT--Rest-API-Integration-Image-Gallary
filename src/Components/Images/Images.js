import React from 'react';
import './Images.css';
import { NavLink } from 'react-bootstrap';

const Images = ({ Data }) => {
  console.log('hello from images', Data)
  return (

    <div className='my-3'>
      <div className="row">
        {Data.map((item, id) => {
          return (<>
            <div className="cards  g-2">
             
                <img className='images' src={item.urls.regular} alt='loading..' key={id} />
              <div className="overlay d-flex flex-column-reverse  align-items-center ">
                <h2 className="text">Click to Download</h2>
                <a href='' download>
                  <button className='btn btn-secondary  m-5  '>Download</button></a>
              </div>
      
            </div>
          </>)

        })}
      </div>
    </div>

  )
}

export default Images