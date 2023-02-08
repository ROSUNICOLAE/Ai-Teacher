import React, { useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput
} from 'mdb-react-ui-kit';

function SignUp() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [scrollableModal, setScrollableModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/students/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, username, email, })
        });
        console.log(response);
    };

    return (
        <div>
            <Navbar />
            <MDBBtn onClick={() => setScrollableModal(!scrollableModal)}>LAUNCH DEMO MODAL</MDBBtn>
            <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
                <MDBModalDialog scrollable>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Modal title</MDBModalTitle>
                            <MDBBtn
                                className='btn-close'
                                color='none'
                                onClick={() => setScrollableModal(!scrollableModal)}
                            ></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form onSubmit={handleSubmit}>
                                <MDBInput label='Name input' id='name' type='text' value={name} onChange={e => setName(e.target.value)} />
                                <MDBInput label='Username input' id='username' type='text' value={username} onChange={e => setUsername(e.target.value)} />
                                <MDBInput label='Email input' id='email' type='email' value={email} onChange={e => setEmail(e.target.value)} />
                                <MDBBtn MDBBtn outline rounded className='mx-2' color='dark' type="submit">
                                    Create Account
                                </MDBBtn>
                            </form>


                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                                Close
                            </MDBBtn>
                            <MDBBtn>Save changes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <Footer />
        </div>
    );
}

export default SignUp;
