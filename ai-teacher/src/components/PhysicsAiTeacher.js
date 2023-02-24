import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import jwt_decode from "jwt-decode";
import Cube from "./Cube";

function PhysicsAiTeacher() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [allMessages, setAllMessages] = useState([]);
    const [username, setUsername] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("All");
    const [courseNames, setCourseNames] = useState([]);

    const fetchMessages = () => {
        let url = "http://localhost:8080/api/physics-course";
        if (selectedCourse !== "All" && selectedCourse !== "All") {
            url += `?course=${selectedCourse}`;
        }
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        };

        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((data) => setAllMessages(data));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            const newMessage = {
                text: message,
                isUser: true,
                time: new Date().toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                }),
            };
            const newMessages = [...messages, newMessage];
            setMessages(newMessages);
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({ prompt: message }),
            };

            fetch("http://localhost:8080/api/Physicsai", requestOptions)
                .then((response) => response.text())
                .then((data) => {
                    const newResponse = {
                        text: data,
                        isUser: false,
                        time: new Date().toLocaleString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                        }),
                    };
                    const updatedMessages = [...newMessages, newResponse];
                    setMessages(updatedMessages);
                    setAllMessages([...allMessages, newResponse]);
                    fetchMessages();
                });
            setMessage("");
        }
    };

    const handleSelectCourse = (event) => {
        setSelectedCourse(event.target.value);
    };

    useEffect(() => {
        fetchMessages();
    }, [selectedCourse]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = jwt_decode(token);
            setUsername(decodedToken.sub);
        }
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/courses/coursesNames")
            .then(response => response.json())
            .then(data => {
                console.log("Course names data:", data);
                setCourseNames([...data]);
            })
            .catch(error => console.error(error));
    }, []);



    return (<div>
            <Navbar/>
            <div className="flex-container">
                <aside className="sidemenu" style={{overflowY: "auto"}}>
                    <h6 className="side-menu-button">Your Q&A</h6>
                    {allMessages.map((message, index) => (<div key={index}>
                        <div className="side-menu-button">
                            <p><strong>Question:</strong> {message.prompt}</p>
                            <p><strong>Answer:</strong> {message.text || message.response}</p>
                        </div><p></p>
                    </div>))}
                </aside>
                <div className="question-container">
                    <div id="aiTitle">
                        <h1>Physics AI teacher</h1>
                    </div>
                    <div><h4 id="aiQuote">"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less." – Marie Curie
                        <Cube style={{marginRight: '1200px'}}/>
                    </h4>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="maincontainer" style={{width: "90%"}}>
                            <div
                                id="msg-box"
                                className="card-body msg_card_body"
                                style={{height: "500px", overflowY: "auto"}}>
                                {messages.map((msg, index) => (
                                    <div key={index}>
                                        <div className="img_cont_msg" style={{position: "relative"}}>
                                        </div>
                                        <div
                                            className={msg.isUser ? "msg_cotainer_send" : "msg_cotainer"}>
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container-ask">
                    <form onSubmit={handleSubmit} className="form-grup" onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            handleSubmit(e);
                        }
                    }}>
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows="1"
                                        className="chat-input-textarea"
                                        placeholder="Type your question here">
                                    </textarea>
                        <button type="submit" className="btn btn-outline-secondary ask">Ask</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default PhysicsAiTeacher;