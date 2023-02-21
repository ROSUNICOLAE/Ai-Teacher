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
            <div className="flex-container">
            <aside className="sidemenu">
                <h6>You asked...</h6>
            </aside>
            <section className="question-container">
                    <div id="aiTitle"><h1> Math AI teacher </h1></div>
                    <div><h4 id="aiQuote">"Mathematics is the language in which God has written the universe." – Galileo Galilei</h4></div>
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

export default MathAiTeacher;