package com.codecool.App.repository;


import com.codecool.App.models.RoleType;
import com.codecool.App.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleType name);
}