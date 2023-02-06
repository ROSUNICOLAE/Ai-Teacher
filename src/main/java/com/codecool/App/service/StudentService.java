package com.codecool.App.service;
import com.codecool.App.models.Student;
import com.codecool.App.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Set;
@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getStudents(){return studentRepository.findAll();}
    public Student addStudent(String name, String username, String email, Long id){
        return studentRepository.save(new Student(name, username, email, id));
    }
}
