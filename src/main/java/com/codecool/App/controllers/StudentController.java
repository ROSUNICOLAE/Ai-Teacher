package com.codecool.App.controllers;

import com.codecool.App.models.Student;
import com.codecool.App.service.StudentService;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Set;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/students")
public class StudentController {

    @Autowired
    StudentService studentService;


    @GetMapping("/all")
    public List<Student> getStudentsAPI() {
        System.out.println(studentService.getStudents());
        return studentService.getStudents();
    }

    @PostMapping("/add")
    public ResponseEntity<String> addStudent(@RequestBody Map<String, Object> payload) {
        String name = (String) payload.get("name");
        String username = (String) payload.get("username");
        String email = (String) payload.get("email");

        Student existingStudent = studentService.findByUsername(username);
        if (existingStudent != null) {
            return ResponseEntity.badRequest().body("A student with this username already exists");
        }

        Student newStudent = new Student(name, username, email);
        studentService.addStudent(newStudent);

        return ResponseEntity.ok().body("Student added successfully");
    }
}