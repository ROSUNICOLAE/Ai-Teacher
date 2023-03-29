import React, {useState,useEffect} from 'react';
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
import jwt_decode from "jwt-decode";
import Cube from "./Cube";

function Navbar() {
    const [isFixed, setIsFixed] = useState(false);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [scrollableModal, setScrollableModal] = useState(false);
    const [signInModal, setSignInModal] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));


    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0 && !isFixed) {
                setIsFixed(true);
            } else if (window.pageYOffset === 0 && isFixed) {
                setIsFixed(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isFixed]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:8080/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, username, email})
        });
    };

    // create a handlesignin function for await fetch from 'http://localhost:8080/api/auth/signin' body use username and  email
    const handleSignIn = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/api/auth/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email})
        });
        if (response.headers.get("Authorization")) {
            localStorage.setItem("token", response.headers.get("Authorization"));
            setToken(response.headers.get("Authorization"));
        }
    }

    const signOut = () => {
        localStorage.removeItem("token");
        setToken(null);
        setSignInModal(false);
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = jwt_decode(token);
            console.log(decodedToken);
            setUsername(decodedToken.sub);
        }
    }, []);

    return (
        <nav className={`navbar ${isFixed ? "fixed" : "navbar navbar-expand-lg bg-tertiary"}`} style={{ backgroundColor: "white" }}>
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
                            <a className="nav-link " aria-current="page" href="/MathAi">Math</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="/PhysicsAi">Physics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="/InfoAi">IT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="/HistoryAi">History</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/about">About us</a>
                        </li>
                    </ul>
                    {!token && <MDBBtn className="btn btn-dark signup" onClick={() => setScrollableModal(!scrollableModal)}>SIGN UP</MDBBtn>}
                    {token ? null : (
                        <MDBModal show={scrollableModal} setShow={setScrollableModal}>
                            <MDBModalDialog className="modal-dialog-center" scrollable>
                                <MDBModalContent>
                                    <MDBModalHeader>
                                        <MDBModalTitle>Create a new Student account</MDBModalTitle>
                                    </MDBModalHeader>
                                    <MDBModalBody className="modal-container">
                                        <form onSubmit={(e) => {
                                            handleSubmit(e)
                                            setScrollableModal(!scrollableModal)
                                        }}>
                                            <div>
                                                <input MDBInput placeholder="name" style={{ width: "300px" }} className="input-field" id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
                                            </div>
                                            <p></p>
                                            <div>
                                                <input MDBInput placeholder="username" style={{ width: "300px" }} className="input-field" id="username" type="text" value={username} onChange={e => setUsername(e.target.value)} />
                                            </div>
                                            <p></p>
                                            <div>
                                                <input MDBInput placeholder="email" style={{ width: "300px" }} className="input-field" id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                                            </div>
                                            <p></p>
                                            <MDBBtn className="create-account-button-inside-form" style={{ width: "300px" }} color="dark" type="submit">Create Account</MDBBtn>
                                        </form>
                                    </MDBModalBody>
                                    <MDBModalFooter>
                                        <MDBBtn color="secondary" onClick={() => setScrollableModal(!setScrollableModal)}>
                                            Close
                                        </MDBBtn>
                                    </MDBModalFooter>
                                </MDBModalContent>
                            </MDBModalDialog>
                        </MDBModal>
                    )}
                    {token ? (
                        <div>
                            <span style={{fontFamily: 'Gloria Hallelujah', fontSize: '20px', marginRight: "10px"}}>Hi, {username.charAt(0).toUpperCase() + username.slice(1)} </span>
                            <MDBBtn className="btn btn-dark" onClick={() => setSignInModal(true)}>SIGN OUT</MDBBtn>
                        </div>
                    ) : (
                        <MDBBtn className="btn btn-dark" onClick={() => setSignInModal(!signInModal)}>SIGN IN</MDBBtn>
                    )}

                    <MDBModal show={signInModal} setShow={setSignInModal}>
                        <MDBModalDialog className="modal-dialog-center" scrollable>
                            <MDBModalContent>
                                <MDBModalHeader>
                                    <MDBModalTitle>{token ? "Sign Out" : "Sign In"}</MDBModalTitle>
                                </MDBModalHeader>
                                {token ? (
                                    <MDBModalBody>
                                        <p>You are currently signed in. Do you want to sign out?</p>
                                        <MDBBtn className="btn btn-dark" onClick={() => signOut()}>Sign Out</MDBBtn>
                                    </MDBModalBody>
                                ) : (
                                    <>
                                        <MDBModalBody className="modal-container">
                                            <form onSubmit={(e) => {
                                                handleSignIn(e)
                                                setSignInModal(false)
                                            }}>
                                                <div>
                                                    <input MDBInput placeholder="username" style={{ width: "300px" }} id='username' type='text' value={username} onChange={e => setUsername(e.target.value)} />
                                                </div>
                                                <p></p>
                                                <div>
                                                    <input MDBInput  placeholder="email" style={{ width: "300px" }} id='email' type='email' value={email} onChange={e => setEmail(e.target.value)} />
                                                </div>
                                                <p></p>
                                                <MDBBtn style={{ width: "300px" }} className="signin-button-inside-form" color='dark' type="submit">Sign In</MDBBtn>
                                            </form>
                                        </MDBModalBody>
                                    </>
                                )}
                                <MDBModalFooter>
                                    <MDBBtn color='secondary' onClick={() => setSignInModal(false)}>
                                        Close
                                    </MDBBtn>
                                </MDBModalFooter>
                            </MDBModalContent>
                        </MDBModalDialog>
                    </MDBModal>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
