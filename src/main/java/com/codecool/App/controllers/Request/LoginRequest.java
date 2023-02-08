package com.codecool.App.controllers.Request;

public class LoginRequest {
    private String username;
    private String email;

    public LoginRequest() {
    }

    public LoginRequest(String username, String email) {
        this.username = username;
        this.email = email;
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