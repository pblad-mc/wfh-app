import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Entry } from '../shared/Entry.model';
import { AutocompleteFilterEmployees } from '../auto-complete/autocomplete.component';


@Component({
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.css']
})

export class AdminComponent implements OnInit {
    users: User[]
    usersNames: string[] 
    selectedUser: User
    selectedUserName: string
    date:Date;
    dateString: string
    entry: Entry

    constructor(private userService: UserService){   }

    ngOnInit() 
    {
        console.log(this.userService.getUsers().then(users => {this.users = users}));
        

        // for (let user of this.users){
        //     this.usersNames.push(user.name)
        // }
        // console.log(this.usersNames);
    
    }

    submit(){
        //console.log("Hunter is good at ping pong")
    }

    receiveEmployee($event){
        this.selectedUserName = $event
        //console.log("this is what we got ", this.selectedUserName);
        if (this.users){
            this.selectedUser = this.users.find(u => u.name == this.selectedUserName)
        }
        this.getEntry()
    }

    receiveDate($event)
    {
        this.date = $event;
        console.log("Admin just received the date:" , this.date.toString);
        this.getEntry()
    }

    getEntry(){
        if(this.selectedUser && this.date){
            this.entry = this.selectedUser.entries.find(entry => entry.date == this.date.toDateString())
        }
    }
}