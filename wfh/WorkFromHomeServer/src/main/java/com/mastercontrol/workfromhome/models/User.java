package main.java.com.mastercontrol.workfromhome.models;


import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.time.LocalDateTime;
import java.util.Set;


@Getter
@Setter
@Entity
@Table(name = "wfh_users", schema = "dbo")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false, name = "id", insertable = false, updatable = false)
	private Integer id;
	
	//one to many based on name of object in other table
	@OneToMany(mappedBy = "user")
	private Set<Task> tasks;
	
	@Column(name = "last_name", insertable = false, updatable = false)
	private String lastName;
	
	@Column(name = "first_name", insertable = false, updatable = false)
	private String firstName;

	@Column(nullable = false, name = "username", insertable = false, updatable = false)
	private String username;
	
	@Column(nullable = false, name = "password", insertable = false, updatable = false)
	private String password;
}
