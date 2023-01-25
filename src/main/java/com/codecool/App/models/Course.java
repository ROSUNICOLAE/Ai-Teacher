package com.codecool.App.models;

import java.util.UUID;

public class Course {

    private final UUID uuid;
    private String name;

    public Course(String name) {
        this.uuid = UUID.randomUUID();
        this.name = name;
    }

    public UUID getUuid() {
        return uuid;
    }

    public String getName() {
        return name;
    }
}
