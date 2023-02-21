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
        <div>
            <Navbar />
            <div className="flex-container">
                <aside className="sidemenu">
                    <h6>You asked...</h6>
                </aside>
                <section className="question-container">
                    <div id="aiTitle"><h1> Physics AI teacher </h1></div>
                    <div><h4 id="aiQuote">"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less" – Marie Curie</h4></div>
                    <div className="chatbox">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows="1" className="chat-input-textarea" placeholder="Type your question here">
                            </textarea>
                                <button type="submit" className="btn btn-outline-secondary ask">Ask</button>
                                <div id="hint">Hint: you can ask for extra explanations</div>
                            </div>
                        </form>

                        <div className="chat-output-textarea">
                            {response}
                        </div>
                    </div>

                </section>
            </div>
            <Footer />
        </div>
    );
}

export default PhysicsAiTeacher;