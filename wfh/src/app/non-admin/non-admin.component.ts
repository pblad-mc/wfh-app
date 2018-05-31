import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'non-admin.component.html',
    styleUrls: ['non-admin.component.css']
})

export class NonAdminComponent implements OnInit {
    todaysDate: Date
    _didYesterday: string
    _doingToday: string
    _morningNotes: string
    _didToday: string
    _eveningNotes: string
    

    ngOnInit() 
    {
        this.todaysDate = new Date
    
    }

    //constructor (private username: string) { }
    
    morningSubmit(){
        // put data into database
        console.log("submit morning data");
        console.log("today's date: ", this.todaysDate.toDateString());
        
        console.log("Did Yesterday: ", this.didYesterday)
        console.log("Doing Today: ", this.doingToday)
        this.morningNotes ? console.log("Morning Notes: ", this.morningNotes) : null;
        
    }

    eveningSubmit(){
        // Need to send data to database
        console.log("submit evening data");
        console.log("today's date: ", this.todaysDate.toDateString());
        console.log("Did Today: ", this.didYesterday)
        this.eveningNotes ? console.log("Evening Notes: ", this.eveningNotes) : null;
    }

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

    get morningNotes(): string {
        return this._morningNotes;
    }
    set morningNotes(value: string) {
        this._morningNotes = value;
    }

    get didToday(): string {
        return this._didToday;
    }
    set didToday(value: string) {
        this._didToday = value;
    }

    get eveningNotes(): string {
        return this._eveningNotes;
    }
    set eveningNotes(value: string) {
        this._eveningNotes = value;
    }
}