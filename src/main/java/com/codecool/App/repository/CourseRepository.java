package com.codecool.App.repository;

import com.codecool.App.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Long> {
    @Query("SELECT c.name FROM Course c")
    List<String> findAllNames();
}
