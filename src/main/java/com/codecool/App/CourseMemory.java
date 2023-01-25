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
        Course course1 = new Course("Math");
        Course course2 = new Course("Physics");
        Course course3 = new Course("Information Technology");
        Course course4 = new Course("History");
        courses.add(course1);
        courses.add(course2);
        courses.add(course3);
        courses.add(course4);
    }

// gete all curses names form curses
    @Override
    public Set<String> getCoursesNames(){
        Set<String> coursesNames = new HashSet<>();
        for (Course course : courses) {
            coursesNames.add(course.getName());
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
