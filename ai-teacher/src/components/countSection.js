import React, { useState, useEffect } from "react";

function CountSection() {
    const [studentsCount, setStudentsCount] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8080/students/all")
            .then(response => response.json())
            .then(data => { setStudentsCount(data.length)
                console.log(data)})
    }, []);

    const [coursesCount, setCoursesCount] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8080/courses/all")
            .then(response => response.json())
            .then(data => setCoursesCount(data.length));
    }, []);

    return (
<section id="counts" className="counts section-bg">
    <div className="container">

        <div className="row counters">

            <div className="col-lg-3 col-6 text-center">
                <span className="purecounter">{studentsCount}</span>
                <p>Students</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
                <span className="purecounter">{coursesCount}</span>
                <p>Courses</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="421" data-purecounter-duration="5"
                      className="purecounter">"not ready yet"</span>
                <p>Events</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="151" data-purecounter-duration="5"
                      className="purecounter">"not ready yet"</span>
                <p>Online Students</p>
            </div>

        </div>

    </div>
</section>
    );
}
export default CountSection;