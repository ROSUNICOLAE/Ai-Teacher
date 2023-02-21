import React, {useState} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import img from "./images/pexels-tara-winstead-8386440.jpg";


function InfoAiTeacher() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080' +
            '/InfoAi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: message }),
        })
            .then(res => res.text())
            .then(data => setResponse(data));
    };


export default InfoAiTeacher;