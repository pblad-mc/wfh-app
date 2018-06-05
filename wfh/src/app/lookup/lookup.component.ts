import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Entry } from '../shared/Entry.model';
import { AutocompleteFilterEmployees } from '../auto-complete/autocomplete.component';


@Component({
    templateUrl: 'lookup.component.html',
    styleUrls: ['lookup.component.css']
})

export class LookupComponent implements OnInit {
    users: User[]
    usersNames: string[]
    selectedUser: User
    selectedUserName: string
    date: Date;
    dateString: string
    entry: Entry

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getUsers().then(users => { this.users = users })
    }


    receiveEmployee($event) {
        this.selectedUserName = $event
        if (this.users) {
            this.selectedUser = this.users.find(u => u.name == this.selectedUserName)
        }
        this.getEntry()
    }

    receiveDate($event) {
        this.date = $event;
        this.getEntry()
    }

    getEntry() {
        if (this.selectedUser && this.date) {
            this.entry = this.selectedUser.entries.find(entry => entry.date == this.date.toDateString())
            if (!this.entry) {
                this.entry = {
                    date: this.date.toDateString(),
                    morning_startTime: "--",
                    morning_didYesterday: "--",
                    morning_doingToday: "--",
                    morning_notes: "--",
                    evening_endTime: "--",
                    evening_didToday: "--",
                    evening_notes: "--"
                }
            }
        }
    }
}