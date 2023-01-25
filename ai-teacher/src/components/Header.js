import React, { useState } from 'react';
import img from './images/AI k12.png.jpg';
import {
    MDBBtn
} from 'mdb-react-ui-kit';



function Header()  {
    const [showBasic, setShowBasic] = useState(true);

    return (
        <header>

            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: `url('${img}')`, height: '500px' }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>AI TEACHER</h1>
                            <h4 className='mb-3'>The Future of Education: How AI Teachers are Transforming the Learning Experience</h4>
                            <MDBBtn tag="a" outline size="lg">
                                Start Learning now
                            </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;
