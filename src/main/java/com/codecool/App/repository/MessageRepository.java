package com.codecool.App.repository;

import com.codecool.App.models.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findByStudent(String username);
}
