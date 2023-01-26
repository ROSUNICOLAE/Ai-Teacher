package com.codecool.App.models;

import java.util.UUID;

public class Student {

    private final UUID uuid;
    private String name;
    private String username;
    private String email;

    public Student(String name, String username, String email) {
        this.uuid = UUID.randomUUID();
        this.name = name;
        this.username = username;
        this.email = email;
    }

    public UUID getUuid() {
        return uuid;
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
