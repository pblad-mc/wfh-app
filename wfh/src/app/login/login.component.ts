import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { Entry } from '../shared/entry.model';


@Component({
    selector: 'login-component',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    _username: string;
    _password: string;
    access: boolean = false;
    currentUser: User;
    routingUrl: string;

    userFound: User;

    users: User[];

    constructor(
        private userService: UserService,
        private router: Router)
    {   //why is this empty? Where are there parameters if it does nothing with them? 
    }

    ngOnInit() 
    {
        console.log(this.userService.getUsers().then(users => this.users = users));
    }

    get username(): string {
        return this._username;
    }
    set username(value: string) {
        this._username = value;
    }

    get password(): string {
        return this._password;
    }
    set password(value: string) {
        this._password = value;
    }

    employeeLogin(){
        this.routingUrl = '/toNonAdmin'
        this.login()
    }

    login(){
        this.userFound = this.users.find(u => u.username == this.username)
        
        if (this.userFound && this.userFound.password == this.password){
            console.log(this.userFound);
            this.access = true;
            localStorage.setItem('currentUser', JSON.stringify(this.userFound));
            this.router.navigate([this.routingUrl]);
        }
        else {
            console.log('you have a bad username');
            this.access = false;
        }
    }

    

    check_if_validation_is_true( username:string , password:string )
    {
            for(let u of this.users)
            {
                if (u.username == username)
                {
                    return true;
                }
            }
            return false;
    }

    adminLogin(){
        this.routingUrl = '/toAdmin'
        this.login()
        console.log('you are logging in as a administrator');
        console.log("username: ", this.username)
        console.log("password: ", this.password)
    }
}