package com.codecool.App.service;

import com.codecool.App.models.Student;
import com.codecool.App.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getStudents(){return studentRepository.findAll();}
    public Student addStudent(Student student){return studentRepository.save(student);}

    public Student findByUsername(String username) {
    return studentRepository.findByUsername(username);
    }
}
