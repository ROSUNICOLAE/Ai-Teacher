import React, {useState, useEffect} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import img from "./images/AI k12.png.jpg";


function HistoryAiTeacher() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [allMessages, setAllMessages] = useState([]);

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
            setAllMessages([...allMessages, newMessage]);

            fetch('http://localhost:8080/HistoryAi', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: message }),
            })
                .then(res => res.text())
                .then(data => {
                    const newResponse = {
                        text: data,
                        isUser: false,
                        time: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                    };
                    const updatedMessages = [...newMessages, newResponse];
                    setMessages(updatedMessages);
                    setAllMessages([...allMessages, newResponse]);
                });

            setMessage("");
        }
    };

    useEffect(() => {
        const msgBox = document.getElementById('msg-box');
        msgBox.scrollTop = msgBox.scrollHeight;
    }, [messages]);
    return (
        <div>
            <Navbar />
            <div className="flex-container">
                <aside className="sidemenu">
                    <h6>All time conversational log with Aiteacher</h6>
                </aside>
                <div className="question-container">
                    <div id="aiTitle">
                        <h1> History AI teacher </h1>
                    </div>
                    <div>
                        <h4 id="aiQuote">
                            "Those who cannot remember the past are condemned to repeat it." –
                            George Santayana
                        </h4>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="maincontainer" style={{ width: "50%" }}>
                            <div
                                id="msg-box"
                                className="card-body msg_card_body"
                                style={{ height: "500px", overflowY: "auto" }}
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
                                            <img
                                                src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
                                                className="rounded-circle user_img_msg"
                                            />
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
                                <form onSubmit={handleSubmit}>
                                    <div className="input-group">
                                        <div className="input-group-append"></div>
                                        <label htmlFor="message"></label>
                                        <br />
                                        <textarea
                                            id="message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            name=""
                                            className="form-control type_msg"
                                            placeholder="Type your message..."
                                        ></textarea>
                                        <div className="input-group-append">
                                            <button
                                                type="submit"
                                                className="input-group-text send_btn"
                                            >
                                                <i className="fas fa-location-arrow"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HistoryAiTeacher;