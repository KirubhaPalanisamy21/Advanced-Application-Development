package com.example.homecareservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.homecareservice.dto.UpdateRequest;
import com.example.homecareservice.model.User;

import io.micrometer.common.lang.NonNull;

@Service

public class UserService {
    @Autowired
    private com.example.homecareservice.repository.Userrepo userRepository;


    public User createUser(@NonNull User user)   //()-->Parameter,passing data called argument
    {
        return userRepository.save(user);

    }
    
    //getuser by email
    public Optional <User> getUserByEmail(String email)
    {
        return userRepository.findByEmail(email);
    }

    //get list of users
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    //update User
    public User updateUser(@NonNull String email,UpdateRequest updateRequest){
        return userRepository.findByEmail(email)  //user data are fetched by email by findByEmil method.
            .map(existingUser -> {
                existingUser.setName(updateRequest.getUsername());  //this map method name will be updates in the existing user
                existingUser.setEmail(updateRequest.getEmail());
                existingUser.setPassword(updateRequest.getPassword());
                return userRepository.save(existingUser);
            })
            .orElseThrow(() -> new RuntimeException("User not found with this email: " + email));
    }

    //deleteUser
    public void removeUser(@NonNull Integer userId){
        userRepository.deleteById(userId);
    }
    
}