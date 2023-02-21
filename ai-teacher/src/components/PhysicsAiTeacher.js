import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import img from './images/AI k12.png.jpg';
import jwt_decode from 'jwt-decode';


function PhysicsAiTeacher() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [allMessages, setAllMessages] = useState([]);
    const [username, setUsername] = useState("");


    const fetchMessages = () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        };

        fetch("http://localhost:8080/api/messages", requestOptions)
            .then((response) => response.json())
            .then((data) => setAllMessages(data));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            const newMessage = {
                text: message,
                isUser: true,
                time: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
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

    useEffect(() => {
        fetchMessages();
    }, []);

    useEffect(() => {
        fetchMessages();
        const token = localStorage.getItem("token");
        console.log(token);
        if (token) {
            const decodedToken = jwt_decode(token);
            console.log(decodedToken);
            setUsername(decodedToken.sub);
        }
    }, []);

    return (
        <div>
            <Navbar/>
            <div className="flex-container">
                <aside className="sidemenu" style={{overflowY: "auto"}}>
                    <h4>All time conversational log with Aiteacher</h4>
                    {allMessages.map((message, index) => (
                        <div key={index}>
                            <p>
                                <strong>Message:</strong> {message.prompt}
                            </p>
                            <p>
                                <strong>Response:</strong> {message.text || message.response}
                            </p>
                        </div>
                    ))}
                </aside>
                <div className="question-container">
                    <div id="aiTitle">
                        <h1>Physics AI teacher</h1>
                    </div>
                    <div>
                        <h4 id="aiQuote">
                            "Those who cannot remember the past are condemned to repeat it." – George Santayana
                        </h4>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="maincontainer" style={{width: "50%"}}>
                            <div
                                id="msg-box"
                                className="card-body msg_card_body"
                                style={{height: "500px", overflowY: "auto"}}
                            >
                                {messages.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={
                                            msg.isUser
                                                ? "d-flex justify-content-end mb-4"
                                                : "d-flex justify-content-start mb-4"
                                        }
                                    >
                                        <div className="img_cont_msg">
                                            {msg.isUser ? (
                                                <span className="rounded-circle user_img_msg">{username}</span>
                                            ) : (
                                                <img
                                                    src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
                                                    className="rounded-circle user_img_msg"
                                                />
                                            )}
                                        </div>
                                        <div
                                            className={
                                                msg.isUser ? "msg_cotainer_send" : "msg_cotainer"
                                            }
                                        >
                                            {msg.text}
                                            <span
                                                className={
                                                    msg.isUser ? "msg_time_send" : "msg_time"
                                                }
                                            >
        {msg.time}
      </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="card-footer">
                                <form onSubmit={handleSubmit} className="input-group">
                                    <label htmlFor="message"></label>
                                    <br/>
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        name=""
                                        className="form-control type_msg"
                                        placeholder="Type your message..."
                                    ></textarea>
                                    <div className="input-group-append">
                                        <button type="submit" className="input-group-text send_btn">
                                            <i className="fas fa-location-arrow"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );


}

export default PhysicsAiTeacher;