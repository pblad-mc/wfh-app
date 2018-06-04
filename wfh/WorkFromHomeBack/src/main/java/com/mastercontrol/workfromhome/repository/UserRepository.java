package com.mastercontrol.workfromhome.repository;

import com.mastercontrol.workfromhome.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;


public interface UserRepository extends JpaRepository<User, Integer> {
	
	//get id by name
	
	//get name by id
	Optional<User> findById(Integer id);
	
	//get id by username/password
	Optional<Integer> findIdByUsernameAndPassword(String username, String password);
}