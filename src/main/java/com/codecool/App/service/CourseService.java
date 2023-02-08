package com.codecool.App.service;
import com.codecool.App.models.Course;
import com.codecool.App.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
git pu

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public List<Course> getCourses() {
        return courseRepository.findAll();
    }

    public Course addCourse(String name){
        return courseRepository.save(new Course(name));
    }

        // method to get all courses names
    public List<String> getCoursesNames() {
        return courseRepository.findAllNames();
    }
}
