import React, {useState,useEffect} from "react";
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
    const [messages, setMessages] = useState([]);

    const fetchMessages = () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };

        fetch('http://localhost:8080/api/messages', requestOptions)
            .then(response => response.json())
            .then(data => setMessages(data));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ prompt: message })
        };

        fetch('http://localhost:8080/api/Physicsai', requestOptions)
            .then(response => response.text())
            .then(data => {
                setResponse(data);
                fetchMessages();
            });
        setMessage('');
    };

    useEffect(() => {
        fetchMessages();
    }, []);
    return (
        <MDBRow>
            <Navbar />
            <div
                className="p-5 text-center bg-image"
                style={{ backgroundImage: `url('${img}')`, height: "500px" }}
            >
                <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3">Physics AI Teacher</h1>
                        </div>
                    </div>
                </div>
            </div>
            <MDBCol sm="6">
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Type your questions:</MDBCardTitle>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="message"></label> <br />
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="form-control border border-primary h-100"
                                ></textarea>
                            </div>
                            <MDBCardText>
                                <br />
                                Bring your questions to the AI teacher and get the answers.
                            </MDBCardText>
                            <button type="submit" className="btn btn-primary">
                                Send
                            </button>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol sm="6">
                <MDBRow className="h-100">
                    <MDBCol className="d-flex flex-column">
                        <MDBCard className="mb-3">
                            <MDBCardBody>
                                <MDBCardTitle>Teacher response : </MDBCardTitle>
                                <div
                                    className="d-flex justify-content-center align-items-center flex-grow-1"
                                    style={{
                                        fontSize: "1.5rem",
                                        textAlign: "center",
                                        backgroundColor: "aquamarine",
                                        padding: "10px",
                                        boxShadow: "10px 10px 8px #888888",
                                    }}
                                >
                                    {response}
                                </div>
                                <MDBCardText>
                                    <br />
                                    Hint: you can ask for extra explanations.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className="flex-grow-1">
                            <MDBCardBody>
                                <MDBCardTitle>Conversation Log </MDBCardTitle>
                                {messages.length > 0 ? (
                                    <div
                                        className="d-flex flex-column justify-content-center align-items-center h-100"
                                        style={{
                                            fontSize: "1.5rem",
                                            textAlign: "center",
                                            backgroundColor: "aquamarine",
                                            padding: "10px",
                                            boxShadow: "10px 10px 8px #888888",
                                            height: "500px", // set height of the div to make it scrollable
                                            overflow: "scroll", // set overflow property to scroll
                                        }}
                                    >
                                        {messages.map((message, index) => (
                                            <div key={index}>
                                                <p>
                                                    <strong>Message:</strong> {message.prompt}
                                                </p>
                                                <p>
                                                    <strong>Response:</strong> {message.response}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div>No messages yet</div>
                                )}
                                <MDBCardText>
                                    <br />
                                    Scroll down to see the conversation log.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBCol>
            <Footer />
        </MDBRow>

    );
}

export default PhysicsAiTeacher;