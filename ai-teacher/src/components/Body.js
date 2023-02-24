import img from "./images/pexels-tara-winstead-8386440.jpg";

import {
    MDBBtn,
    MDBCard, MDBCol
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';



function Body()  {

    return (
        <header>

            <div
                className='p-5 text-center bg-image'
                style={{backgroundImage: `url('${img}')`, height: '680px', width: '1500px'}}
            >
                <div className='mask'>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 id= 'mainPageTitle' className='mb-3' style={{fontFamily: 'Gloria Hallelujah', fontSize: '100px'}}>AI TEACHER</h1>
                            <h4 id= 'mainPageP1'className='mb-3' style={{fontFamily: 'Gloria Hallelujah', fontSize: '30px'}}>- the future is digital -</h4>
                            <h5 id= 'mainPageP2'className='mb-3' style={{fontFamily: 'Gloria Hallelujah', fontSize: '40px'}}>start your learning NOW!</h5>
                        </div>
                    </div>
                </div>
            </div>
            </header>
    );
}
export default Body;
