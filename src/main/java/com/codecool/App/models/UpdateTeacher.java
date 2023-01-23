package com.codecool.App.models;

public class UpdateTeacher {
    private int id;

    private String subject;

    private String email;

    public int getId() {
        return id;
    }

    public String getSubject() {
        return subject;
    }

    public String getEmail() {
        return email;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
