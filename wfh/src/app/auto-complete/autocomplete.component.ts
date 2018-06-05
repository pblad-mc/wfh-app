import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'autocomplete-filter',
  templateUrl: 'autocomplete.component.html',
  styleUrls: ['autocomplete.component.css']
})
export class AutocompleteFilterEmployees implements OnInit {

  myControl: FormControl = new FormControl();
  filteredEmployees: Observable<string[]>;
  value:string;

  @Output() selected = new EventEmitter<string>();

  employees = [];

  constructor(private userService: UserService){   
  }

  ngOnInit() {
    this.filteredEmployees = this.myControl.valueChanges
      .pipe(startWith(''),map(val => this.filter(val)) );
      this.userService.getUsers().then(users => {
        for(let user of users){
          this.employees.push(user.name)
        }
      })
    
  }

  filter(val: string): string[] {
    let filteredString =  this.employees.filter(employee => employee.toLowerCase().includes(val.toLowerCase()));
    this.value = filteredString[0];
    this.sendValue()
    return filteredString
  }



  getValue():string {
    return this.value;
  }

  sendValue(){
    this.selected.emit(this.value)
  }
}