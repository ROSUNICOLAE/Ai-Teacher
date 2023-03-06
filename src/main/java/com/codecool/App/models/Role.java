package com.codecool.App.models;
import jakarta.persistence.*;


@Entity
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private RoleType name = RoleType.ROLE_USER;

    public Role() {

    }

    public Role(RoleType name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public RoleType getName() {
        return name;
    }

    public void setName(RoleType name) {
        this.name = name;
    }


    //add defaul ROLE_USER and ROLE_ADMIN

}