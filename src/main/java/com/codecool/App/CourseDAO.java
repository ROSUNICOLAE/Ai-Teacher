package com.codecool.App;

import com.codecool.App.models.Course;

import java.util.Set;
import java.util.UUID;

public interface CourseDAO {
    Set<Course> getCourses();
    Course addCourse(String name);

}
