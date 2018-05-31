import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user.model';
import {Entry} from '../shared/Entry.model';
import {AutocompleteFilterEmployeesComponent} from '../auto-complete/autocomplete.component';
import {ElasticsearchService} from '../elasticsearch.service';
import {EntryService} from '../entry.service';


@Component({
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css']
})

export class AdminComponent implements OnInit {
  users: any[];
  selectedUser: User;
  selectedUserName: string;
  date: Date;

  entry: Entry;
  showQueryResults = false;

  constructor(private userService: UserService, private entryService: EntryService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .then(response => {
        this.users = response.hits.hits;
        console.log(response);
      }, error => {
        console.error(error);
      }).then(() => {
      console.log('Got all users');
    });
  }

  receiveEmployee($event) {
    this.selectedUserName = $event;
    if (this.users) {
      this.selectedUser = this.users.find(u => u.username === this.selectedUserName);
    }
  }

  receiveDate($event) {
    this.date = $event;
  }

  getEntry() {
    if (this.selectedUser && this.date) {
      this.entryService.getEntryByDateAndUsername(this.date.toLocaleDateString('en-US'), this.selectedUser.username)
        .then(response => {
          this.entry = response.hits.hits;
          console.log(response);
        }, error => {
          console.error(error);
        }).then(() => {
          console.log('search completed!');
          this.showQueryResults = true;
        });
    }
  }
}
