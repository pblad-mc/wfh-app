import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'autocomplete-dates-filter',
  templateUrl: 'autocomplete-dates.component.html',
  styleUrls: ['autocomplete-dates.component.css']
})
export class AutocompleteFilterDates implements OnInit {

  myControl: FormControl = new FormControl();
  filteredDates: Observable<string[]>;

  dates = [
    'May 25, 2018',
    'May 24, 2018',
    'May 23, 2018',
    'May 22, 2018',
    'May 21, 2018',
    'May 20, 2018',
    'May 19, 2018',
    'May 18, 2018',
    'May 17, 2018',
    'May 16, 2018'
  ];


  ngOnInit() {
    this.filteredDates = this.myControl.valueChanges
      .pipe( startWith(''), map(val => this.filter(val)));
  }

  filter(val: string): string[] {
    return this.dates.filter(date => date.toLowerCase().includes(val.toLowerCase()));
  }

}