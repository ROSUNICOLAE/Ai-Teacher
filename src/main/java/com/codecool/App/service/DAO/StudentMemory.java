package com.codecool.App.service.DAO;

import com.codecool.App.models.Student;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.Set;

@Repository
public class StudentMemory implements StudentDAO {

        private Set<Student> students;


        public StudentMemory() {students = new HashSet<>();
        }

        @Override
        public Set<Student> getStudents() {return students;}

        @Override
        public Student addStudent(String name, String username, String email){
            Student student = new Student(name, username, email);
            students.add(student);
            return student;
        }
}
