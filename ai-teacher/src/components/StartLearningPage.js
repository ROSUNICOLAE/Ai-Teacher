import React, {useEffect, useState} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

// create a fetch to get the respons from API http://localhost:8080/courses/cousesNames and display it in the page in a ordered list


function StartLearningPage() {
    // create a fetch to get the respons from API http://localhost:8080/courses/cousesNames and display it in the page in a ordered list

    const [coursesNames, setCoursesNames] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8080/courses/cousesNames")
            .then(response => response.json())
            .then(data => setCoursesNames(data));
    }, []);
    return (
        <div>
            <Navbar />
            <div className="container">
                <p>{coursesNames}</p>
            </div>
            <Footer />
        </div>
    );
}

export default StartLearningPage;