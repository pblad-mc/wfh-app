import { Entry } from './entry.model';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable() // This class/component now inherents from Injectable.
export class UserService // The actions of the Entry
{
    private currentUser: User

    constructor(private http: Http){}
    getUsers(): Promise<User[]>
    {
        //Converts the json file into an Entry then places them into a list
        return this.http.get('/app/users')
        .toPromise()
        .then((response) => response.json() as User[]);
    }

    getCurrentUser(): User {
        return this.currentUser
    }

    setCurrentUser(newUser: User){
        this.currentUser = newUser
    }

}
