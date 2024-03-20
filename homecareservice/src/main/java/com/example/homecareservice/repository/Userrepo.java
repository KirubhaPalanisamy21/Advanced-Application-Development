package com.example.homecareservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.homecareservice.model.User;

public interface Userrepo extends JpaRepository<User,Long> {
    
}
