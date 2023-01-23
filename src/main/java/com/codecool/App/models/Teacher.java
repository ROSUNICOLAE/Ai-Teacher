package com.codecool.App.models;

public class Teacher {
    private int id;
    private String subject;

    private String email;

    public Teacher(int id, String subject, String email) {
        this.id = id;
        this.subject = subject;
        this.email = email;
    }

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

    @Override
    public String toString() {
        return "Teacher{" +
                "id=" + id +
                ", subject='" + subject + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
