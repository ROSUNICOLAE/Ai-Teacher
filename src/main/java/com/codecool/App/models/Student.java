package com.codecool.App.models;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO  )
    private Long id;
    private String name;
    private String username;
    private String email;

    public Student(String name, String username, String email, Long id) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }

    public Long getUuid() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
