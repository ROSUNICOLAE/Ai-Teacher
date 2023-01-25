package com.codecool.App.controllers;

import com.codecool.App.CourseService;
import com.codecool.App.models.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@Controller
@RequestMapping("/courses")
public class CourseController {

    @Autowired
    CourseService courseService;

    @GetMapping()
    public String getCourses(Model model){
        model.addAttribute("courses", courseService.getCourses());
        return "courses";
    }

    @GetMapping("/get-all-courses")
    public @ResponseBody Set<Course> getCoursesAPI() {return courseService.getCourses();}

    @PostMapping()
    public String addCourse(@RequestParam String name, Model model) {
        courseService.addCourse(name);
        model.addAttribute("courses", courseService.getCourses());
        return "courses";
    }

}
