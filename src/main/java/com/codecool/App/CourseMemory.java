package com.codecool.App;

import com.codecool.App.models.Course;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;


@Repository
public class CourseMemory implements CourseDAO{
    private Set<Course> courses;
    public CourseMemory() {
        courses = new HashSet<>();
    }

    @Override
    public Set<Course> getCourses() {
        return courses;
    }

    @Override
    public Course addCourse(String name) {
        Course course = new Course(name);
        courses.add(course);
        return course;
    }

}
