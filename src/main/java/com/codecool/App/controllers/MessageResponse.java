package com.codecool.App.controllers;

import lombok.Data;

import java.io.Serializable;
import java.util.UUID;

/**
 * A DTO for the {@link com.codecool.App.models.Course} entity
 */
@Data
public class MessageResponse implements Serializable {
    private final UUID uuid;
    private final String name;
}