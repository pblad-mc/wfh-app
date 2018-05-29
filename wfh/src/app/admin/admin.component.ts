import { Component } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';


@Component({
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.css']
})

export class AdminComponent  {
    users: User[]
    usersNames: string[] 
    selectedUser: User

    constructor(private userService: UserService){   
    }

    ngOnInit() 
    {
        console.log(this.userService.getUsers().then(users => {this.users = users}));
        
        
        // for (let user of this.users){
        //     this.usersNames.push(user.name)
        // }
        // console.log(this.usersNames);
        
    }

    autoCompleteClic(){

        

        
    }
}