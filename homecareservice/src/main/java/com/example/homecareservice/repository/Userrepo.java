package com.example.homecareservice.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.homecareservice.model.User;

public interface Userrepo extends JpaRepository<User,Integer> {
    Optional<User> findByEmail(String username);
}
