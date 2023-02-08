import React, {useState} from 'react';
import {Link} from "react-router-dom";
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


function Navbar() {
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
        <nav className="navbar navbar-expand-lg bg-tertiary" style={{ backgroundColor: "mistyrose" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><i className="fas fa-home"></i>AIteacher</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/MathAi">Math</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/PhysicsAi">Physics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/InfoAi">IT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/HistoryAi">History</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About us</a>
                        </li>
                    </ul>
                                <MDBBtn onClick={() => setScrollableModal(!scrollableModal)}>SIGN UP</MDBBtn>
                    <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
                        <MDBModalDialog className="modal-dialog-centered" scrollable>
                            <MDBModalContent>
                                <MDBModalHeader>
                                    <MDBModalTitle>Create a new Student account</MDBModalTitle>
                                </MDBModalHeader>
                                <MDBModalBody>
                                    <form onSubmit={(e) => {
                                        handleSubmit(e)
                                        setScrollableModal(!scrollableModal)
                                    }}>
                                        <div>
                                            <label htmlFor="name">Name:</label>
                                            <MDBInput id='name' type='text' value={name} onChange={e => setName(e.target.value)} />
                                        </div>
                                        <div>
                                            <label htmlFor="username">Username:</label>
                                            <MDBInput id='username' type='text' value={username} onChange={e => setUsername(e.target.value)} />
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email:</label>
                                            <MDBInput id='email' type='email' value={email} onChange={e => setEmail(e.target.value)} />
                                        </div>
                                        <MDBBtn MDBBtn outline rounded className='mx-2' color='dark' type="submit">Create Account</MDBBtn>
                                    </form>

                                            </MDBModalBody>
                                            <MDBModalFooter>
                                                <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                                                    Close
                                                </MDBBtn>
                                            </MDBModalFooter>
                                        </MDBModalContent>
                                    </MDBModalDialog>
                                </MDBModal>
                        <button className="btn btn-light" type="submit">Sign In</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
