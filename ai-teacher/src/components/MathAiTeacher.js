import React, {useState} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import img from './images/AI k12.png.jpg';
import data from "bootstrap/js/src/dom/data";


function MathAiTeacher() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/Mathai', {
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
        <div>
            <Navbar />
            <aside className="sidemenu">
                <h1> Aside</h1>
                <div className="side-menu-button">
                    <span>+</span> New Question
                </div>
            </aside>

            <section className="chatbox">
                <div className="chat-log">
                    <div className="chat-message">
                        <div className="avatar">
                        </div>
                        <div className="message">
                            hello hello
                        </div>
                    </div>
                </div>
                <div className="chat-log">
                    <div className="chat-message chatgpt">
                        <div className="avatar chatgpt">
                        </div>
                        <div className="message">
                        </div>
                    </div>
                </div>
                <div className="chat-input-holder">
          <textarea rows="1" className="chat-input-textarea" placeholder="Type your question here">
          </textarea>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default MathAiTeacher;