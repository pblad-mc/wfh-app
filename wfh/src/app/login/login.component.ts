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
    currentUser: User;
    routingUrl: string;
    loginFailed: boolean = false;

    userFound: User;

    users: User[];

    constructor(
        private userService: UserService,
        private router: Router )
    {   //why is this empty? Where are there parameters if it does nothing with them?
    }

    ngOnInit() {
        this.userService.getUsers()
          .then(response => {
            this.users = response.hits.hits;
            console.log(response);
          }, error => {
            console.error(error);
          }).then(() => {
          console.log('Got all users');
        });
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
        this.routingUrl = '/addEntry'
        this.login()
    }

    login(){
        this.userFound = this.users.find(u => u.username == this.username)

        if (this.userFound && this.userFound.password == this.password){
            this.loginFailed = false
            this.userService.setCurrentUser(this.userFound)
            this.router.navigate([this.routingUrl]);
        }
        else {
            this.loginFailed = true
        }
    }



    check_if_validation_is_true( username:string, password:string )
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
    }
}
