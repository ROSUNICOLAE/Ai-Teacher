package com.codecool.App.controllers;

import com.codecool.App.models.Student;
import com.codecool.App.service.StudentService;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/students")
public class StudentController {

    @Autowired
    StudentService studentService;


    @GetMapping("/all")
    public Set<Student> getStudentsAPI() {
        System.out.println(studentService.getStudents());
        return studentService.getStudents();
    }

    @PostMapping("/add")
    public void addStudent(@RequestParam String name, @RequestParam String username, @RequestParam String email) {
        studentService.addStudent(name, username, email);

    }

}