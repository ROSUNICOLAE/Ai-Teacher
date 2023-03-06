import img from "./images/pexels-tara-winstead-8386440.jpg";
import Cube from "./Cube";
import React from "react";

function Body()  {

    return (
        <div className="container-body">

            <div
                className='p-5 text-center bg-image'
                style={{backgroundImage: `url('${img}')`, height: '690px', width: '1500px'}}
            >
<div className="cube-container">
    <Cube />
    <h1 id= 'mainPageTitle' style={{fontFamily: 'Gloria Hallelujah', fontSize: '80px'}}>   teacher </h1>
</div>
                <div className='mask'>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h4 id= 'mainPageP1'className='mb-3' style={{fontFamily: 'Gloria Hallelujah', fontSize: '30px'}}>- the future is digital -</h4>
                            <h5 id= 'mainPageP2'className='mb-3' style={{fontFamily: 'Gloria Hallelujah', fontSize: '40px'}}>start your learning NOW!</h5>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
}
export default Body;
