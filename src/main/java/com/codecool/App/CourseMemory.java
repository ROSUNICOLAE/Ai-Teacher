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
        return null;
    }

    @Override
    public Course addCourse(String name) {
        return null;
    }

    @Override
    public Course getCourseById(UUID id){
        for (Course course : courses) {
            if (course.getUuid().equals(id)){
                return course;
            }
        }
        return null;
    }
}
