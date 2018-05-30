select [name], [date], 
	[morn_did_yesterday], [morn_do_today], [morn_notes], 
	[eve_did_today], [eve_notes]
from dbo.wfh_users as users
inner join dbo.wfh_tasks as task on users.user_id = task.user_id;