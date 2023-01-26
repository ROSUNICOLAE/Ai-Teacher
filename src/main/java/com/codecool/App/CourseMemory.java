package com.codecool.App;

import com.codecool.App.models.Course;
import com.codecool.App.service.DAO.CourseDAO;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.Set;


@Repository
public class CourseMemory implements CourseDAO {
    private Set<Course> courses;

    public CourseMemory() {
        courses = new HashSet<>();
        defaultCourses();
    }
    private void defaultCourses(){
        courses.add(new Course("Math"));
        courses.add(new Course("Physics"));
        courses.add(new Course("Information Technology"));
        courses.add(new Course("History"));
    }
    @Override
    public Set<String> getCoursesNames(){
        Set<String> coursesNames = new HashSet<>();
        for (Course course : courses) {
            coursesNames.add(course.getName()+",");
        }
        return coursesNames;
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
