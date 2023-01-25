package com.codecool.App.controllers;

import com.codecool.App.CourseService;
import com.codecool.App.models.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/courses")
public class CourseController {
//dadadada
    @Autowired
    CourseService courseService;

    @GetMapping("/all-courses")
    public @ResponseBody Set<Course> getCoursesAPI() {return courseService.getCourses();}

    @PostMapping("add-course")
    public void addCourse(@RequestParam String name) {
        courseService.addCourse(name);
    }

}
