package com.codecool.App.service;

import com.codecool.App.models.Student;
import com.codecool.App.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getStudents(){return studentRepository.findAll();}
    public Student addStudent(Student student){return studentRepository.save(student);}

    public Optional<Student> findByUsername(String username) {
    return studentRepository.findByUsername(username);
    }
    public Student validateAndGetUserByUsername(String username) {
        return findByUsername(username).orElseThrow(()->new UsernameNotFoundException(String.format("User with username %s not found", username)));
    }
}
