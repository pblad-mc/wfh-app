import { Component, OnInit } from '@angular/core';
import { Entry } from '../shared/entry.model'
import { User } from '../shared/user.model'
import { UserService } from '../shared/user.service';

@Component({
    templateUrl: 'non-admin.component.html',
    styleUrls: ['non-admin.component.css']
})

export class NonAdminComponent implements OnInit {
    todaysDate: Date
    entry: Entry
    _didYesterday: string
    _doingToday: string
    _morningNotes: string
    _didToday: string
    _eveningNotes: string

    constructor( private userService: UserService) { }


    test:string = "hello"





    ngOnInit() {
        this.todaysDate = new Date
        this.retrieveEntry()
    }

    //constructor (private username: string) { }

    morningSubmit() {
        // put data into database
        console.log("submit morning data");
        console.log("today's date: ", this.todaysDate.toDateString());

        console.log("Did Yesterday: ", this.didYesterday)
        console.log("Doing Today: ", this.doingToday)
        this._morningNotes ? console.log("Morning Notes: ", this.morningNotes) : null;

        this.postMessageToSlack()

    }

    eveningSubmit() {
        // Need to send data to database
        console.log("submit evening data");
        console.log("today's date: ", this.todaysDate.toDateString());
        console.log("Did Today: ", this.didYesterday)
        this.eveningNotes ? console.log("Evening Notes: ", this.eveningNotes) : null;
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


    postMessageToSlack() {
        var xmlhttp = new XMLHttpRequest(),
            webhook_url = "https://hooks.slack.com/services/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",
            myJSONStr = this.messageToSend;
        xmlhttp.open('POST', webhook_url, false);
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xmlhttp.send(myJSONStr);
    }

    messageToSend = `payload= {
        "username": "Work From Home",
        "icon_url": "example.com/img/icon.jpg",
        "attachments": [{
            "fallback": "This attachement isn't supported.",
            "title": "${this.test}",
            "color": "#9C1A22",
            "pretext": "Today's list of awesome offers picked for you",
            "author_name": "Preethi",
            "author_link": "https://www.hongkiat.com/blog/author/preethi/",
            "author_icon": "https://assets.hongkiat.com/uploads/author/preethi.jpg",
            "fields": [{
                "title": "Sites",
                "value": "_<http://www.amazon.com|Amazon>_\n_<http://www.ebay.com|Ebay>_",
                "short": true
            }, {
                "title": "Offer Code",
                "value": "UI90O22\n-",
                "short": true
            }],
            "mrkdwn_in": ["text", "fields"],
            "text": "Just click the site names and start buying. Get *extra reduction with the offer code*, if provided.",
            "thumb_url": "http://example.com/thumbnail.jpg"
        }]
    }`
}