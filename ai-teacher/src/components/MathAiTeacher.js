import React, {useState} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import img from './images/AI k12.png.jpg';


function MathAiTeacher() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/capital', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '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',
            },
            body: JSON.stringify({promt: message }),
        })
            .then((res) => res.json())
            .then((data) => setResponse(data.message));
    };

    return (
        <div>
            <Navbar />
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: `url('${img}')`, height: '500px' }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>Math AI Teacher</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label> <br/>
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="form-control border border-primary h-100"
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>{response}</div>

            <Footer />
        </div>
    );
}

export default MathAiTeacher;