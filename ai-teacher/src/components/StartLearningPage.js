import React, {useEffect, useState} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Link } from "react-router-dom";

function StartLearningPage() {

    const [coursesNames, setCoursesNames] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/courses/cousesNames")
            .then(response => response.json())
            .then(data => setCoursesNames(data));
    }, []);

    const courses = coursesNames.toString().split(",");
    const filteredCourses = courses.filter(course => course !== ""); // This will remove any empty spaces from the array
    const elements = filteredCourses.map((course, index) => (
        <li key={course}>
            {index+1}. {course}
            <Link to={index === 0 ? '/MathAi' : `/aiteacher/${course}`}>
                <button>Go To AiTeacher</button>
            </Link>
        </li>
    ));
    return (
        <div>
            <Navbar />
            <div className="container">
                <p>{elements}</p>
            </div>
            <Footer />
        </div>
    );
}
export default StartLearningPage;
