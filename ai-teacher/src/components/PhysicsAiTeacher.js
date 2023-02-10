import React, {useState} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import img from './images/AI k12.png.jpg';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';

function PhysicsAiTeacher() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/Physicsai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: message }),
        })
            .then(res => res.text())
            .then(data => setResponse(data));
    };
    return (
        <MDBRow>
            <Navbar/>
            <div
                className='p-5 text-center bg-image'
                style={{backgroundImage: `url('${img}')`, height: '500px'}}
            >
                <div className='mask' style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>Physics AI Teacher</h1>
                        </div>
                    </div>
                </div>
            </div>
            <MDBCol sm='6'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Type your questions:</MDBCardTitle>
                        <form onSubmit={handleSubmit}>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="message"></label> <br/>
                                    <textarea id="message"
                                              value={message}
                                              onChange={(e) => setMessage(e.target.value)}
                                              className="form-control border border-primary h-100"
                                    ></textarea>
                                </div>
                            </form>
                            <MDBCardText><br/>
                                Bring your questions to the AI teacher and get the answers.
                            </MDBCardText>
                            <button type="submit" className="btn btn-primary">Send</button>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol sm='6'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Teacher response : </MDBCardTitle>
                        <div className='d-flex justify-content-center align-items-center h-100' style={{
                            fontSize: '1.5rem',
                            textAlign: 'center',
                            backgroundColor: 'aquamarine',
                            padding: '10px',
                            boxShadow: '10px 10px 8px #888888'
                        }}>
                            {response}
                        </div>
                        <MDBCardText><br/>
                            Hint: you can ask for extra explanations.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <Footer/>
        </MDBRow>
    );

    // <div>
    //     <Navbar />
    //     <div
    //         className='p-5 text-center bg-image'
    //         style={{ backgroundImage: `url('${img}')`, height: '500px' }}
    //     >
    //         <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
    //             <div className='d-flex justify-content-center align-items-center h-100'>
    //                 <div className='text-white'>
    //                     <h1 className='mb-3'>Physics AI Teacher</h1>
    //                     <form onSubmit={handleSubmit}>
    //                         <div className="card mx-auto my-5" style={{width: "50rem"}}>
    //                             <div className="card-body">
    //                                 <form>
    //                                     <div className="form-group">
    //                                         <label htmlFor="message"></label> <br/>
    //                                         <textarea
    //                                             id="message"
    //                                             value={message}
    //                                             onChange={(e) => setMessage(e.target.value)}
    //                                             className="form-control border border-primary h-100"
    //                                         ></textarea>
    //                                     </div>
    //                                 </form>
    //                             </div>
    //                         </div>
    //
    //                         <button type="submit" className="btn btn-primary">Send</button>
    //                     </form>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <br/>
    //     <h1 className='d-flex justify-content-center align-items-center h-100' style={{fontSize: '2rem', textAlign: 'center', backgroundColor: 'gray', padding: '20px', boxShadow: '4px 4px 8px #888888'}}>
    //         Response from the Physics Teacher :
    //     </h1>
    //     <div className='d-flex justify-content-center align-items-center h-100' style={{fontSize: '2rem', textAlign: 'center', backgroundColor: 'gray', padding: '20px', boxShadow: '4px 4px 8px #888888'}}>
    //         {response}
    //     </div>
    //     <Footer />
    // </div>
    // );
}

export default PhysicsAiTeacher;