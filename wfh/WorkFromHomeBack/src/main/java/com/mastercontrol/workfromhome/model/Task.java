package com.mastercontrol.workfromhome.model;

import java.time.LocalDate;
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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.time.LocalDateTime;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "wfh_tasks", schema = "dbo")
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false, name = "id", insertable = false, updatable = false)
	private Integer id;
	
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
	private User user;
    
    //actual data object which is the 
    @Column(nullable = false, name = "user_id")
    private Integer userId;
	
	@Column(nullable = false, name = "date", updatable = false)
	private LocalDate date;
	
	@Column(name = "morn_did_yesterday")
	private String mornYesterday;
	
	@Column(name = "morn_do_today")
	private String mornToday;
	
	@Column(name = "morn_notes")
	private String mornNotes;
	
	@Column(name = "eve_did_today")
	private String eveToday;
	
	@Column(name = "eve_notes")
	private String eveNotes;	
	
	public Task(Integer userId, LocalDate date, String mornYesterday, String mornToday, String mornNotes, String eveToday, String eveNotes) {
		this.userId = userId;
		this.date = date;
		this.mornYesterday = mornYesterday;
		this.mornToday = mornToday;
		this.mornNotes = mornNotes;
		this.eveToday = eveToday;
		this.eveNotes = eveNotes;
		
	}
	
}

