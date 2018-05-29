import { Component } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { AutocompleteFilterEmployees } from '../auto-complete/autocomplete.component';


@Component({
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.css']
})

export class AdminComponent  {
    users: User[]
    usersNames: string[] 
    selectedUser: User
    selectedUserName: string
    date:string = "May 22, 2018"

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
        console.log("Hunter is good at ping pong")
    }

    receiveEmployee($event){
        this.selectedUserName = $event
        console.log("this is what we got ", this.selectedUserName);
        if (this.users){
            this.selectedUser = this.users.find(u => u.name == this.selectedUserName)
        }
    }
}