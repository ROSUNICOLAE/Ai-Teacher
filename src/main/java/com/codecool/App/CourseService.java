package com.codecool.App;


import com.codecool.App.models.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class CourseService {

    @Autowired
    private CourseDAO courseDAO;

    public Set<Course> getCourses() {
        return courseDAO.getCourses();
    }

    public Course addCourse(String name){
        return courseDAO.addCourse(name);
    }

}
