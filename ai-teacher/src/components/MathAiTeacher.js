import React, {useEffect, useState} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import data from "bootstrap/js/src/dom/data";
import jwt_decode from 'jwt-decode';
import Cube from "./Cube";


function MathAiTeacher() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [allMessages, setAllMessages] = useState([]);
    const [username, setUsername] = useState("");


    const fetchMessages = () => {
        const requestOptions = {
            method: "GET", headers: {
                "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        };

        fetch("http://localhost:8080/api/math-asked-questions", requestOptions)
            .then((response) => response.json())
            .then((data) => setAllMessages(data));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            const newMessage = {
                text: message,
                isUser: true,
                time: new Date().toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})
            };
            const newMessages = [...messages, newMessage];
            setMessages(newMessages);
            const requestOptions = {
                method: "POST", headers: {
                    "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}`,
                }, body: JSON.stringify({prompt: message}),
            };

            fetch("http://localhost:8080/api/Mathai", requestOptions)
                .then((response) => response.text())
                .then((data) => {
                    const newResponse = {
                        text: data, isUser: false, time: new Date().toLocaleString("en-US", {
                            hour: "numeric", minute: "numeric", hour12: true,
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

    return (<div>
            <Navbar/>
            <div className="flex-container">
                <aside className="sidemenu" style={{overflowY: "auto"}}>
                    <h6 className="side-menu-button">Asked questions</h6>
                    {allMessages.map((message, index) => (<div key={index}>
                        <div className="side-menu-button">
                            <p><strong>Question:</strong> {message.prompt}</p>
                            <p><strong>Answer:</strong> {message.text || message.response}</p>
                        </div><p></p>
                    </div>))}
                </aside>
                <div className="question-container">
                    <div id="aiTitle">
                        <h1>Math AI teacher</h1>
                    </div>
                    <div><h4 id="aiQuote">"Mathematics is the language in which God has written the Universe." – Galileo Galilei
                        <Cube style={{marginRight: '1200px'}}/>
                    </h4>
                    </div>

                    {/*<Cube style={{position: "relative", top: -300, left: 0, zIndex: -50}} />*/}
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

export default MathAiTeacher;