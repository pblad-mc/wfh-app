package main.java.com.mastercontrol.workfromhome.models;

import java.time.LocalDate;


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
