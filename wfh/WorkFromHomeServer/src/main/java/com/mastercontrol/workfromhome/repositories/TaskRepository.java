package main.java.com.mastercontrol.workfromhome.repositories;

import main.java.com.mastercontrol.workfromhome.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Set;



public interface TaskRepository extends JpaRepository<Task, Integer>{

		
	//task info by userid and date
	Task findByUserIdAndDate(Integer userId, LocalDate date);
	
	//list of tasks by date
	Set<Task> findByDate(LocalDate date);
	
	//tasks in a date range
	
	//tasks in a date range by userid
	
	
}
