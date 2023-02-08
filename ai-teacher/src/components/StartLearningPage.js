import React, {useEffect, useState} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Math from './images/math.jpg';
import phy from './images/phy.jpg';
function StartLearningPage() {

    const [coursesNames, setCoursesNames] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/courses/coursesNames")
            .then(response => response.json())
            .then(data => setCoursesNames(data));
    }, []);

    const courses = coursesNames.toString().split(",");
    const filteredCourses = courses.filter(course => course !== ""); // This will remove any empty spaces from the array
    const elements = filteredCourses.map((course, index) => (
        <li key={course} className="d-flex justify-content-center align-items-center border border-secondary mb-3">
            <img className="mr-3" src={course === "Math" ? `${Math}` : course === "Physics" ? `${phy}` : 'ai-teacher/src/components/images/math.jpg'} alt={course} width="50" height="50" />
            <div> {index+1}. {course} </div>
            <Link to={course === "Math" ? '/MathAi' : course === "Physics" ? '/PhysicsAi' : `/`}>
                <button className="ml-auto">Go To AiTeacher</button>
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
//test
//test
