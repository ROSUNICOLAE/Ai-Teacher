import React, { useState } from 'react';
import img from './images/AI k12.png.jpg';
import {
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import CountSection from "./countSection";



function Body()  {

    return (
        <header>

            <div
                className='p-5 text-center bg-image'
                style={{backgroundImage: `url('${img}')`, height: '500px'}}
            >
                <div className='mask' style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>AI TEACHER</h1>
                            <h4 className='mb-3'>The Future of Education: How AI Teachers are Transforming the Learning
                                Experience</h4>
                            <Link to="/start-learning">
                                <MDBBtn tag="a" outline size="lg">
                                    Start Learning now
                                </MDBBtn>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className='d-flex justify-content-center align-items-center h-100'>TO BE DONE</h4>
            <p>...</p><br/>
            <p>...</p><br/>
            <p>...</p><br/>
            <p>...</p><br/>
            {/*<CountSection TO DO - FIX />*/}
        </header>
    );
}
export default Body;
