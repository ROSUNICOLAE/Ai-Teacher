package com.codecool.App.controllers;

import com.codecool.App.service.CourseService;
import com.codecool.App.models.Course;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController // include @ResponseBody
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/courses")
public class CourseController {
    @Autowired
    CourseService courseService;

    @GetMapping
    public List<Course> getCoursesAPI() {return courseService.getCourses();}

    @PostMapping
    public void addCourse(@RequestParam String name) {
        courseService.addCourse(name);
    }
    @GetMapping("/coursesNames")
    public List<String> getCoursesNames() {return courseService.getCoursesNames();}

}

