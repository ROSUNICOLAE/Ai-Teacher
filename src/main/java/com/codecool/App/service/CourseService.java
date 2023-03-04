package com.codecool.App.service;
import com.codecool.App.models.Course;
import com.codecool.App.repository.CourseRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    CourseRepository courseRepository;

    public List<Course> getCourses() {
        return courseRepository.findAll();
    }

    public Course addCourse(String name) {
        return courseRepository.save(new Course(name));
    }

    public List<String> getCoursesNames() {
        List<String> names = courseRepository.findAllNames();
        return names;
    }


   //  method to initialize database with some data 4 courses : Math Physics IT History
//
}
