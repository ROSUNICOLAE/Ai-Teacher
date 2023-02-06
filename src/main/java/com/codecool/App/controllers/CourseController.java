package com.codecool.App.controllers;

import com.codecool.App.CourseService;
import com.codecool.App.models.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/courses")
public class CourseController {
    @Autowired
    CourseService courseService;

    @GetMapping("/all")
    public @ResponseBody Set<Course> getCoursesAPI() {return courseService.getCourses();}

    @PostMapping("/add")
    public void addCourse(@RequestParam String name) {
        courseService.addCourse(name);
    }
    @GetMapping("/coursesNames")
    public @ResponseBody Set<String> getCoursesNames() {return courseService.getCoursesNames();}

}

