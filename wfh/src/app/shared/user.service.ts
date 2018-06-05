import { Entry } from './entry.model';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable() 
export class UserService 
{
    private currentUser: User

    constructor(private http: Http){}
    
    getUsers(): Promise<User[]>
    {
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