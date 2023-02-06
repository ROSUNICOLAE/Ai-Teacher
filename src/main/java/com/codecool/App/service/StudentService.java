package com.codecool.App.service;

import com.codecool.App.models.Student;
import com.codecool.App.service.DAO.StudentDAO;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Set;
@Service
public class StudentService {
    @Autowired
    private StudentDAO studentDAO;
    public Set<Student> getStudents(){return studentDAO.getStudents();}
    public Student addStudent(String name, String username, String email){
        return studentDAO.addStudent( name,  username,  email) ;
    }
}
