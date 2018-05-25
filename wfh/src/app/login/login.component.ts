import { Component } from '@angular/core';

@Component({
    selector: 'login-component',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent {
    _username: string;
    _password: string;

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
        // TODO verify that it is a correct user
        // Then go to the next page
        console.log('you are logging in as a employee');
        console.log("username: ", this.username)
        console.log("password: ", this.password)
    }

    adminLogin(){
        console.log('you are logging in as a administrator');
        console.log("username: ", this.username)
        console.log("password: ", this.password)
    }
}