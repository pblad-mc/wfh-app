import { Component, OnInit } from '@angular/core';
import { Entry } from '../shared/entry.model'
import { User } from '../shared/user.model'
import { UserService } from '../shared/user.service';
@Component({
    templateUrl: 'new-entry.component.html',
    styleUrls: ['new-entry.component.css']
})

export class NewEntryComponent implements OnInit {
    todaysDate: Date
    entry: Entry
    _didYesterday: string
    _doingToday: string
    _morningNotes: string
    _didToday: string
    _eveningNotes: string
    _startTime: string
    _endTime: string

    constructor( private userService: UserService) { }


    test:string = "hello"





    ngOnInit() {
        this.todaysDate = new Date
        this.retrieveEntry()
    }


    morningSubmit() {
        console.log("submit morning data");
        console.log("today's date: ", this.todaysDate.toDateString());

        console.log("Did Yesterday: ", this.didYesterday)
        console.log("Doing Today: ", this.doingToday)
        this._morningNotes ? console.log("Morning Notes: ", this.morningNotes) : null;

        this.postMessageToSlack("morning")

    }

    eveningSubmit() {
        // Need to send data to database
        console.log("submit evening data");
        console.log("today's date: ", this.todaysDate.toDateString());
        console.log("Did Today: ", this.didYesterday)
        this.eveningNotes ? console.log("Evening Notes: ", this.eveningNotes) : null;

        this.postMessageToSlack("evening")

    }

    receiveDate($event)
    {
        this.todaysDate = $event;
        this.retrieveEntry()
    }

    retrieveEntry(){
        if(this.userService.getCurrentUser()){
            this.entry = this.userService.getCurrentUser().entries.find(entry => entry.date == this.todaysDate.toDateString())
            if ( this.entry ){
                if ( this.entry.morning_didYesterday ){
                    this._didYesterday = this.entry.morning_didYesterday
                }
                if ( this.entry.morning_doingToday ){
                    this._doingToday = this.entry.morning_doingToday
                }
                if ( this.entry.morning_notes ){
                    this._morningNotes = this.entry.morning_notes
                }
                if ( this.entry.evening_didToday ){
                    this._didToday = this.entry.evening_didToday
                }
                if ( this.entry.evening_notes ){
                    this._eveningNotes = this.entry.evening_notes
                }
            }
            else{
                this._didYesterday = ""
                this._doingToday = ""
                this._morningNotes = ""
                this._didToday = ""
                this._eveningNotes = ""
            }
        }
    }

    get startTime(): string {
        return this._startTime
    }
    set startTime(value: string) {
        this._startTime = value;
    }
    get endTime(): string {
        return this._endTime
    }
    set endTime(value: string) {
        this._endTime = value;
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


    postMessageToSlack(time:string) {
        if (time == "morning"){
            let messageToSend = `payload= {
                "username": "WFH",
                "icon_url": "https://assets/icon.png",
                "attachments": [{
                    "fallback": "This attachement isn't supported.",
                    "title": "${this.userService.getCurrentUser().name} is working from home today [Morning]",
                    "color": "#ea3c3c",
                    "author_name": "Work From Home",
                    "author_link": "http://localhost:4200/toLogin",
                    "fields": [{
                        "value": "_Did Yesterday:_ \n${this._didYesterday}\n_Doing Today:_ \n${this._doingToday}\n_Notes:_ \n${this._morningNotes}",
                        "short": true
                    }],
                    "mrkdwn_in": ["text", "fields"],
                    "thumb_url": "http://example.com/thumbnail.jpg"
                }]
            }`


            var xmlhttp = new XMLHttpRequest(),
                webhook_url = "https://hooks.slack.com/services/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",
                myJSONStr = messageToSend;
            xmlhttp.open('POST', webhook_url, false);
            xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlhttp.send(myJSONStr);
        }
        else {
            let messageToSend = `payload= {
                "username": "WFH",
                "icon_url": "https://assets/icon.png",
                "attachments": [{
                    "fallback": "This attachement isn't supported.",
                    "title": "${this.userService.getCurrentUser().name} just finished working [Evening]",
                    "color": "#ea3c3c",
                    "author_name": "Work From Home",
                    "author_link": "http://localhost:4200/toLogin",
                    "fields": [{
                        "value": "_Doing Today:_ \n${this._doingToday}\n_Notes:_ \n${this._eveningNotes}",
                        "short": true
                    }],
                    "mrkdwn_in": ["text", "fields"],
                    "thumb_url": "http://example.com/thumbnail.jpg"
                }]
            }`


            var xmlhttp = new XMLHttpRequest(),
                webhook_url = "https://hooks.slack.com/services/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",
                myJSONStr = messageToSend;
            xmlhttp.open('POST', webhook_url, false);
            xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlhttp.send(myJSONStr);

        }
    }
}