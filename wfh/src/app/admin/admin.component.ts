import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user.model';
import {Entry} from '../shared/Entry.model';
import {AutocompleteFilterEmployeesComponent} from '../auto-complete/autocomplete.component';
import {ElasticsearchService} from '../elasticsearch.service';


@Component({
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css']
})

export class AdminComponent implements OnInit {
  private static readonly USER_INDEX = 'wfh_users';
  private static readonly USER_TYPE = 'user';

  users: any[];
  usersNames: string[];
  selectedUser: User;
  selectedUserName: string;
  date: Date;

  entry: Entry;
  constructor(private elasticsearchService: ElasticsearchService) {
  }

  ngOnInit() {
    this.elasticsearchService.getAllDocuments(AdminComponent.USER_INDEX, AdminComponent.USER_TYPE)
      .then(response => {
        this.users = response.hits.hits;
        console.log(response);
      }, error => {
        console.error(error);
      }).then(() => {
        console.log('Got all users');
      });
    // console.log(this.userService.getUsers().then(users => {this.users = users}));

    // for (let user of this.users){
    //     this.usersNames.push(user.name)
    // }
    // console.log(this.usersNames);
  }

    receiveEmployee($event){
        this.selectedUserName = $event
        //console.log("this is what we got ", this.selectedUserName);
        if (this.users){
            this.selectedUser = this.users.find(u => u.name == this.selectedUserName)
        }
        this.getEntry()
    }

    receiveDate($event)
    {
        this.date = $event;
        this.getEntry()
    }

    getEntry(){
        if(this.selectedUser && this.date){
            this.entry = this.selectedUser.entries.find(entry => entry.date == this.date.toDateString())
        }
    }
}
