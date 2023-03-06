package com.codecool.App.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
@Data
@Getter
@Setter
@AllArgsConstructor
@Entity
@Table(name = "conversations")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "prompt", nullable = false)
    private String prompt;

    @Column(name = "response", nullable = false)
    private String response;

    @Column(name = "created_at", nullable = false)
    private Date createdAt;
    private String student;
    @Column(name = "course", nullable = false)
    private String course;
    public void setCourse(String course) {
        this.course = course;
    }

    public Message() {
        this.createdAt = new Date();
    }
    public void setStudent(String student) {
        this.student = student;
    }

}
