package com.codecool.App.models;
import jakarta.annotation.PostConstruct;
import jakarta.persistence.*;


@Entity
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ERole name = ERole.ROLE_USER;

    public Role() {

    }

    public Role(ERole name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public ERole getName() {
        return name;
    }

    public void setName(ERole name) {
        this.name = name;
    }


    //add defaul ROLE_USER and ROLE_ADMIN
    @PostConstruct
    public void init() {
        Role roleUser = new Role(ERole.ROLE_USER);
        Role roleAdmin = new Role(ERole.ROLE_ADMIN);
    }
}