import { Component } from '@angular/core';

@Component({
    selector: 'login-component',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent {

    username: string = "";
    password: string = "";

    constructor()
    {

    }

    onAdminClick()
    {
        console.log("alsfjlkasfdlkasfldksadlkjlkasfdlj")
        debugger;
    }
}