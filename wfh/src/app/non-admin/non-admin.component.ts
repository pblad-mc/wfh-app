import { Component } from '@angular/core';

@Component({
    templateUrl: 'non-admin.component.html',
    styleUrls: ['non-admin.component.css']
})

export class NonAdminComponent {
    _didYesterday: string;
    _doingToday: string;
    _notes: string;

    constructor (private username: string) { }
    
    get didYesterday(): string {
        return this._didYesterday;
    }
    set didYesterday(value: string) {
        this._didYesterday = value;
    }

    get doingToday(): string {
        return this._doingToday;
    }
    set doingToday(value: string) {
        this._doingToday = value;
    }

    get notes(): string {
        return this._notes;
    }
    set notes(value: string) {
        this._notes = value;
    }

    submit(){
        // put data into database
        console.log("submit employee data");
        console.log("Did Yesterday: ", this.didYesterday)
        console.log("Doing Today: ", this.doingToday)
        this.notes ? console.log("Notes: ", this.notes) : null;
        
    }
}