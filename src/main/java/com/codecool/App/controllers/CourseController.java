package com.codecool.App.controllers;

import com.codecool.App.service.CourseService;
import com.codecool.App.models.Course;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/courses")
public class CourseController {
    @Autowired
    CourseService courseService;

    @GetMapping("/all")
    public @ResponseBody List<Course> getCoursesAPI() {return courseService.getCourses();}

    @PostMapping("/add")
    public void addCourse(@RequestParam String name) {
        courseService.addCourse(name);
    }
    @GetMapping("/coursesNames")
    public @ResponseBody List<String> getCoursesNames() {return courseService.getCoursesNames();}

    @PostConstruct
    public void addDefaultCourses() {
        courseService.addCourse("Math");
        courseService.addCourse("Physics");
        courseService.addCourse("History");
        courseService.addCourse("Informatics");
    }


}

