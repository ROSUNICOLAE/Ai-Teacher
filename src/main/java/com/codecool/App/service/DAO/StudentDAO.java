package com.codecool.App.service.DAO;

import com.codecool.App.models.Student;

import java.util.Set;

public interface StudentDAO {

    Set<Student> getStudents();

    Student addStudent(String name, String username, String email);
}
