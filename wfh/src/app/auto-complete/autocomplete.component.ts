import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'autocomplete-filter',
  templateUrl: 'autocomplete.component.html',
  styleUrls: ['autocomplete.component.css']
})
export class AutocompleteFilterEmployees implements OnInit {

  myControl: FormControl = new FormControl();
  filteredEmployees: Observable<string[]>;

  employees = [
    'Alex Stevens',
    'Hunter Jenkins',
    'LeBron James',
    'Barack Obama',
    'Jason Hansen',
    'Kobe Bryant',
    'Donovan Mitchell',
    'Russell Westbrook',
    'Kevin Love'
  ];


  ngOnInit() {
    this.filteredEmployees = this.myControl.valueChanges
      .pipe(startWith(''),map(val => this.filter(val)) );
  }

  filter(val: string): string[] {
    return this.employees.filter(employee => employee.toLowerCase().includes(val.toLowerCase()));
  }

}