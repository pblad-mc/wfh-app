import { Component, EventEmitter, Input, ViewChild, OnInit } from '@angular/core'; //EventEmitter sends data between two components
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';
import { Entry } from '../shared/entry.model';

@Component({
    selector: 'query-result',
    templateUrl: 'query-result.component.html',
    styleUrls: ['query-result.component.css']
})

export class QueryResultComponent implements OnInit {
    @Input() user: User //Receiving this user from the input text selection
    @Input() date: string
    @Input() entry: Entry

    dateString:string

    ngOnInit() 
    {   
        if (this.entry) {
            if ( !this.entry.morning_didYesterday ) {
                this.entry.morning_didYesterday = "--"
            }
            if ( !this.entry.morning_doingToday ) {
                this.entry.morning_doingToday = "--"
            }
            if ( !this.entry.morning_notes ) {
                this.entry.morning_notes = "--"
            }
            if ( !this.entry.evening_didToday ) {
                this.entry.evening_didToday = "--"
            }
            if ( !this.entry.evening_notes ) {
                this.entry.evening_notes = "--"
            }
        }
        else {
            this.entry = {
                date: this.date,
                morning_didYesterday: "--",
                morning_doingToday: "--",
                morning_notes: "--",
                evening_didToday: "--",
                evening_notes: "--"
            }
        }
    }
}