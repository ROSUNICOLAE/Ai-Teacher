package com.codecool.App.controllers;

import com.codecool.App.models.Teacher;
import com.codecool.App.models.UpdateTeacher;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@RestController
public class TeacherController {
    private List<Teacher> teachers = new ArrayList<>();

    @GetMapping("/teachers")
    public List<Teacher> myTeachers() {
        System.out.println(teachers);
        return teachers;
    }

    @PostMapping("/teachers")
    public void create(@RequestBody Teacher teacher) {
        teachers.add(teacher);
        System.out.println(teachers);
    }

    @PutMapping("/teachers/{id}")
    public void updateTeacherSubject(@PathVariable int id, @RequestBody UpdateTeacher teacherDetails) {
        Map<Integer, Teacher> teachersMap = teachers.stream()
                .collect(Collectors.toMap(Teacher::getId, Function.identity()));
        Teacher storedTeacherDetails = teachersMap.get(id);
        teachersMap.put(id, storedTeacherDetails);
        storedTeacherDetails.setSubject(teacherDetails.getSubject());
        System.out.println(teachersMap);
        teachers.clear();
        teachers.addAll(teachersMap.values());
    }

    @DeleteMapping("/teachers/{id}")
    public void deleteTeacher(@PathVariable int id) {
        Map<Integer, Teacher> teachersMap = teachers.stream()
                .collect(Collectors.toMap(Teacher::getId, Function.identity()));
        teachersMap.remove(id);
        System.out.println(teachersMap);
        teachers.clear();
        teachers.addAll(teachersMap.values());
    }

    @PatchMapping("/teachers/{id}")
    public void updateTeacherAttributes(@PathVariable int id, @RequestBody UpdateTeacher teacherDetails) {
        Map<Integer, Teacher> teachersMap = teachers.stream()
                .collect(Collectors.toMap(Teacher::getId, Function.identity()));
        Teacher storedTeacherDetails = teachersMap.get(id);
        teachersMap.put(id, storedTeacherDetails);
        storedTeacherDetails.setSubject(teacherDetails.getSubject());
        storedTeacherDetails.setEmail(teacherDetails.getEmail());
        System.out.println(teachersMap);
        teachers.clear();
        teachers.addAll(teachersMap.values());
    }

}
